<?php
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["status" => "invalid_method"]);
    exit;
}
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['name'], $data['email'], $data['password'])) {
    echo json_encode(["status" => "invalid_input"]);
    exit;
}

$name = $conn->real_escape_string($data['name']);
$email = $conn->real_escape_string($data['email']);
$password = $conn->real_escape_string($data['password']);

$check = $conn->query("SELECT * FROM users WHERE email='$email'");

if ($check->num_rows > 0) {
    echo json_encode(["status" => "exists"]);
} else {
    $query = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$password')";
    if ($conn->query($query)) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error"]);
    }
}
