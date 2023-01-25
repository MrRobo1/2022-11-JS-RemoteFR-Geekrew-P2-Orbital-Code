-- MariaDB dump 10.19  Distrib 10.10.2-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: galaxy_getaways
-- ------------------------------------------------------
-- Server version	10.10.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `planet`
--

DROP TABLE IF EXISTS `planet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `planet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `planet_name` varchar(255) NOT NULL,
  `texture_image` varchar(255) NOT NULL,
  `animation_duration` int(11) NOT NULL,
  `height` int(11) NOT NULL,
  `width` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `composition` varchar(255) NOT NULL,
  `climate` varchar(255) NOT NULL,
  `diameter` int(11) NOT NULL,
  `earth_distance` bigint(20) NOT NULL,
  `activity1_image` varchar(255) NOT NULL,
  `activity2_image` varchar(255) NOT NULL,
  `hotel_image` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `year` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `planet`
--

LOCK TABLES `planet` WRITE;
/*!40000 ALTER TABLE `planet` DISABLE KEYS */;
INSERT INTO `planet` VALUES
(1,'Eris','eris.jpg',9900000,25,25,'Telluric','Barium','Polar',253524,10181909050,'skiing.png','boating.png','hotel.png',102390,'Eris est une planète tellurique, située à l\'extérieur du système solaire. Elle est connue pour ses hautes montagnes, qui offrent des vues panoramiques époustouflantes. Les randonnées et les ascensions y sont très populaires. Les températures sur Eris varient considérablement en fonction de l\'altitude. Eris est également un endroit idéal pour les amateurs d\'astronomie, car il offre des conditions de ciel nocturne claires et une vue imprenable sur notre système solaire.',43),
(2,'Haumea','haumea.jpg',5295824,34,34,'Telluric','Selenium','Desertic',342827,1149598023,'climbing.png','zipline.png','greenhotel.png',10480,'Haumea est une planète tellurique, située à l\'extérieur du système solaire. Elle est connue pour son paysage désertique et son hôtel 5 étoiles. Le désert offre une vue imprenable sur les étoiles et les constellations, rendant l\'observation astronomique un vrai plaisir pour les amateurs. En ce qui concerne l\'hôtel 5 étoiles, il propose des chambres luxueuses, des restaurants gastronomiques, des piscines et des installations de spa pour un séjour de détente et de luxe. Les activités sur Haumea incluent des excursions [en 4x4, des safaris de désert et des vols panoramiques pour explorer les vastes étendus de sable].',34),
(3,'Icy','icy.jpg',2785712,20,20,'Telluric','Hydrogen','Polar',203851,80562258751,'iceclimbing.png','skiing1.png','icehotel.png',853720,'Icy est une planète naine recouverte de glace, située à l\'extérieur du système solaire. Cette planète offre des paysages époustouflants de montagnes enneigées et de vastes étendues glacées. Les aventures en plein air, comme les randonnées et les excursions en motoneige, y sont très populaires. Les amateurs de sports d\'hiver pourront également profiter de ses pistes de ski de haute montagne.',12),
(4,'Jupiter','jupiter.jpg',7392751,40,40,'Gaseous','Helium','Nimbus',409231,778340821,'bungee.png','sandboard.png','modernhotel.png',7580,'Notre voyage sur Jupiter vous emmènera à la découverte de l\'une de ses lunes les plus fascinantes, Europa. Cette lune glacée est connue pour ses vastes océans sous-glaciaires et ses paysages époustouflants, formés par les vents et les tempêtes de la géante gazeuse. Les clients pourront explorer les grottes sous-glaciaires à bord de submersibles high-tech et découvrir des formes de vie extraterrestres uniques.',29),
(5,'Xantheus','xantheus.jpg',100000,42,42,'Gaseous','Berylium','Nimbus',420131,35254854321,'hotairballoon.png','festival.png','pinkhotel.png',329100,'La planète Xantheus est un véritable joyau caché de l\'univers. Avec ses paysages époustouflants et son atmosphère rose, elle est l\'endroit idéal pour une escapade extraterrestre inoubliable. Les voyageurs pourront découvrir des champs de fleurs roses à perte de vue, des montagnes enneigées et des lacs turquoise. Les nuits sont illuminées par des aurores boréales d\'une couleur rose vif, offrant un spectacle époustouflant. Xantheus est également célèbre pour ses formes de vie uniques, comme les licornes spatiales et les papillons géants. . Réservez votre voyage sur Xantheus dès maintenant!',1),
(6,'Venus','venus.jpg',1538365,30,30,'Telluric','CO₂','Pyroclime',305666,108208475,'surfing.png','water.png','amazinghotel.png',1000,'Venus est la deuxième planète à partir du Soleil dans notre système solaire. Vous y découvrirez des volcans actifs, des montagnes enneigées et des vastes plaines de lave. Venus est également un lieu de choix pour les amoureux de l\'astronomie, en effet c’est le point le plus proche et le mieux équipé pour l’observation du soleil. ',4),
(7,'Moon','moon.jpg',795282,15,15,'Telluric','Silicium','Desertic',90250,384400,'biking.png','skydiving.png','luxuryhotel.png',599,'La lune, éternel source d’inspiration pour les poètes et de défi pour nos ancêtres. Si proche mais toujours exotique, les activités populaires incluent des randonnées et les excursions en 4x4, des vols panoramiques pour admirer la vue imprenable sur la Terre. Amateur d’archéologie venez visiter les anciens sites d\'alunissage des missions Apollo.',2),
(8,'Black Hole','type',5,31,30,'Undescribed','Undescribed','Unexpected',99342827,542462258945132,'blackhole.png','none','none',153090,'Voyage sans lendemain: Plongez dans l\'inconnu avec notre excursion ultime à travers un trou noir. Imaginez vous flottant dans l\'espace infini, contemplant les merveilles de l\'univers tout en sachant que vous êtes sur le point de vivre l\'expérience la plus intense de votre vie. Ce voyage sans retour vous emmènera au-delà de ce que vous avez jamais imaginé possible, vous permettant d\'explorer des mondes inexplorés et de découvrir des secrets cachés de l\'univers. Ne manquez pas cette occasion unique de vivre une aventure que peu d\'autres auront la chance de vivre. Réservez votre place dès maintenant pour le voyage sans lendemain de votre vie.',1051);
/*!40000 ALTER TABLE `planet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rocket`
--

DROP TABLE IF EXISTS `rocket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rocket` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rocket_name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price_supplement` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rocket`
--

LOCK TABLES `rocket` WRITE;
/*!40000 ALTER TABLE `rocket` DISABLE KEYS */;
INSERT INTO `rocket` VALUES
(1,'Crew Dragon','shuttle1.png',0),
(2,'USS Enterprise','shuttle2.png',2000),
(3,'StarSpeeder 3000','shuttle3.png',5000);
/*!40000 ALTER TABLE `rocket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trip`
--

DROP TABLE IF EXISTS `trip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trip` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `departure_date` date NOT NULL,
  `return_date` date NOT NULL,
  `planet` int(11) NOT NULL DEFAULT 0,
  `rocket` int(11) NOT NULL DEFAULT 0,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `trip_FK` (`planet`),
  KEY `trip_FK_1` (`rocket`),
  CONSTRAINT `trip_FK` FOREIGN KEY (`planet`) REFERENCES `planet` (`id`),
  CONSTRAINT `trip_FK_1` FOREIGN KEY (`rocket`) REFERENCES `rocket` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trip`
--

LOCK TABLES `trip` WRITE;
/*!40000 ALTER TABLE `trip` DISABLE KEYS */;
/*!40000 ALTER TABLE `trip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'galaxy_getaways'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-24 11:09:55
