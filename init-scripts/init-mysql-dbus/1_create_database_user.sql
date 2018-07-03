
create database dbus;


CREATE USER dbus IDENTIFIED BY 'dbus@2018';



GRANT ALL ON dbus.* TO dbus@'%'  IDENTIFIED BY 'dbus@2018';
GRANT ALL ON dbus.* TO dbus@'%'  IDENTIFIED BY 'dbus@2018';


flush privileges; 





