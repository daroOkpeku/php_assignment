<?php
require_once "./DB.php"; 

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    global $conn;

    if (isset($_GET["id"])) {
        $id = (int)$_GET["id"]; 

        $sql_me = "SELECT * FROM users WHERE id=$id";
        $query = mysqli_query($conn, $sql_me);
        if ($query && mysqli_num_rows($query) > 0) {
         $fetch = mysqli_fetch_assoc($query);
         echo json_encode(["success" => $fetch]);
        } else {
            echo json_encode(["error" =>  mysqli_error($conn)]);
        }
        
        mysqli_close($conn);
    } else {
        echo json_encode(["error" => "ID not provided"]);
    }
}