<!DOCTYPE html>
<?php require "database.php"; ?>
<html lang="en" dir="ltr">
  <head>

    <base href="./index.html" target="_self">
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
<h1>Head</h1>

    <?php
       //Check Connection
       if ($conn->connect_error) {
         die("Connection failed: " . $conn->connect_error);
       }
       else {
         echo "Connected <br>";
       }



        function NewUsername($conn)
        {
          $newusername = $_POST['username'];
          $sql = "SELECT username FROM login_test WHERE username= '$newusername'";
          if (mysqli_query($conn, $sql)) {
            echo "Username already in system<br>";
            echo $sql;
          } else {
            echo "username is not used" /*"Error: " . $sql . "<br>" . mysqli_error($conn)*/;
            echo $sql . mysqli_query($conn, $sql);
            return true;
          }
          $result = $conn->query($sql);

if ($result->num_rows > 0) {
  echo "<table><tr><th>ID</th><th>Name</th></tr>";
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "<tr><td>".$row["id"]."</td><td>".$row["firstname"]." ".$row["lastname"]."</td></tr>";
  }
  echo "</table>";
} else {
  echo "0 results";
}
$conn->close();
        }




        NewUsername($conn);









    function Login()#this is for logging in - seeing if they put anything in
    {

      $username = trim($_POST["username"]);
      $password = trim($_POST["password"]);


      if(!$this->CheckLoginInDB($username,$password))
    {
        return false;
    }
    session_start();
    $_SESSION[$this->GetLoginSessionVar()] = $username;
    return true;


    }
     ?>
  </body>
</html>
