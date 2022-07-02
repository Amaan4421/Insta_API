-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2022 at 09:33 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `insta-crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  `post_by` varchar(50) CHARACTER SET latin1 NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `user_id`, `post_by`, `createdAt`, `updatedAt`) VALUES
(1, 2, 'dom123', '2022-06-28 06:31:13', '2022-06-28 06:31:13'),
(2, 5, 'tom123', '2022-06-28 06:31:41', '2022-06-28 06:31:41'),
(3, 2, 'dom123', '2022-06-29 05:48:03', '2022-06-29 05:48:03');

-- --------------------------------------------------------

--
-- Table structure for table `post_reaction`
--

CREATE TABLE `post_reaction` (
  `id` int(10) NOT NULL,
  `post_id` int(10) NOT NULL,
  `post_of` varchar(50) CHARACTER SET latin1 NOT NULL,
  `liked_by` varchar(50) CHARACTER SET latin1 NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `post_reaction`
--

INSERT INTO `post_reaction` (`id`, `post_id`, `post_of`, `liked_by`, `createdAt`, `updatedAt`) VALUES
(2, 2, 'tom123', 'dom123', '2022-06-28 06:49:56', '2022-06-28 06:49:56');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `username` varchar(50) CHARACTER SET latin1 NOT NULL,
  `firstname` varchar(50) CHARACTER SET latin1 NOT NULL,
  `lastname` varchar(50) CHARACTER SET latin1 NOT NULL,
  `mobileno` decimal(15,0) NOT NULL,
  `email` varchar(50) CHARACTER SET latin1 NOT NULL,
  `password` varchar(20) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `firstname`, `lastname`, `mobileno`, `email`, `password`) VALUES
(1, 'amaan123', 'AMAAN', 'Sajina', '9327851664', 'amaan@gmail.com', 'as1234'),
(2, 'dom123', 'Dominic', 'Toreto', '7802823815', 'dom@gmail.com', 'dom123456'),
(3, 'paul123', 'Paul', 'Walker', '7802823815', 'paul@gmail.com', 'paul123456'),
(4, 'tony123', 'Tony', 'Stark', '8488010246', 'tony@gmail.com', 'tony123456'),
(5, 'tom123', 'Tom', 'Holland', '8488010255', 'tom@gmail.com', 'tom123456'),
(7, 'roger123', 'Steve', 'Roger', '1234567855', 'roger@gmail.com', 'roger123456'),
(9, '  abc123', ' ABC', ' abc', '1234588855', ' abc@gmail.com', ' abc123456'),
(10, '  blue_123', ' Blue', ' Berry', '7894561239', ' blueberry@gmail.com', ' blue123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_key` (`user_id`);

--
-- Indexes for table `post_reaction`
--
ALTER TABLE `post_reaction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_key` (`post_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `post_reaction`
--
ALTER TABLE `post_reaction`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `user_key` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `post_reaction`
--
ALTER TABLE `post_reaction`
  ADD CONSTRAINT `post_key` FOREIGN KEY (`post_id`) REFERENCES `image` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
