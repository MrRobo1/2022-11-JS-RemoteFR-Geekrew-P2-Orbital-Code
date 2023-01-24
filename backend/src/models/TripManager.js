const AbstractManager = require("./AbstractManager");

class TripManager extends AbstractManager {
  constructor() {
    super({ table: "trip" });
  }

  insert(trip) {
    return this.connection.query(
      `insert into ${this.table} (departure_date, return_date, planet, rocket) values (?, ?, ?, ?)`,
      [trip.departure_date, trip.return_date, trip.planet, trip.rocket]
    );
  }
}
module.exports = TripManager;
