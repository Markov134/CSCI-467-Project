
DROP TABLES People, Customer, Admin, Product, Order, Label, Email;

CREATE TABLE People (
	Username VARCHAR(30) PRIMARY KEY,
	Email VARCHAR(30),
	Password VARCHAR(30)
	Isadmin BOOL
);

CREATE TABLE Customer (
	Username VARCHAR(30) PRIMARY KEY
	FOREIGN KEY (Username) REFERENCES People(Username)
);

CREATE TABLE Admin (
	Aid INT AUTO_INCREMENT PRIMARY KEY,
	Username VARCHAR(30) PRIMARY KEY,
	FOREIGN KEY (Username) REFERENCES People(Username)
);


CREATE TABLE Product (
	Pid INT AUTO_INCREMENT PRIMARY KEY ,
	Pname VARCHAR(100),
	Price NUMERIC(10,2),
	Stock INT
);

CREATE TABLE Order (
	Oid INT AUTO_INCREMENT PRIMARY KEY,
	Odate DATETIME,
	Cartindex INT,
	Cart VARCHAR(50)[],
	Chargeindex INT,
	Charges NUMERIC(10,2)[],
	Address VARCHAR(200),
	Success BOOl,
	FOREIGN KEY (TrackNum) REFERENCES Label(TrackNum) 
);

CREATE TABLE Label (
	TrackNum INT AUTO_INCREMENT PRIMARY KEY,
 	Username VARCHAR(30),
	Address VARCHAR(200),
	Odate DATETIME,
	FOREIGN KEY (Username) REFERENCES People(Username)
	FOREIGN KEY (Address) REFERENCES Order(Address),
	FOREIGN KEY (Odate) REFERENCES Order(Odate)
);

CREATE TABLE Email (
	

);

