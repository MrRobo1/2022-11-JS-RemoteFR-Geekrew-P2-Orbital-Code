const AbstractManager = require("./AbstractManager");

class TripManager extends AbstractManager {
  constructor() {
    super({ table: "trip" });
  }

  insert(trip) {
    return this.connection.query(
      `insert into ${this.table} (first_name, last_name, email, phone_number, departure_date, return_date, planet, rocket, price ) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        trip.first_name,
        trip.last_name,
        trip.email,
        trip.phone_number,
        trip.departure_date,
        trip.return_date,
        trip.planet,
        trip.rocket,
        trip.price,
      ]
    );
  }
}
module.exports = TripManager;
