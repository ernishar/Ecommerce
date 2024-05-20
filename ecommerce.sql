-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 30, 2024 at 12:54 PM
-- Server version: 8.2.0
-- PHP Version: 8.1.26

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
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
CREATE TABLE IF NOT EXISTS `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `productId` int NOT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `count` int DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `productId` (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `userId`, `productId`, `productName`, `count`, `img`, `createdAt`, `updatedAt`) VALUES
(1, 1, 4, 'OPPOF19', 2, 'https://cdn.dummyjson.com/product-images/4/1.jpg', '2024-04-30 12:34:27', '2024-04-30 12:34:27'),
(2, 1, 4, 'OPPOF19', 2, 'https://cdn.dummyjson.com/product-images/4/1.jpg', '2024-04-30 12:44:50', '2024-04-30 12:44:50'),
(3, 1, 3, 'Samsung Universe 9', 2, 'https://cdn.dummyjson.com/product-images/3/1.jpg', '2024-04-30 12:44:50', '2024-04-30 12:44:50'),
(4, 1, 4, 'OPPOF19', 2, 'https://cdn.dummyjson.com/product-images/4/1.jpg', '2024-04-30 12:47:20', '2024-04-30 12:47:20'),
(5, 1, 3, 'Samsung Universe 9', 2, 'https://cdn.dummyjson.com/product-images/3/1.jpg', '2024-04-30 12:47:20', '2024-04-30 12:47:20'),
(6, 1, 4, 'OPPOF19', 2, 'https://cdn.dummyjson.com/product-images/4/1.jpg', '2024-04-30 12:49:32', '2024-04-30 12:49:32'),
(7, 1, 3, 'Samsung Universe 9', 2, 'https://cdn.dummyjson.com/product-images/3/1.jpg', '2024-04-30 12:49:32', '2024-04-30 12:49:32');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `isdeleted` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `categoryName`, `isdeleted`, `createdAt`, `updatedAt`) VALUES
(1, 'smartphones', 0, '2024-04-29 12:23:19', '2024-04-29 12:23:19');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `productName` varchar(255) DEFAULT NULL,
  `totalPrices` varchar(255) DEFAULT NULL,
  `status` tinyint DEFAULT '0',
  `delivery` tinyint DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `userId`, `phone`, `address`, `quantity`, `fullname`, `productName`, `totalPrices`, `status`, `delivery`, `createdAt`, `updatedAt`) VALUES
(1, 1, '9973775325', 'Ahmedabad Gujarat', 2, 'Nishar Alam', 'OPPOF19', '51198', 0, 0, '2024-04-30 12:34:27', '2024-04-30 12:34:27'),
(2, 1, '9973775325', 'Ahmedabad Gujarat', 2, 'Nishar Alam', 'OPPOF19', '110396', 0, 0, '2024-04-30 12:44:50', '2024-04-30 12:44:50'),
(3, 1, '9973775325', 'Ahmedabad Gujarat', 2, 'Nishar Alam', 'Samsung Universe 9', '110396', 0, 0, '2024-04-30 12:44:50', '2024-04-30 12:44:50'),
(4, 1, '9973775325', 'Ahmedabad Gujarat', 2, 'Nishar Alam', 'OPPOF19', '110396', 0, 0, '2024-04-30 12:47:20', '2024-04-30 12:47:20'),
(5, 1, '9973775325', 'Ahmedabad Gujarat', 2, 'Nishar Alam', 'Samsung Universe 9', '110396', 0, 0, '2024-04-30 12:47:20', '2024-04-30 12:47:20'),
(6, 1, '9973775325', 'Ahmedabad Gujarat', 2, 'Nishar Alam', 'OPPOF19', '110396', 0, 0, '2024-04-30 12:49:32', '2024-04-30 12:49:32'),
(7, 1, '9973775325', 'Ahmedabad Gujarat', 2, 'Nishar Alam', 'Samsung Universe 9', '110396', 0, 0, '2024-04-30 12:49:33', '2024-04-30 12:49:33');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `img1` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `img2` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `img3` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `img4` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `categoryID` int DEFAULT NULL,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `stocks` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `promotionPercent` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryID` (`categoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `img1`, `img2`, `img3`, `img4`, `categoryID`, `category`, `stocks`, `promotionPercent`, `createdAt`, `updatedAt`) VALUES
(1, 'iPhone X', 'An apple mobile which is nothing like apple', 'https://cdn.dummyjson.com/product-images/2/1.jpg', 'https://cdn.dummyjson.com/product-images/2/2.jpg', 'https://cdn.dummyjson.com/product-images/2/3.jpg', 'https://cdn.dummyjson.com/product-images/2/thumbnail.jpg', 1, 'smartphones', '20', 10, '2024-04-29 12:45:44', '2024-04-29 12:45:44'),
(2, 'iPhone 9', 'An apple mobile which is nothing like apple', 'https://cdn.dummyjson.com/product-images/1/1.jpg', 'https://cdn.dummyjson.com/product-images/1/2.jpg', 'https://cdn.dummyjson.com/product-images/1/3.jpg', 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg', 1, 'smartphones', '20', 10, '2024-04-29 12:56:49', '2024-04-29 12:56:49'),
(3, 'Samsung Universe 9', 'Samsung\'s new variant which goes beyond Galaxy to the Universe', 'https://cdn.dummyjson.com/product-images/3/1.jpg', 'https://cdn.dummyjson.com/product-images/3/2.jpg', 'https://cdn.dummyjson.com/product-images/3/3.jpg', 'https://cdn.dummyjson.com/product-images/3/thumbnail.jpg', 1, 'smartphones', '20', 20, '2024-04-29 13:00:26', '2024-04-29 13:00:26'),
(4, 'OPPOF19', 'OPPOF19 new variant which goes beyond OPPO to the Universe', 'https://cdn.dummyjson.com/product-images/4/1.jpg', 'https://cdn.dummyjson.com/product-images/4/2.jpg', 'https://cdn.dummyjson.com/product-images/4/3.jpg', 'https://cdn.dummyjson.com/product-images/4/thumbnail.jpg', 1, 'smartphones', '20', 30, '2024-04-29 13:04:35', '2024-04-29 13:04:35');

-- --------------------------------------------------------

--
-- Table structure for table `productvariants`
--

DROP TABLE IF EXISTS `productvariants`;
CREATE TABLE IF NOT EXISTS `productvariants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `variantName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `productId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productvariants`
--

INSERT INTO `productvariants` (`id`, `variantName`, `productId`) VALUES
(1, 'Color', 1),
(2, 'Color', 2),
(3, 'Color', 3),
(4, 'Color', 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `admin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `email_5` (`email`),
  UNIQUE KEY `email_6` (`email`),
  UNIQUE KEY `email_7` (`email`),
  UNIQUE KEY `email_8` (`email`),
  UNIQUE KEY `email_9` (`email`),
  UNIQUE KEY `email_10` (`email`),
  UNIQUE KEY `email_11` (`email`),
  UNIQUE KEY `email_12` (`email`),
  UNIQUE KEY `email_13` (`email`),
  UNIQUE KEY `email_14` (`email`),
  UNIQUE KEY `email_15` (`email`),
  UNIQUE KEY `email_16` (`email`),
  UNIQUE KEY `email_17` (`email`),
  UNIQUE KEY `email_18` (`email`),
  UNIQUE KEY `email_19` (`email`),
  UNIQUE KEY `email_20` (`email`),
  UNIQUE KEY `email_21` (`email`),
  UNIQUE KEY `email_22` (`email`),
  UNIQUE KEY `email_23` (`email`),
  UNIQUE KEY `email_24` (`email`),
  UNIQUE KEY `email_25` (`email`),
  UNIQUE KEY `email_26` (`email`),
  UNIQUE KEY `email_27` (`email`),
  UNIQUE KEY `email_28` (`email`),
  UNIQUE KEY `email_29` (`email`),
  UNIQUE KEY `email_30` (`email`),
  UNIQUE KEY `email_31` (`email`),
  UNIQUE KEY `email_32` (`email`),
  UNIQUE KEY `email_33` (`email`),
  UNIQUE KEY `email_34` (`email`),
  UNIQUE KEY `email_35` (`email`),
  UNIQUE KEY `email_36` (`email`),
  UNIQUE KEY `email_37` (`email`),
  UNIQUE KEY `email_38` (`email`),
  UNIQUE KEY `email_39` (`email`),
  UNIQUE KEY `email_40` (`email`),
  UNIQUE KEY `email_41` (`email`),
  UNIQUE KEY `email_42` (`email`),
  UNIQUE KEY `email_43` (`email`),
  UNIQUE KEY `email_44` (`email`),
  UNIQUE KEY `email_45` (`email`),
  UNIQUE KEY `email_46` (`email`),
  UNIQUE KEY `email_47` (`email`),
  UNIQUE KEY `email_48` (`email`),
  UNIQUE KEY `email_49` (`email`),
  UNIQUE KEY `email_50` (`email`),
  UNIQUE KEY `email_51` (`email`),
  UNIQUE KEY `email_52` (`email`),
  UNIQUE KEY `email_53` (`email`),
  UNIQUE KEY `email_54` (`email`),
  UNIQUE KEY `email_55` (`email`),
  UNIQUE KEY `email_56` (`email`),
  UNIQUE KEY `email_57` (`email`),
  UNIQUE KEY `email_58` (`email`),
  UNIQUE KEY `email_59` (`email`),
  UNIQUE KEY `email_60` (`email`),
  UNIQUE KEY `email_61` (`email`),
  UNIQUE KEY `email_62` (`email`),
  UNIQUE KEY `email_63` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `password`, `phone`, `admin`, `createdAt`, `updatedAt`) VALUES
(1, 'Nishar Alam', 'admin@gmail.com', '$2a$10$GfwIpQavDe1ysZnJQycnNOH5lr2RLtOWfJIPLuc91yDx8aduy202C', '9973775325', '0', '2024-04-29 06:59:12', '2024-04-29 06:59:12');

-- --------------------------------------------------------

--
-- Table structure for table `variants`
--

DROP TABLE IF EXISTS `variants`;
CREATE TABLE IF NOT EXISTS `variants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `variantAttributes` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `price` int NOT NULL,
  `variantId` int NOT NULL,
  `productId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `variantId` (`variantId`),
  KEY `productId` (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `variants`
--

INSERT INTO `variants` (`id`, `variantAttributes`, `price`, `variantId`, `productId`) VALUES
(1, 'white', 45999, 1, 1),
(2, 'black', 49999, 2, 2),
(3, 'gray', 47999, 2, 2),
(4, 'gray', 27999, 3, 3),
(5, 'black', 29599, 3, 3),
(6, 'white', 29999, 3, 3),
(7, 'white', 25599, 4, 4),
(8, 'black', 27599, 4, 4),
(9, 'black', 29599, 4, 4);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `carts_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `carts_ibfk_4` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `carts_ibfk_5` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `carts_ibfk_6` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryID`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `productvariants`
--
ALTER TABLE `productvariants`
  ADD CONSTRAINT `productvariants_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `productvariants_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `productvariants_ibfk_3` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `productvariants_ibfk_4` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `productvariants_ibfk_5` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `variants`
--
ALTER TABLE `variants`
  ADD CONSTRAINT `variants_ibfk_1` FOREIGN KEY (`variantId`) REFERENCES `productvariants` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `variants_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
