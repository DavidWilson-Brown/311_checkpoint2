-- actors Table
	CREATE TABLE actors(
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		username VARCHAR(100) NOT NULL UNIQUE,
		password VARCHAR(500) NOT NULL,
		first_name VARCHAR (100) NOT NULL,
		last_name VARCHAR (100) NOT NULL
	);


-- scripts Table:
	CREATE TABLE scripts(
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		actor_id INT NOT NULL,
		-- FOREIGN KEY (actor_id) REFERENCES actors (id),
		script_title VARCHAR (100) NOT NULL
	);


-- playwrights Table:
	CREATE TABLE playwrights(
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		actor_id INT NOT NULL,
		-- FOREIGN KEY (actor_id) REFERENCES actors (id),
		playwright_lastName VARCHAR (100) NOT NULL,
		playwright_firstName VARCHAR (100) NOT NULL	
);


-- actorsLibrary Table:
	CREATE TABLE actorsLibrary(
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		actor_id INT NOT NULL,
		-- FOREIGN KEY (actor_id) REFERENCES actors (id),
		playwright_id INT NOT NULL,
		-- FOREIGN KEY (playwright_id) REFERENCES playwrights (id),
		script_id INT NOT NULL
		-- FOREIGN KEY (script_id) REFERENCES scripts (id)
    );


-- scriptScenes Table:
	CREATE TABLE scriptScenes(
		id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		actor_id INT NOT NULL,
		-- FOREIGN KEY (actor_id) REFERENCES actors (id),
		script_id INT NOT NULL,
		-- FOREIGN KEY (script_id) REFERENCES scripts (id),
		sceneNumber INT NOT NULL,
		sceneName VARCHAR (100) NOT NULL,
		dialogue VARCHAR (10000) NOT NULL,
		punctuation VARCHAR (1000) NOT NULL,
		addFirstLetter VARCHAR (1000) NOT NULL,
		addEveryOtherLetter VARCHAR (1000) NOT NULL
    );