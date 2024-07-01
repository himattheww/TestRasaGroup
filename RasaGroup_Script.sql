CREATE TABLE masterbuku (
    bookid SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    stock INT NOT NULL
);

-- Membuat tabel MasterMahasiswa
CREATE TABLE mastermahasiswa (
    studentid SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

-- Membuat tabel RakInventory
CREATE TABLE rakinventory (
    inventoryid SERIAL PRIMARY KEY,
    bookid INT NOT NULL,
    location VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (bookid) REFERENCES masterbuku(bookid)
);

-- Membuat tabel TransaksiPeminjaman
CREATE TABLE transaksipeminjaman (
    transactionid SERIAL PRIMARY KEY,
    bookid INT NOT NULL,
    studentid INT NOT NULL,
    borrowdate DATE NOT NULL,
    returndate DATE,
    FOREIGN KEY (bookid) REFERENCES masterbuku(bookid),
    FOREIGN KEY (studentid) REFERENCES mastermahasiswa(studentid)
);

-- Membuat tabel HistoryPeminjaman
CREATE TABLE historypeminjaman (
    historyid SERIAL PRIMARY KEY,
    bookid INT NOT NULL,
    studentid INT NOT NULL,
    borrowdate DATE NOT NULL,
    returndate DATE,
    FOREIGN KEY (bookid) REFERENCES masterbuku(bookid),
    FOREIGN KEY (studentid) REFERENCES mastermahasiswa(studentid)
);


-- Menambahkan data ke tabel masterbuku
INSERT INTO masterbuku (title, author, stock) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', 10),
('To Kill a Mockingbird', 'Harper Lee', 5),
('1984', 'George Orwell', 7),
('Pride and Prejudice', 'Jane Austen', 4),
('The Catcher in the Rye', 'J.D. Salinger', 8);

-- Menambahkan data ke tabel mastermahasiswa
INSERT INTO mastermahasiswa (name, email) VALUES
('John Doe', 'johndoe@example.com'),
('Jane Smith', 'janesmith@example.com'),
('Robert Brown', 'robertbrown@example.com'),
('Emily Davis', 'emilydavis@example.com'),
('Michael Wilson', 'michaelwilson@example.com');


-- Menambahkan data ke tabel rakinventory
INSERT INTO rakinventory (bookid, location, quantity) VALUES
(1, 'A1', 3),
(2, 'A2', 2),
(3, 'B1', 4),
(4, 'B2', 1),
(5, 'C1', 5);


-- Menambahkan data ke tabel transaksipeminjaman
INSERT INTO transaksipeminjaman (bookid, studentid, borrowdate, returndate) VALUES
(1, 1, '2023-01-01', '2023-01-15'),
(2, 2, '2023-02-01', '2023-02-15'),
(3, 3, '2023-03-01', NULL),
(4, 4, '2023-04-01', '2023-04-15'),
(5, 5, '2023-05-01', '2023-05-15');


-- Menambahkan data ke tabel historypeminjaman
INSERT INTO historypeminjaman (bookid, studentid, borrowdate, returndate) VALUES
(1, 1, '2023-01-01', '2023-01-15'),
(2, 2, '2023-02-01', '2023-02-15'),
(4, 4, '2023-04-01', '2023-04-15'),
(5, 5, '2023-05-01', '2023-05-15');
