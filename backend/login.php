<?php

include "./db.php";

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["status" => "invalid_method"]);
    exit;
}

header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;

$query = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($query);

if (!$result || $result->num_rows <= 0) {
    json_encode(['status' => false, 'msg'=> 'No user found']);
    exit;
}

$row = $result->fetch_assoc();
$foundPassword = $row['password'];

if ($foundPassword === $password) {
    echo json_encode(['success' => true, 'user' => $row]);
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid credentials. Please register first.']);
}