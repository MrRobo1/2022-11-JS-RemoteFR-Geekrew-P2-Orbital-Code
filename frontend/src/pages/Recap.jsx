import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../styles/Recap.module.css";

function Recap() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/trips")
      .then((res) => setTrips(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.ContRecap}>
      <div className={styles.BackRecap}>
        <h1>Summary of your trip</h1>
        {trips.slice(-1).map((trip) => (
          <>
            <p className={styles.Tripp}>
              {trip.firstName}, {trip.lastName} here are your dates:
            </p>
            <table>
              <tbody>
                <tr>
                  <td>Departure</td>
                  <td>Return</td>
                </tr>
                <tr>
                  <td>{new Date(trip.departure).toLocaleDateString()}</td>
                  <td>{new Date(trip.returne).toLocaleDateString()}</td>
                </tr>
              </tbody>
            </table>
            <p className={styles.Tripp}>{trip.price}</p>
          </>
        ))}
        <Link to="/confirm">
          <span />
          <span />
          <span />
          <span />
          Confirm
        </Link>
      </div>
    </div>
  );
}

export default Recap;
