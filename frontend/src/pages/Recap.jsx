import styles from "../styles/Recap.module.css";

function Recap() {
  return (
    <div className={styles.Container}>
      <div className={styles.BackRecap}>
        <h1>Récapitulatif de votre voyage</h1>
        <p>Joseph Cooper voici vos dates:</p>
        <table>
          <tbody>
            <tr>
              <td>Départ</td>
              <td>Retour</td>
            </tr>
            <tr>
              <td>17/01/2023</td>
              <td>22/10/2023</td>
            </tr>
          </tbody>
        </table>
        <button type="button">
          <span />
          <span />
          <span />
          <span />
          Confirmer
        </button>
      </div>
    </div>
  );
}

export default Recap;
