<?php
$conn = new mysqli("localhost:3306", "root", "", "fitness_club_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$query = "CREATE TABLE IF NOT EXISTS users (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    age INT(3) NOT NULL,
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if (!$conn->query($query)) {
    echo json_encode(["status" => "error"]);
}