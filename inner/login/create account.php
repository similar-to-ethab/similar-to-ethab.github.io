<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Create Account</title>
    <!--need to add php to add to <table>
      email, username, name, password, etc.
    </table>-->
  </head>
  <body>
<?php
function Login()#this is for logging in - seeing if they put anything in
{
  if(empty($_POST["username"]) || empty($_POST["password"]))
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

    function CheckLoginInDB($username,$password)
    {
        if(!$this->DBLogin())
        {
            $this->HandleError("Database login failed!");
            return false;
        }
        $username = $this->SanitizeForSQL($username);
        $pwdmd5 = md5($password);
        $qry = "Select name, email from $this->tablename ".
            " where username='$username' and password='$pwdmd5' ".
            " and confirmcode='y'";

        $result = mysql_query($qry,$this->connection);

        if(!$result || mysql_num_rows($result) <= 0)
        {
            $this->HandleError("Error logging in. ".
                "The username or password does not match");
                echo "the username";
            return false;
        }
        return true;
    }

    function CheckLogin()
    {
         session_start();

         $sessionvar = $this->GetLoginSessionVar();

         if(empty($_SESSION[$sessionvar]))
         {
            return false;
         }
         return true;
    }
    ?>
  </body>
</html>
