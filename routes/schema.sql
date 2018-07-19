
DROP DATABASE IF EXISTS awards;
CREATE DATABASE awards;
USE awards;

DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
movieName varchar(255) NOT NULL,
nominations int(11) NOT NULL DEFAULT 0,
releaseYear int(11) NOT NULL,
director varchar(255) NOT NULL
);

DROP TABLE IF EXISTS actor;

CREATE TABLE actor (
actorName varchar(255) NOT NULL,
nominations int(11) NOT NULL DEFAULT 0,
nominatedFor varchar(255) NOT NULL,
releaseYear int(11) NOT NULL,
movieName varchar(255) NOT NULL
);
DROP TABLE IF EXISTS actress;
CREATE TABLE actress (
actressName varchar(255) NOT NULL,
nominations int(11) NOT NULL DEFAULT 0,
nominatedFor varchar(255) NOT NULL,
releaseYear int(11) NOT NULL,
movieName varchar(255) NOT NULL
);

DROP TABLE IF EXISTS director;
CREATE TABLE director(
directorName varchar(255) NOT NULL,
nominations int(11) NOT NULL DEFAULT 0,
releaseYear int(11) NOT NULL,
movieName varchar(255) NOT NULL
);