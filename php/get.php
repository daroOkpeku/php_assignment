<?php
require_once "./DB.php";
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $current_page = isset($_GET['page']) ? (int)$_GET['page'] : 1;

  
    global $conn;

    $records_per_page = 10;

    $current_page = isset($_GET['page']) ? (int)$_GET['page'] : 1;

    $offset = ($current_page - 1) * $records_per_page;

    $sql_jump = "SELECT * FROM users LIMIT $records_per_page OFFSET $offset";
    $jump = mysqli_query($conn, $sql_jump);

    $users = mysqli_fetch_all($jump, MYSQLI_ASSOC);

    $total_records_query = "SELECT COUNT(*) as total FROM users";
    $result = mysqli_query($conn, $total_records_query);
    $total_records = mysqli_fetch_assoc($result)['total'];


    $total_pages = ceil($total_records / $records_per_page);

   
    echo json_encode([
        'current_page' => $current_page,
        'total_pages' => $total_pages,
        'data' => $users
    ]);
}


?>