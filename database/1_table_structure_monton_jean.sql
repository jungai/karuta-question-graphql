CREATE DATABASE /*!32312 IF NOT EXISTS*/ `jungai_test` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `jungai_test`;

DROP TABLE IF EXISTS `monton_jean`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monton_jean` (
  `monton_id` int(10) NOT NULL AUTO_INCREMENT,
  `monton_code` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `monton_name` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`monton_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS `monton_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monton_user` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT,
  `monton_id` int(11) NOT NULL COMMENT 'Monton Jean Id',
  `name` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`user_id`) USING BTREE,
  KEY `MontonJean` (`monton_id`) USING BTREE,
  CONSTRAINT `UserNeedInMontonJean` FOREIGN KEY (`monton_id`) REFERENCES `jungai_test`.`monton_jean` (`monton_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS `monton_idol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monton_idol` (
  `idol_id` int(10) NOT NULL AUTO_INCREMENT,
  `idol_name` varchar(50) NOT NULL DEFAULT '',
  `user_id` int(11) NOT NULL COMMENT 'User Id',
  PRIMARY KEY (`idol_id`) USING BTREE,
  KEY `UserId` (`user_id`) USING BTREE,
  CONSTRAINT `UserNeedFollowIdol` FOREIGN KEY (`user_id`) REFERENCES `jungai_test`.`monton_user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;
/*!40101 SET character_set_client = @saved_cs_client */;
