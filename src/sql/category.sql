CREATE TABLE category (
	id serial PRIMARY KEY,
    name VARCHAR NOT NULL,
    status BOOLEAN NOT NULL default true
);


/*
id	int
name	varchar
status	boolean (true = visivel | false =  nao apresentavel no endpoint list)
*/
