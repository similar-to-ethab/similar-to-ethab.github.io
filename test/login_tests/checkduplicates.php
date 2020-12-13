<?php



  if (isset($_POST['register'])) {
    $firstname = $_POST['fname'];
    $lastname = $_POST['lname'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $country = $_POST['country'];



  	$sql_u = "SELECT * FROM login_test WHERE username = '$username'";
  	$sql_e = "SELECT * FROM login_test WHERE email = '$email'";
  	$res_u = mysqli_query($conn, $sql_u);
  	$res_e = mysqli_query($conn, $sql_e);

  	if (mysqli_num_rows($res_u) > 0) {
  	  $name_error = "Sorry... username already taken";
  	}else if(mysqli_num_rows($res_e) > 0){
  	  $email_error = "Sorry... email already taken";
  	}else{
           $query = "INSERT INTO login_test (fname, lname, username, phone, email, password, country)
      	    	  VALUES ('$firstname', '$lastname','$username','$phone','$email', '".md5($password)."', '$country')";
           $results = mysqli_query($conn, $query);
           echo 'Saved!';
           echo $results;
           exit();
  	}
  }
?>
