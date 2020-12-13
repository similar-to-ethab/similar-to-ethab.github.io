<?php
  /**
   * fuck off
   */
   $servername = "localhost";
   $username = "root";
   $password = "";
   $database = "anotherWeb";

   // Create connection
   $conn = new mysqli($servername, $username, $password, $database);
   if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
   ?>
