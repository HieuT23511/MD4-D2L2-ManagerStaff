drop database ManagerStaff;
create database ManagerStaff;
use ManagerStaff;

create table Staffs(
	id int primary key auto_increment,
    name varchar (50),
    age int check (age>0 and age<100),
    department varchar (50),
    wages int check (wages > 0),
    avatar varchar (50)
);

insert into Staffs (name, age, department,wages,avatar)
values ('Person1',27,'Edu',8500000,'/images/hieu.png'),
('Person2',24,'HR',7250000,'/images/hieu.png'),
('Person3',25,'AFD',8250000,'/images/hieu.png'),
('Person4',26,'Sales',8250000,'/images/hieu.png');

