import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/About.module.css";
import CosmonautImg from "../assets/imagesAbout/Cosmonaut.png";
import Linkedin from "../assets/logos/linkedin.png";
import gitHubImg from "../assets/logos/github.png";
import email from "../assets/logos/email.png";

function About() {
  return (
    <section className={styles["section-white"]}>
      <div className={styles.title}>
        <h2 className={styles["section-title"]}>The Team Orbital Code</h2>
        <p className={styles.paragraph}>
          Bienvenue dans notre agence de voyage spatial vers l'univers ! une
          entreprise leader dans le domaine des voyages spatiaux et offrons nos
          nos clients l'opportunité unique d'explorer les confins de l'univers.{" "}
          <br />
          Nous offrons une grande variété de services, des vols suborbitaux aux
          aux missions scientifiques et technologiques, et notre flotte d'engins
          spatiaux à la pointe de la technologie garantit une expérience sûre et
          confortable. <br />
          Si vous rêvez de voir les étoiles de près et de découvrir les mystères
          du cosmos, notre agence de voyage spatial est faite pour vous !
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles["container-1"]}>
          <div className={styles["team-item"]}>
            <img
              src={CosmonautImg}
              className={styles["team-img"]}
              alt="cosmonaut"
            />
            <h3>FRANCESCO TURELLO</h3>
            <div className={styles["team-info"]}>
              <p>Web developer</p>
            </div>
            <p>
              Francesco is an experienced web developer and cosmonaut who its
              its skills to create innovative solutions for space missions. He
              excels in both areas and his passion for space exploration led him
              to become a experienced cosmonaut. He is able to combine his two
              passions for creating advanced technologies for exploration from
              from space.
            </p>

            <ul className={styles["team-icon"]}>
              <Link to="https://github.com/fturello">
                <img
                  src={gitHubImg}
                  alt="github"
                  width="50"
                  className={styles.github}
                />
              </Link>
              <Link to="https://www.linkedin.com/in/francescoturello/">
                <img
                  src={Linkedin}
                  alt="linkedin"
                  width="50"
                  className={styles.linkedin}
                />
              </Link>
              <Link to="https://github.com/">
                <img
                  src={email}
                  alt="email"
                  width="50"
                  className={styles.email}
                />
              </Link>
            </ul>
          </div>
        </div>
        <div className={styles["container-2"]}>
          <div className={styles["team-item"]}>
            <img
              src={CosmonautImg}
              className={styles["team-img"]}
              alt="cosmonaut"
            />
            <h3>CLAUDIA GUERRERO</h3>
            <div className={styles["team-info"]}>
              <p>Web developer</p>
            </div>
            <p>
              Claudia is an experienced web developer and cosmonaut who excels
              in both areas. She is passionate about space technologies and uses
              its development skills web to create innovative solutions for
              missions spatial. She is also able to combine her two passions to
              create applications for space exploration.
            </p>
            <ul className={styles["team-icon"]}>
              <Link to="https://github.com/Clauga">
                <img
                  src={gitHubImg}
                  alt="github"
                  width="50"
                  className={styles.github}
                />
              </Link>
              <Link to="https://www.linkedin.com/in/claudia-guerrero-dev/">
                <img
                  src={Linkedin}
                  alt="linkedin"
                  width="50"
                  className={styles.linkedin}
                />
              </Link>
              <Link to="https://github.com/">
                <img
                  src={email}
                  alt="email"
                  width="50"
                  className={styles.email}
                />
              </Link>
            </ul>
          </div>
        </div>
        <div className="container-3">
          <div className={styles["team-item"]}>
            <img src={CosmonautImg} className={styles["team-img"]} alt="pic" />
            <h3>EMELINE LEFEBVRE</h3>
            <div className={styles["team-info"]}>
              <p>Web developer</p>
            </div>
            <p>
              Emeline is a passionate cosmonaut and web developer talented. She
              has great expertise in space technologies, having spent many years
              work on space missions with a space agency international. She is
              also skilled in web development, using his skills to create sites
              and applications innovative for users.
            </p>
            <ul className={styles["team-icon"]}>
              <Link to="https://github.com/EmiLef08">
                <img
                  src={gitHubImg}
                  alt="github"
                  width="50"
                  className={styles.github}
                />
              </Link>
              <Link to="https://www.linkedin.com/in/emeline-lefebvre-9147b0167/">
                <img
                  src={Linkedin}
                  alt="linkedin"
                  width="50"
                  className={styles.linkedin}
                />
              </Link>
              <Link to="https://github.com/">
                <img
                  src={email}
                  alt="email"
                  width="50"
                  className={styles.email}
                />
              </Link>
            </ul>
          </div>
        </div>
        <div className="container-4">
          <div className={styles["team-item"]}>
            <img
              src={CosmonautImg}
              className={styles["team-img"]}
              alt="cosmonaut"
            />
            <h3>KADIR YILMAZ</h3>
            <div className={styles["team-info"]}>
              <p>Web developer</p>
            </div>
            <p>
              Kadir is a talented web developer and cosmonaut who excels in both
              areas. He uses his skills in web development to create innovative
              solutions for space missions, and his passion for space
              exploration has leads to becoming an experienced cosmonaut. He is
              able to combine his two passions to create advanced technologies
              for space exploration.
            </p>
            <ul className={styles["team-icon"]}>
              <Link to="https://github.com/MrRobo1">
                <img
                  src={gitHubImg}
                  alt="github"
                  width="50"
                  className={styles.github}
                />
              </Link>
              <Link to="https://www.linkedin.com/in/kadiryilmaz22/">
                <img
                  src={Linkedin}
                  alt="linkedin"
                  width="50"
                  className={styles.linkedin}
                />
              </Link>
              <Link to="https://github.com/">
                <img
                  src={email}
                  alt="email"
                  width="50"
                  className={styles.email}
                />
              </Link>
            </ul>
          </div>
        </div>
        <div className={styles["container-5"]}>
          <div className={styles["team-item"]}>
            <img
              src={CosmonautImg}
              className={styles["team-img"]}
              alt="cosmonaut"
            />
            <h3>PIERRE SAINT-AUBIN</h3>
            <div className={styles["team-info"]}>
              <p>Web developer</p>
            </div>
            <p>
              Pierre is an experienced web developer and cosmonaut who excels in
              both areas. He uses his skills in web development to create
              innovative solutions for space missions, and his passion for space
              exploration has leads to becoming an experienced cosmonaut. He is
              able to combine his two passions to create advanced technologies
              for space exploration.
            </p>
            <ul className={styles["team-icon"]}>
              <Link to="https://github.com/PierreStA">
                <img
                  src={gitHubImg}
                  alt="github"
                  width="50"
                  className={styles.github}
                />
              </Link>
              <Link to="https://www.linkedin.com/in/p-saintaubin/">
                <img
                  src={Linkedin}
                  alt="linkedin"
                  width="50"
                  className={styles.linkedin}
                />
              </Link>
              <Link to="https://github.com/">
                <img
                  src={email}
                  alt="email"
                  width="50"
                  className={styles.email}
                />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
