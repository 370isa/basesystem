const { time } = require('../../lib/utils')
const db = require('../../config/db')

module.exports = {
  all(callback) {
    db.query(`
      SELECT * FROM services
    `, function(err, results) {
      if (err) throw `Database Error! - ${err}`

      callback(results.rows)
    })
  },
  create(data, callback) {
    const query = `
      INSERT INTO services (
        name,
        time,
        price
      ) VALUES ($1, $2, $3)
      RETURNING id
    `

    const values = [
      data.name,
      data.time,
      data.price
    ]

    db.query(query, values, function(err, results) {
      if (err) throw `Database Error! - ${err}`

      callback(results.rows)
    })
  },
  find(id, callback) {
    db.query(`
      SELECT * FROM services
      WHERE id = $1
    `, [id], function(err, results) {
      if (err) throw `Database Error! - ${err}`

      callback(results.rows[0])
    })
  },
  update(data, callback) {
    const query = `
      UPDATE services SET
        name = ($1),
        time = ($2),
        price = ($3)
      WHERE id = $4
    `

    const values = [
      data.name,
      data.time,
      data.price,
      data.id
    ]

    db.query(query, values, function(err, results) {
      if (err) throw `Database Error! - ${err}`

      callback(results.rows)
    })
  },
  delete(id, callback) {
    db.query(`
      DELETE FROM services
      WHERE id = $1
    `, [id], function(err) {
      if (err) throw `Database Error! - ${err}`

      return callback()
    })
  }
}
