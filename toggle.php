<?php

include "db.php";

$id = $_POST["id"];

$sql = "UPDATE info
SET status = IF(status=0,1,0)
WHERE ID = $id";

if($conn->query($sql))
{
    echo "success";
}
else
{
    echo "error";
}

$conn->close();

?>