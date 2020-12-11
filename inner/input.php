<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>input</title>
    <h1 id="h1_link"><a href=".././index.html">does it work?</a></h1>
    <?php
    function Login()#this is for logging in - seeing if they put anything in
    {
      if(empty($_POST["username"]))
      {
        $this->HandleError("one or more of the fields are empty");
        return false;
      }
      if(empty($_POST["password"]))
      {
        $this->HandleError("one or more of the fields are empty");
        return false;
      }
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
  </head>
  <body>
<!--<form class="form" action="index.html" method="post">
<label for=""></label>-->
</form>
  </body>
</html>
