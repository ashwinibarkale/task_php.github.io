<?php
$servername = "localhost"; // Change to your database server if different
$username = "root"; // Change to your database username
$password = ""; // Change to your database password
$dbname = "company"; // Change to your database name

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Insert data into the database
$sql = "INSERT INTO developer (name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    $success = true; // Set a success flag
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();

// Return a response to the JavaScript on the same page
if (isset($success) && $success) {
    echo "Success";
}
?>
