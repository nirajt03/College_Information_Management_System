create database dummy;

USE dummy;

create table student(
studentId integer PRIMARY KEY AUTO_INCREMENT,
name varchar(50),
gender varchar(50), 
hobbies varchar(50), 
address varchar(100),
phone integer,
email varchar(100) Unique,
password varchar(100),
subjectName varchar(50),
courseName varchar(50),
isActive integer Default 1,
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


SELECT s1.name, s1.courseName, s1.subjectName,f1.name,t1.semester,t1.year FROM student s1 INNER JOIN faculty f1 ON s1.courseName =f1.courseName INNER JOIN  timeTable t1 on t1.courseName = f1.courseName;

create table faculty(
facultyId integer  PRIMARY KEY auto_increment,
name varchar(50) ,
gender varchar(20), 
address varchar(100),
phone varchar(50),
email varchar(100) unique,
password varchar(100),
subjectName varchar(50),
courseName varchar(50),
isActive integer Default 1,
appprove integer default 1,
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table hod(
hodId integer  PRIMARY KEY auto_increment,
name varchar(50) ,
gender varchar(20), 
address varchar(100),
phone varchar(50),
email varchar(100) unique,
password varchar(100),
courseName varchar(50),
isActive integer Default 1,
appprove integer default 1,
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table principal(
principalId integer  PRIMARY KEY auto_increment,
name varchar(50) ,
gender varchar(20), 
address varchar(100),
phone varchar(50),
email varchar(100) unique,
password varchar(100),
isActive integer Default 1,
createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table admin (
	id integer PRIMARY KEY auto_increment, 
	Name VARCHAR(50),
	phone varchar(50),
	email VARCHAR(100),
	password VARCHAR(50),
  createdOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP	
);


 create table subject (     
	subjectId integer PRIMARY KEY auto_increment,   
        date Date,
        courseName VARCHAR(100),    
	subjectName VARCHAR(100),     
	theoryMarks integer,     
	practicalMarks integer 
);

create table timeTable (   
	id integer PRIMARY KEY auto_increment,  
	courseName VARCHAR(100),     
	semester integer,     
	year integer,     
	lecture_no integer , 
	subjectName VARCHAR(100),     
	allotedTime integer,     
	date DATE,
	timing VARCHAR(50),
	facultyId integer
);

create table Classroom (
        Id integer PRIMARY KEY auto_increment,
        Name VARCHAR(50),
	DateTime timestamp,
	size integer,
	venue VARCHAR(50),
        subjectName VARCHAR(50),
        facultyId integer, 
    CONSTRAINT FOREIGN KEY(facultyId) REFERENCES faculty(facultyId) ON UPDATE CASCADE ON DELETE CASCADE
);


create table attendence (
        studentId integer,
        subjectId integer,
	date DATE,
	courseName VARCHAR(50),
	 subjectName VARCHAR(50),
	semester integer,     
	year integer,
	status VARCHAR(50),
	CONSTRAINT FOREIGN KEY(subjectId) REFERENCES subject(subjectId) ON UPDATE CASCADE ON DELETE CASCADE
	
);
create table announcements (
id integer Primary key auto_increment,
notice varchar(100),
description varchar(250)
);

create table courses (
      id integer PRIMARY KEY auto_increment,
      courseCode VARCHAR(20),
      courseName VARCHAR(50),
      semester integer,
      year integer,
      intake integer
);
create table sscDetails(
sscCourse VARCHAR(50),
sscBoard VARCHAR(100),
sscAggregate float,
sscYOP integer,
studentId integer unique,
CONSTRAINT FOREIGN KEY(studentId) REFERENCES student(studentId) ON UPDATE CASCADE ON DELETE CASCADE
);

create table hscDetails(
hscCourse VARCHAR(50),
hscBoard VARCHAR(100),
hscAggregate float,
hscYOP integer,
studentId integer unique,
CONSTRAINT FOREIGN KEY(studentId) REFERENCES student(studentId) ON UPDATE CASCADE ON DELETE CASCADE
);

create table diplomaDetails(
Course VARCHAR(50),
university VARCHAR(100),
Aggregate float,
YOP integer,
studentId integer unique,
CONSTRAINT FOREIGN KEY(studentId) REFERENCES student(studentId) ON UPDATE CASCADE ON DELETE CASCADE
);


insert into student ( studentId, name , gender, hobbies, address, phone, email, password, subjectName, courseName)  values (1, "Niraj", "Male", "Playing Cricket", "Nagpur", 73855,"niraj@gmail.com", "niraj","Database", "DAC");

