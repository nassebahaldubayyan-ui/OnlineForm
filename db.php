<?php

$servername = "sql207.infinityfree.com";
$username = "if0_42411722";
$password = "PF0dFJ5DjTpFQk";
$dbname = "if0_42411722_myfirst";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error)
{
    die("Connection failed: " . $conn->connect_error);
}

?>