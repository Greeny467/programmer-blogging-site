-- MySQL dump 10.13  Distrib 8.1.0, for Win64 (x86_64)
--
-- Host: localhost    Database: forum_db
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL,
  `user_id` int DEFAULT NULL,
  `post_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `post_id` (`post_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'Great introduction to JavaScript!',1,1,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(2,'I found Python very beginner-friendly.',2,2,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(3,'HTML and CSS are essential for web design.',3,3,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(4,'Java can be challenging but rewarding.',4,4,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(5,'SQL queries are powerful tools for data retrieval.',5,5,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(6,'I love C++ for game development!',1,6,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(7,'React makes web development fun.',2,7,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(8,'Data science is a fascinating field.',3,8,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(9,'I have a question about JavaScript.',4,1,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(10,'Can Python be used for machine learning?',5,2,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(11,'I\'m struggling with CSS layouts.',1,3,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(12,'Any tips for optimizing Java applications?',2,4,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(13,'How do I join tables in SQL?',3,5,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(14,'C++ syntax can be complex.',4,6,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(15,'React\'s component-based approach is fantastic.',5,7,'2023-09-23 02:26:30','2023-09-23 02:26:30');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `text` varchar(255) NOT NULL,
  `user_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'Introduction to JavaScript','Learn the fundamentals of JavaScript, a popular programming language for web development.',1,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(2,'Java Programming Masterclass','Become THE Java master and build powerful applications with this comprehensive course.',4,'2023-09-23 02:26:30','2023-09-24 19:02:02'),(3,'Web Development with HTML and CSS','Create beautiful websites with HTML and CSS, the building blocks of the web.',3,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(4,'Python for Beginners','Get started with Python, a versatile and easy-to-learn programming language.',2,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(5,'Database Design and SQL','Learn how to design databases and query data using SQL.',5,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(6,'C++ Programming Essentials','Master the C++ programming language for game development and more.',1,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(7,'Front-End Web Development with React','Build interactive and dynamic web applications with React.js.',2,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(8,'Data Science with Python','Explore data science and machine learning using Python libraries like NumPy and Pandas.',3,'2023-09-23 02:26:30','2023-09-23 02:26:30'),(10,'I really like Handlebars ','I like the way that handlebars is written and structured. It has simpler syntax and structure than other technologies. ',4,'2023-09-24 19:40:34','2023-09-24 19:41:39');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('0Bu5g-PYjayJEtwX25YZgDyXJs0xujyW','2023-09-25 19:52:13','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"}}','2023-09-24 19:52:13','2023-09-24 19:52:13'),('FnB_aDoGFbAqepGnXnGZkfZUpqVlt-NK','2023-09-25 20:49:01','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"userId\":4}','2023-09-24 20:44:37','2023-09-24 20:49:01');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Jordan','jordan99@msn.com','$2b$10$cKCFY.d7hygVE/L4vfkJqObyTwBtwZjRhV5yfrQjL74dYzgpnmoTC'),(2,'Lernantino','lernantino@gmail.com','$2b$10$25ph/OJvVhuHZGwLeSvsru5oEB55fgvuyzIBaRrYi3wjqOQWZFVU.'),(3,'Amiko','amiko2k20@aol.com','$2b$10$CGGi3iHb3eI4QGVMurVxS..GncGuYcNG4UXYWTPr1cCUJOkT6ijsy'),(4,'Sal','sal@hotmail.com','$2b$10$0QOwGnEAFtwLb1QK6W1nTu2vhlVe1IAP.HNTBL1es9fTnzR4Ig0km'),(5,'Blake','the_blake@yahoo.com','$2b$10$EJfozMrb9RRoleHQrzJh6OiafgFs/8kfV327TbOqFo4RjT6WrG8w6'),(6,'newGuy1','newGuy1@gmail.com','$2b$10$TZZhTr.wPMxrdzeCyfGFhetOdGbWHr7J1nRwYTCFtGgGyab.ZeEOK'),(7,'newGuy2','newGuy2@gmail.com','$2b$10$XAnXp57mDGX.PvaRQJ6yiO8w0v2E51.p9ZoZWRgsdzy3BGQdSVDDq');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-24 15:58:48
