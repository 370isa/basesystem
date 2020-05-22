const { date } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
  all(callback) {
    db.query('SELECT * FROM customers ORDER BY name', function(err, results) {
      if (err) throw `Database Error! - ${err}`

      callback(results.rows)
    })
  },
  create(data, callback) {
    const query = `
      INSERT INTO customers (
        name,
        birth,
        create_at,
        phone
      ) VALUES ($1, $2, $3, $4)
      RETURNING id
    `

    const values = [
      data.name,
      date(data.birth).iso,
      date(Date.now()).iso,
      data.phone
    ]

    db.query(query, values, function(err, results) {
      if (err) throw `Database Error! - ${err}`

      callback(results.rows)
    })
  },
  find(id, callback) {
    db.query(`
      SELECT *
      FROM customers
      WHERE id = $1`, [id], function(err, results) {
        if (err) throw `Database Error! - ${err}`

        callback(results.rows[0])
      }
    )
  },
  findBy(filter, callback) {
    db.query(`
      SELECT * FROM customers
      WHERE name ILIKE '%${filter}%'
    `, function(err, results) {
      if (err) throw `Database Error - ${err}`

      callback(results.rows)
    })
  },
  update(data, callback) {
    const query = `
      UPDATE customers SET
        name = ($1),
        birth = ($2),
        phone = ($3)
      WHERE id = $4
    `

    const values = [
      data.name,
      date(data.birth).iso,
      data.phone,
      data.id
    ]

    db.query(query, values, function(err, results) {
      if (err) throw `Database Error! - ${err}`

      callback(results.rows)
    })
  },
  delete(id, callback) {
    db.query(`
      DELETE FROM customers
      WHERE id = $1`, [id], function(err) {
        if (err) throw `Database Error! - ${err}`

        return callback()
      }
    )
  }
}
