<?php
// Set the content type to JSON
header('Content-Type: application/json');

// Set the HTTP response code to 200
http_response_code(200);

// Create a health check response
$response = [
    'status' => 'ok',
    'message' => 'Service is running'
];

// Send the JSON response
echo json_encode($response);
