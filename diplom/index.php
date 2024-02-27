<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

<?php
// Подключение 
$host = 'localhost';
$dbname = 'time';
$username = 'root';
$password = '';
$pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

class order_car{
    public $client_id;
    public $position;
    public $color_perition;
    public $data_order;
    public function __construct($client_id,$position,$color_perition,$data_order) {
        $this->client_id = $client_id;
        $this->position = $position;
        $this->color_perition = $color_perition;
        $this->data_order = $data_order;
    }

}

$stmt = $pdo->query('SELECT * FROM order_car');
// $stmt->setFetchMode(PDO::FETCH_ASSOC);
$products = $stmt->fetchAll();
$order=[];
foreach ($products as $product) {
    $a = new order_car(['client_id'],$product['position'],$product['color_perition'],$product['data_order'] );
    array_push($order,$a);
}
print_r($order);
// print_r(PDO::getAvailableDrivers());

// $finance =  array ();
// for ($i = 0; $i < $j; $i++) {
//   $result->data_seek($i);
//   $mass = $result->fetch_array(MYSQLI_NUM);
//   $time = new finance($mass[0],$mass[1],$mass[2]);
//   array_push($finance, $time);
// }

// Форма для фильтрации 
echo '<form method="get" action="">
    <input type="text" name="filter_name" placeholder="Filter by name">
    <select name="filter_category">
        <option value="">All categories</option>
        <option value="client_id">client_id</option>
        <option value="position">position</option>
        <option value="color_perition">color_perition</option>
        <option value="data_order">data_order   </option>
    </select>
    <button type="submit">Filter</button>
</form>';

// Отображение 
echo '<table>
    <tr>
        <th>client_id</th>
        <th>position</th>
        <th>color_perition</th>
        <th>data_order</th>
    </tr>';

foreach ($products as $product) {
    echo '<tr>
        <td>' . $product['client_id'] . '</td>
        <td>' . $product['position'] . '</td>
        <td>' . $product['color_perition'] . '</td>
        <td>' . $product['data_order'] . '</td>
    </tr>';
}

echo '</table>';

//  фильт
$filter_name = $_GET['filter_name'] ?? '';
$filter_category = $_GET['filter_category'] ?? '';

if (!empty($filter_name) || !empty($filter_category)) {
    $query = "SELECT * FROM order_car WHERE $filter_category = ";
    $conditions = [];

    if (!empty($filter_name)) {
        $conditions[] = " LIKE '%$filter_name%'";
    }


    if (!empty($filter_category)) {
        $conditions[] = "'$filter_category'";
    }

    $query .= implode(' AND ', $conditions);
    if (empty($filter_name)) {
        $query = "SELECT $filter_category FROM order_car";
    }
    print_r($query);
    $stmt = $pdo->query($query);

    $filtered_products = $stmt->fetchAll();

    // Отображение отфильтрованных данных
    echo '<h3>Filtered client</h3>
    <table>
        <tr>
                 <th>client_id</th>
                 <th>position</th>
                 <th>color_perition</th>
                 <th>data_order</th>
        </tr>';

    foreach ($filtered_products as $product) {
        echo '<tr>
        <td>' . isset($product['client_id']) . '</td>
        <td>' . isset($product['position']) . '</td>
        <td>' . isset($product['color_perition']) . '</td>
        <td>' . isset($product['data_order']) . '</td>
        </tr>';
    }

    echo '</table>';
}
?>
</body>
</html>