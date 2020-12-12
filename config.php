<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  <?php $hostname = 'host';
$username = 'username';
$password = 'password';
$dbname   = 'dbname';

$conn = mysqli_connect($hostname, $username, $password) OR die('Unable to connect to database! Please try again later.');
mysqli_select_db($conn, $dbname); ?>
</head>
</html>
