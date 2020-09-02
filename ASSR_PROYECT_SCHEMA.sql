-- ESCUELA SUPERIOR POLITÉCNICA DEL LITORAL
-- ADMINISTRACION DE SISTEMAS Y SERVICIOS DE RED
-- Version 0.2
-- ASSR_ G6
-- CREADOR: DARWIN BORJA CAICEDO

-- Ingreso de usuarios (Id_usuario, Nombre, Apellido_Paterno, Apellido_Materno, Fecha_Nacimiento, Provincia, Cantón, Ciudad, 
-- direccion_1, direccion_2, Codigo_postal, Descripcion, Actividad a realizar (Búsqueda o trabajo), Descripcion de trabajo)
-- Trabajo por geolocalización
-- El usuario puede ser trabajador y buscador a la vez.

CREATE DATABASE IF NOT EXISTS G6_PROY_GEOLOCALIZACION;

USE G6_PROY_GEOLOCALIZACION;

DROP TABLE IF EXISTS PAIS, PROVINCIA, CANTON, CIUDAD, DIRECCION;
DROP TABLE IF EXISTS CALIFICACION;
DROP TABLE IF EXISTS REALIZA_T, ACTIVIDAD, PERSONA;

CREATE TABLE IF NOT EXISTS PERSONA  (
ID					int			 	auto_increment		primary key		comment 'CODIGO UNICO PARA USUARIO',
NOMBRE				varchar(25)	 	not null			comment'NOMBRE DE USUARIO',
APELLIDO_PATERNO	varchar(25)	 	not null			comment 'APELLIDO PATERNO DEL USUARIO',
APELLIDO_MATERNO	varchar(25)	 						comment 'APELLIDO MATERNO DEL USUARIO',
FECHA_NACIMIENTO	date			not null			comment 'FECHA DE NACIMIENTO',
EMAIL				varchar (50)	not null			comment 'EMAIL DEL USUARIO',
TEL_CONVENCIONAL 	int 			not null			comment 'TELEFONO CONVENCIONAL DEL USUARIO',
TELEFONO_CEL		int				not null			comment 'TELEFONO DEL USUARIO'
);


CREATE TABLE IF NOT EXISTS ACTIVIDAD (
ID_ACTIVIDAD			int			auto_increment		primary key		comment 'CODIGO UNICO PARA ACTIVIDADES PERMITIDAS',
NOMBRE_ACTIVIDAD		varchar(25)	not null		comment 'NOMBRE DE LA ACTIVIDAD A REALIZARSE',
DESCRIPCION_ACTIVIDAD	varchar(100)	not null		comment 'BREVE DESCRIPCION DEL TRABAJO A REALIZARSE'
);


CREATE TABLE IF NOT EXISTS REALIZA_T (
ID_USUARIO					int		comment 'CODIGO UNICO PARA USUARIO',	
ID_ACTIVIDAD		int		comment 'CODIGO UNICO PARA ACTIVIDADES PERMITIDAS',
constraint FK_ID foreign key (ID_USUARIO) references PERSONA (ID),
constraint FK_ID_ACTIVIDAD foreign key (ID_ACTIVIDAD) references ACTIVIDAD(ID_ACTIVIDAD)
);

CREATE TABLE IF NOT EXISTS PAIS(
ID_PAIS			INT				auto_increment	 PRIMARY KEY		COMMENT 'Código único para representar a una provincia del país',
NOMBRE			VARCHAR(30)		NOT NULL		UNIQUE		COMMENT 'Nombre completo del país'
);

CREATE TABLE IF NOT EXISTS PROVINCIA(
ID_PROVINCIA	INT				auto_increment	 PRIMARY KEY					COMMENT 'Código único para representar a una provincia del país',
NOMBRE			VARCHAR(30)		NOT NULL		UNIQUE		COMMENT 'Nombre completo de la provincia',
ID_PAIS		INT									COMMENT 'Código único para representar a un país',
constraint FK_ID_PAIS FOREIGN KEY (ID_PAIS) REFERENCES PAIS(ID_PAIS) ON UPDATE CASCADE	
);

CREATE TABLE IF NOT EXISTS CANTON(
ID_CANTON		INT				auto_increment	 PRIMARY KEY				COMMENT 'Código único para representar a un cantón del país',
NOMBRE			VARCHAR(30)		NOT NULL	UNIQUE		COMMENT 'Nombre completo del cantón según su ID',
ID_PROVINCIA	INT										COMMENT 'Código único para representar a una provincia del país',
constraint FK_ID_PROVINCIA FOREIGN KEY (ID_PROVINCIA) REFERENCES PROVINCIA(ID_PROVINCIA) ON UPDATE CASCADE	
);

CREATE TABLE IF NOT EXISTS CIUDAD(
ID_CIUDAD		INT				auto_increment	 PRIMARY KEY		COMMENT 'Código único para representar a un cantón del país',
NOMBRE			VARCHAR(30)		NOT NULL			UNIQUE			COMMENT 'Nombre completo del cantón según su ID',
ID_CANTON		INT								COMMENT 'Código único para representar a un cantón del país',
constraint FK_ID_CANTON	foreign key (ID_CANTON) references CANTON(ID_CANTON) ON UPDATE CASCADE	
);

CREATE TABLE IF NOT EXISTS DIRECCION (
ID_DIRECCION 		SMALLINT 		auto_increment 		primary key		COMMENT 'Identificacion de la direccion a ingresarse',
DIRECCION_1			VARCHAR(50)		NOT NULL		COMMENT 'Dirección principal',
DIRECCION_2			VARCHAR(50)		NOT NULL		COMMENT 'DIreccion secundaria',
CODIGO_POSTAL		VARCHAR(10)						COMMENT	'Codigo postal de la direccion de su casa',
ID_PERSONA			INT								COMMENT 'Número único otorgado a cada ciudadano de un país en específico',
ID_CIUDAD			INT								COMMENT 'Código único para representar a un cantón del país',
constraint FK_ID_CIUDAD foreign key (ID_CIUDAD) references CIUDAD(ID_CIUDAD) on update cascade
);

CREATE TABLE IF NOT EXISTS CALIFICACION(
ID_CALIFICACION					INT				auto_increment 	PRIMARY KEY		COMMENT 'Código único para representar una calificacion dada por el usuario',
CALIFICACION    				INT		NOT NULL		COMMENT 'Calificación dada por el usuario que va de 0 a 10',
DESC_CALIFICACION				VARCHAR(200)	NOT NULL		UNIQUE		COMMENT 'Descripcion de la calificacion dada',
ID_USUARIO_CALIFICADO			INT				COMMENT 'Código único para representar aL usuario calificado',
constraint FK_ID_PERS foreign key (ID_USUARIO_CALIFICADO) references PERSONA(ID) ON UPDATE CASCADE
);




