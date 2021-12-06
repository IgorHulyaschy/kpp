START TRANSACTION;
create table employee(
    id serial PRIMARY KEY ,
    fname varchar NOT NULL ,
    lname varchar NOT NULL ,
    age int NOT NULL ,
    position varchar NOT NULL Unique,
    email varchar NOT NULL Unique
  );

create table customer(
    id serial PRIMARY KEY ,
    fname varchar NOT NULL ,
    lname varchar NOT NULL
  );

create table presence(
    id serial PRIMARY KEY ,
    id_employee integer NOT NULL,
    present bool,
    date date
);

create table contract(
    id serial PRIMARY KEY ,
    id_customer integer NOT NULL,
    id_employee integer Not NULL ,
    date date,
    present bool
);
COMMIT;