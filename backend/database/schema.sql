-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema workouts
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema workouts
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `workouts` DEFAULT CHARACTER SET utf8 ;
USE `workouts` ;

-- -----------------------------------------------------
-- Table `workouts`.`workouts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `workouts`.`workouts` (
  `idworkouts` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `reps` INT NOT NULL,
  `weight` INT NULL,
  `createdAt`  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`idworkouts`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



