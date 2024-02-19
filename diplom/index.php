<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

<?php
// Подключение к базе данных
$host = 'localhost';
$dbname = 'time';
$username = 'root';
$password = '';

$pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

// Получение данных из базы данных
$stmt = $pdo->query('SELECT * FROM order_car');
$products = $stmt->fetchAll();

// Форма для фильтрации данных
echo '<form method="get" action="">
    <input type="text" name="filter_name" placeholder="Filter by name">
    <select name="filter_category">
        <option value="">All categories</option>
        <option value="Category 1">Category 1</option>
        <option value="Category 2">Category 2</option>
    </select>
    <button type="submit">Filter</button>
</form>';

// Отображение данных
echo '<table>
    <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Description</th>
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

// Применение фильтров
$filter_name = $_GET['filter_name'] ?? '';
$filter_category = $_GET['filter_category'] ?? '';

if (!empty($filter_name) || !empty($filter_category)) {
    $query = 'SELECT * FROM order_car WHERE client_id ';
    $conditions = [];

    if (!empty($filter_name)) {
        $conditions[] = " LIKE '%$filter_name%'";
    }

    if (!empty($filter_category)) {
        $conditions[] = "category = '$filter_category'";
    }

    $query .= implode('AND', $conditions);
    print_r($query);
    $stmt = $pdo->query($query);

    $filtered_products = $stmt->fetchAll();

    // Отображение отфильтрованных данных
    echo '<h3>Filtered client</h3>
    <table>
        <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
        </tr>';

    foreach ($filtered_products as $product) {
        echo '<tr>
        <td>' . $product['client_id'] . '</td>
        <td>' . $product['position'] . '</td>
        <td>' . $product['color_perition'] . '</td>
        <td>' . $product['data_order'] . '</td>
        </tr>';
    }

    echo '</table>';
}
?>
</body>
</html>