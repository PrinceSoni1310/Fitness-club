<?php
include 'db.php';

header('Content-Type: application/json');

// Get user ID from URL query parameters (GET request)
if (!isset($_GET['id']) || empty($_GET['id'])) {
    echo json_encode(['status' => false, 'msg' => 'User ID is required']);
    exit;
}

$userId = $_GET['id'];

// Optional: Sanitize the input
$userId = intval($userId); // Assuming ID is numeric

$query = "SELECT * FROM users WHERE id = '$userId'";
$result = $conn->query($query);

if (!$result || $result->num_rows === 0) {
    echo json_encode(['status' => false, 'msg' => 'User not found']);
    exit;
}

$row = $result->fetch_assoc();

echo json_encode(['success' => true, 'user' => $row]);
?>
