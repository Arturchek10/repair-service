DROP TABLE IF EXISTS requests;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	role VARCHAR(20) NOT NULL,
  login VARCHAR(20) UNIQUE NOT NULL,
  password VARCHAR(20) NOT NULL
);

CREATE TABLE requests(
	id SERIAL PRIMARY KEY,
	client_name VARCHAR(255) NOT NULL,
	phone VARCHAR(50)  NOT NULL,
	address VARCHAR(255) NOT NULL,
	text_problem TEXT NOT NULL,
	status VARCHAR(20) DEFAULT 'new',
	assigned_to INTEGER,
	
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

	CONSTRAINT status_check 
		CHECK (status IN ('new', 'assigned', 'in_progress', 'done', 'canceled')),
	
	CONSTRAINT fk_master
		FOREIGN KEY(assigned_to)
		REFERENCES users(id)
		ON DELETE SET NULL
);