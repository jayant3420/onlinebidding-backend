-- MySQL dump 10.13  Distrib 8.0.36, for macos14 (x86_64)
--
-- Host: 127.0.0.1    Database: onlinebidding
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bids`
--

DROP TABLE IF EXISTS `bids`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bids` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int NOT NULL,
  `userId` int NOT NULL,
  `bidAmount` decimal(10,2) NOT NULL,
  `bidTime` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `userId` (`userId`),
  CONSTRAINT `bids_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `bids_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bids`
--

LOCK TABLES `bids` WRITE;
/*!40000 ALTER TABLE `bids` DISABLE KEYS */;
INSERT INTO `bids` VALUES (1,1,1,110.00,'2024-10-20 20:36:18'),(2,1,1,115.00,'2024-10-20 20:38:59'),(3,5,1,303.00,'2024-10-20 20:47:29'),(4,5,1,304.00,'2024-10-20 20:47:40'),(5,2,3,200.00,'2024-11-05 18:52:02'),(6,2,3,300.00,'2024-11-05 19:05:46'),(7,2,3,310.00,'2024-11-05 19:12:54'),(8,2,3,320.00,'2024-11-05 19:39:14'),(9,2,6,350.00,'2024-11-05 20:41:13'),(10,4,6,251.00,'2024-11-05 21:23:26'),(11,4,4,255.00,'2024-11-05 21:24:04'),(12,4,8,300.00,'2024-11-05 21:25:00'),(13,4,3,301.00,'2024-11-05 21:25:53');
/*!40000 ALTER TABLE `bids` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `imageUrl` varchar(255) DEFAULT NULL,
  `auctionStatus` varchar(255) DEFAULT NULL,
  `minBidAmount` decimal(10,2) NOT NULL,
  `currentBidAmount` decimal(10,2) DEFAULT NULL,
  `bidStartTime` datetime DEFAULT NULL,
  `bidEndTime` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Smartphone','A high-end smartphone with the latest features.','https://images.unsplash.com/photo-1511707171634-5f897ff02aa9','active',100.00,115.00,'2024-11-05 00:28:31','2024-11-05 22:43:19','2024-10-20 17:43:19','2024-10-20 20:38:59'),(2,'Laptop','A powerful laptop perfect for work and entertainment.','https://fastly.picsum.photos/id/5/5000/3334.jpg?hmac=R_jZuyT1jbcfBlpKFxAb0Q3lof9oJ0kREaxsYV3MgCc','active',150.00,350.00,'2024-11-05 00:28:31','2024-11-06 03:43:19','2024-10-20 17:43:19','2024-11-05 20:41:13'),(3,'Headphones','Noise-cancelling headphones for a premium audio experience.','https://i.ibb.co/5GbWWdQ/headphones.jpg','active',200.00,500.00,'2024-11-05 00:28:31','2024-11-05 17:43:19','2024-10-20 17:43:19','2024-10-20 17:43:19'),(4,'Smartwatch','A stylish and functional smartwatch for all-day use.','https://i.ibb.co/YWVqk6D/adam-birkett-QRWAd-BCqysc-unsplash.jpg','active',250.00,301.00,'2024-11-05 00:28:31','2024-11-07 17:43:19','2024-10-20 17:43:19','2024-11-05 21:25:53'),(5,'Camera','A professional-grade camera for capturing stunning photos.','https://i.ibb.co/vQq5jJh/sebastian-pichler-MDGpwp-MY2-Ws-unsplash.jpg','active',300.00,304.00,'2024-11-05 00:28:31','2024-11-06 22:43:19','2024-10-20 17:43:19','2024-10-20 20:47:40'),(6,'Bluetooth Speaker','A portable Bluetooth speaker with powerful sound quality.','https://i.ibb.co/wrjVv3r/james-gibson-c-XBE4v-Ga-MSQ-unsplash.jpg','active',350.00,500.00,'2024-11-05 00:28:31','2024-11-07 03:43:19','2024-10-20 17:43:19','2024-10-20 17:43:19'),(7,'Television','A 4K Ultra HD television with stunning picture quality.','https://i.ibb.co/wNYKWJV/television.jpg','active',400.00,NULL,'2024-11-05 00:28:31','2024-11-05 17:43:19','2024-10-20 17:43:19','2024-10-20 17:43:19'),(8,'Tablet','A lightweight tablet ideal for reading, browsing, and watching videos.','https://i.ibb.co/zZXCZBR/tablet.jpg','active',450.00,NULL,'2024-11-05 00:28:31','2024-11-08 17:43:19','2024-10-20 17:43:19','2024-10-20 17:43:19'),(9,'Gaming Console','A next-gen gaming console for the ultimate gaming experience.','https://i.ibb.co/KbZDVF1/anthony-A2w-Lt-PGTWKA-unsplash.jpg','active',500.00,550.00,'2024-11-05 00:28:31','2024-11-06 22:43:19','2024-10-20 17:43:19','2024-10-20 17:43:19'),(10,'Wireless Earbuds','Compact wireless earbuds with crystal-clear sound quality.','https://i.ibb.co/52Q8TrT/wireless-earbuds.jpg','active',550.00,NULL,'2024-11-05 00:28:31','2024-11-07 03:43:19','2024-10-20 17:43:19','2024-10-20 17:43:19'),(11,'Desktop Computer','A high-performance desktop computer for gaming and work.','https://i.ibb.co/0BBHSX2/desktop-computer.jpg','active',600.00,NULL,'2024-11-05 00:28:31','2024-11-06 17:43:19','2024-10-20 17:43:19','2024-10-20 17:43:19'),(12,'DSLR Camera','A DSLR camera that takes professional-grade photos and videos.','https://i.ibb.co/6tmS6Qt/dslr-camera.jpg','active',650.00,800.00,'2024-11-05 00:28:31','2024-11-08 17:43:19','2024-10-20 17:43:19','2024-10-20 17:43:19'),(13,'Smart Home Assistant','A smart home assistant that makes life easier and more connected.','https://i.ibb.co/kSCCbLm/smart-home-assistant.jpg','active',700.00,NULL,'2024-11-05 00:28:31','2024-11-05 22:43:19','2024-10-20 17:43:19','2024-10-20 17:43:19'),(14,'Portable Hard Drive','A portable hard drive with fast data transfer and large storage capacity.','https://i.ibb.co/m9Ztn7m/portable-hard-drive.jpg','active',750.00,1000.00,'2024-11-05 00:28:31','2024-11-06 03:43:19','2024-10-20 17:43:19','2024-10-20 17:43:19'),(15,'Drone','A high-tech drone capable of capturing aerial footage in 4K.','https://i.ibb.co/TwGkSCR/drone.jpg','active',800.00,1200.00,'2024-11-05 00:28:31','2024-11-06 17:43:19','2024-10-20 17:43:19','2024-10-20 17:43:19');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `deviceToken` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test','test','test@yopmail.com','$2b$15$MXAHHLuhRZRN7kes/P1NGuyECt8BjL3q0k8G/YVxhfREuF1ciiLMm',NULL,'2024-10-20 11:11:54','2024-10-20 14:45:17'),(2,'test','test','test1@yopmail.com','$2b$15$MXAHHLuhRZRN7kes/P1NGuyECt8BjL3q0k8G/YVxhfREuF1ciiLMm',NULL,'2024-10-20 14:22:50','2024-10-20 14:45:17'),(3,'test','test','test2@yopmail.com','$2b$15$MXAHHLuhRZRN7kes/P1NGuyECt8BjL3q0k8G/YVxhfREuF1ciiLMm',NULL,'2024-10-20 14:24:02','2024-10-20 14:45:17'),(4,'test','test','test3@yopmail.com','$2b$15$MXAHHLuhRZRN7kes/P1NGuyECt8BjL3q0k8G/YVxhfREuF1ciiLMm',NULL,'2024-10-20 14:44:55','2024-10-20 14:44:55'),(5,'test','test','test4@yopmail.com','$2b$15$UuS8qQ59B0Ph.lRtxPuARO6iME.zagG0IY.nnhRURFv8RVHi3R4Bm',NULL,'2024-10-20 20:41:51','2024-10-20 20:41:51'),(6,'test5','test5','test5@yopmail.com','$2b$15$izRt4xP3b6Nvs1mSQizWIuiYxJ3LYpBc7D38h71BeuEWNrIdoScq2',NULL,'2024-11-04 17:47:03','2024-11-04 17:47:03'),(7,'test3','test5','test6@yopmail.com','$2b$15$Z6LedeGlDQ3HRkpPbzQiXORbBS9/F/L3OesmfUt966sWZ0KmH4BwG',NULL,'2024-11-04 17:54:31','2024-11-04 17:54:31'),(8,'jaytest','jaytest','jaytest@yopmail.com','$2b$15$vSZNghfTog6na8oMTGEjduWxtpMB22D89E2G/8gh8Z16rj3evCLuC',NULL,'2024-11-05 21:24:36','2024-11-05 21:24:36');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-06  3:08:06
