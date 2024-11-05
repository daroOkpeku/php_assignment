<?php
require_once "./DB.php";

function clean($string) {
    $string = stripslashes($string);
    $string = strip_tags($string);
    $string = trim($string);
    return $string;
}

function espace_string($string) {
    global $conn;
    $variable = clean($string);
    $name = mysqli_real_escape_string($conn, $variable);
    return $name;
}

function email_validate($string) {
    if (filter_var($string, FILTER_VALIDATE_EMAIL)) {
        return $string;
    }
        return false; // Return false if email is invalid
    
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  

 if (isset($_REQUEST["firstname"], $_REQUEST["lastname"], $_REQUEST["age"], $_REQUEST["email"], $_REQUEST["gender"])) {
    
        $firstname = espace_string($_REQUEST["firstname"]);
        $lastname = espace_string($_REQUEST["lastname"]);
        $age = espace_string($_REQUEST["age"]);
        $email = email_validate(espace_string($_REQUEST["email"]));
        $gender = espace_string($_REQUEST["gender"]);
    
        if ($email === false) {
            echo json_encode(["error" => "This is not a valid email address."]);
            exit;
        }
    
        $sql_me = "INSERT INTO users (firstname, lastname, age, email, gender) VALUES ('$firstname', '$lastname', '$age', '$email', '$gender')";
    
        if (mysqli_query($conn, $sql_me)) {
            echo json_encode(["success" => "You have created a user"]);
        } else {
            printf("Error: Failed to insert. Error: %s", mysqli_error($conn));
            mysqli_close($conn);
        }
    
    } else {
        echo json_encode(["error" => "Please insert all the correct input"]);
    }
}

