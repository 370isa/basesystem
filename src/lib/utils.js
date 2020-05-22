module.exports = {
  age(timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)

    let age = today.getFullYear() - birthDate.getFullYear()
    let month = today.getMonth() - birthDate.getMonth()

    if (
      month < 0 ||
      month == 0 &&
      today.getDate() <= birthDate.getDate()
    ) {
      age -= 1
    }

    return age
  },
  date(timestamp) {
    const date = new Date(timestamp)

    const year = date.getUTCFullYear()
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)

    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`,
      format: `${day}/${month}/${year}`
    }
  },
  time(timestamp) {
    const time = new Date(timestamp)

    const hour = `0${time.getUTCHours()}`.slice(-2)
    const min = `0${time.getUTCMinutes()}`.slice(-2)
    const seconds = `0${time.getUTCSeconds()}`.slice(-2)

    return {
      time: `${min}`,
      iso: `${hour}:${min}:${seconds}`
    }
  }
}
