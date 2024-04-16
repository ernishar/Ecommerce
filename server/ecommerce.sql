-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 16, 2024 at 12:46 PM
-- Server version: 8.2.0
-- PHP Version: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `CategoryID` int NOT NULL AUTO_INCREMENT,
  `CategoryName` varchar(250) NOT NULL,
  PRIMARY KEY (`CategoryID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `optiongroups`
--

DROP TABLE IF EXISTS `optiongroups`;
CREATE TABLE IF NOT EXISTS `optiongroups` (
  `OptionGroupID` int NOT NULL,
  `OptionGroupName` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

DROP TABLE IF EXISTS `options`;
CREATE TABLE IF NOT EXISTS `options` (
  `OptionID` int NOT NULL AUTO_INCREMENT,
  `OptionGroupID` int NOT NULL,
  `OptionName` varchar(50) NOT NULL,
  PRIMARY KEY (`OptionID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `OrderID` int NOT NULL AUTO_INCREMENT,
  `OrderUserID` int NOT NULL,
  `OrderAmount` float NOT NULL,
  `OrderShipName` varchar(100) NOT NULL,
  `OrderShipAddress` varchar(100) NOT NULL,
  `OrderShipAddress2` varchar(100) NOT NULL,
  `OrdeCity` varchar(50) NOT NULL,
  `OrderState` varchar(50) NOT NULL,
  `OrderZip` varchar(20) NOT NULL,
  `OrderCountry` varchar(50) NOT NULL,
  `OrderPhone` varchar(20) NOT NULL,
  `OrderMobile` varchar(20) NOT NULL,
  `OrderShipping` float NOT NULL,
  `OrderTax` float NOT NULL,
  `OrderEmail` varchar(100) NOT NULL,
  `OrderDate` timestamp NOT NULL,
  `OrderShipped` tinyint NOT NULL,
  `OrderTrackingNumber` varchar(20) NOT NULL,
  PRIMARY KEY (`OrderID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productoption`
--

DROP TABLE IF EXISTS `productoption`;
CREATE TABLE IF NOT EXISTS `productoption` (
  `ProductOptionID` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `ProductID` int UNSIGNED NOT NULL,
  `OptionID` int UNSIGNED NOT NULL,
  `ProductPriceIncrement` double NOT NULL,
  `OptionGroupID` int NOT NULL,
  PRIMARY KEY (`ProductOptionID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `ProductID` int NOT NULL AUTO_INCREMENT,
  `ProductSKU` varchar(50) NOT NULL,
  `ProductName` varchar(100) NOT NULL,
  `ProductPrice` float NOT NULL,
  `ProdcutWeight` float NOT NULL,
  `ProdcutCartDesc` varchar(250) NOT NULL,
  `ProdcutShortDesc` varchar(1000) NOT NULL,
  `ProductThumb` varchar(100) NOT NULL,
  `ProductImage` varchar(100) NOT NULL,
  `ProductCatogryID` int DEFAULT NULL,
  `ProductUpdateDate` timestamp NOT NULL,
  `ProductStock` float DEFAULT NULL,
  `ProductLive` tinyint(1) NOT NULL,
  `ProductUnlimited` tinyint(1) NOT NULL,
  `Productocation` varchar(250) NOT NULL,
  `ProductLongDesc` text NOT NULL,
  PRIMARY KEY (`ProductID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `roleId` tinyint NOT NULL AUTO_INCREMENT,
  `roleName` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `userId` smallint NOT NULL,
  PRIMARY KEY (`roleId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `UserID` int NOT NULL,
  `UserEmail` varchar(500) NOT NULL,
  `UserFirstName` varchar(500) NOT NULL,
  `UserLastName` varchar(500) NOT NULL,
  `UserCity` varchar(50) NOT NULL,
  `UseState` varchar(90) NOT NULL,
  `UserZip` varchar(12) NOT NULL,
  `UserEmailVeified` tinyint NOT NULL DEFAULT '1',
  `UserRegistraionCode` timestamp NOT NULL,
  `UserVarificationCode` varchar(20) NOT NULL,
  `UserIP` varchar(50) NOT NULL,
  `UserPhone` varchar(20) NOT NULL,
  `UserMobile` varchar(20) NOT NULL,
  `UserPassword` varchar(50) NOT NULL,
  `UserCountry` varchar(50) NOT NULL,
  `UserAddress` varchar(100) NOT NULL,
  `UserAddress2` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
