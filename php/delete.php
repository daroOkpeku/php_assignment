<?php
require_once "./DB.php"; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    global $conn;

    if (isset($_POST["id"])) {
        $id = (int)$_POST["id"]; 

        $sql_me = "DELETE FROM users WHERE id=$id";

        if (mysqli_query($conn, $sql_me)) {
            echo json_encode(["success" => "User has been deleted successfully"]);
        } else {
            echo json_encode(["error" => "Failed to delete user. Error: " . mysqli_error($conn)]);
        }
        
        mysqli_close($conn);
    } else {
        echo json_encode(["error" => "ID not provided"]);
    }
}
