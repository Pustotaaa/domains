<?php
if(!empty((($_POST['registration'])))
)
{
    echo file_get_contents("C:\Game\OSPanel\domains\Hotel//registration.html");
}
else{
echo "not";
}
?>