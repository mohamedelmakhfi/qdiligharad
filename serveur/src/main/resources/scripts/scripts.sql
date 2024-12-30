create table example(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60),
    create__by INT NOT NULL,
    create__on TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    edited__by INT,
    edited__on TIMESTAMP
);

create table user(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(60),
    email VARCHAR(60),
    fullName VARCHAR(60),
    create__by INT NOT NULL,
    create__on TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    edited__by INT,
    edited__on TIMESTAMP
);

CREATE OR REPLACE VIEW v_example AS
SELECT
    id,
    name,
    create__by,
    create__on,
    edited__by,
    edited__on
FROM
    example e ;