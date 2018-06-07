class PersonName {
  constructor (data) {
    data = data || {}
    this.firstName = data.firstName || ''
    this.lastName = data.lastName || ''
    this.fullName = `${this.firstName} ${this.lastName}`
  }
}

module.exports = PersonName
