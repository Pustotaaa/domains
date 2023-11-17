<!-- <!DOCTYPE html> -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New record</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body class="backgroung">
    <form action="" method="POST">
        <input name="name" type="text" placeholder="Name" require>
        <br>
        <input name="country code" type="text" placeholder="Country_code" require>
        <br>
        <input name="district" type="text" placeholder="District" require>
        <br>
        <input name="population" type="number" placeholder="Population" require>
        <br>
        <input style="position:sticky; left: 121px;" type="submit">
    </form>

    <?php
        try{
          

            if(isset($_POST["name"])){     
                $name = $_POST["name"];               
                $conn = new mysqli("localhost", "root", "", "library");
                //                          insert into city values (0, 'n', 'AFG', 'afg', 7);
                $query = "insert into books  values ($name)";
                $result = $conn->query($query);

                // echo "<script type=".'"'."text/javascript".'"'.">window.open('/index.php', '_self');</script>";
            }
        }catch(Exception $e){
            echo $e->GetMessage();
        }
    ?> 
</body>