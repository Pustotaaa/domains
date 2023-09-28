<!DOCTYPE html>
<html lang="ru">
<head>
   <meta charset="UTF-8">
   <title>ABYSS</title>
   <link rel="stylesheet" href="styles.css">
   <link rel="stylesheet" href="new.css">
   <link rel="stylesheet" href="posi.css">
</head>
<body>
   <a id="site1" href = http://formochka>Next site</a>
   <button class="labirint" onclick="document.getElementById('labirint').style.display ='block '">Start labirint</button>
   <o id="labirint" class="f">
      <div onmouseover="alert('Начни заново')" id="lab8" class="lab">
      </div>
      <div onmouseover="alert('Начни заново')" id="lab9" class="lab">
      </div>
      <div onmouseover="alert('Начни заново')" id="lab10" class="lab">конец
      </div>
      <div onmouseover="alert('Начни заново')" id="lab11" class="lab">
      </div>
      <div onmouseover="alert('Начни заново')" id="lab12" class="lab">
      </div>
      <div onmouseover="alert('Начни заново')" id="lab13" class="lab">
      </div>
      <div onmouseover="alert('Начни заново')" id="lab14" class="lab">
      </div>
      <div onmouseover="alert('Начни заново')" id="lab15" class="lab">
      </div>
      <div onmouseover="alert('Начни заново')" id="lab16" class="lab"> начало</div>
   </o>
   <div class="glow-on-hover" id="df"></div>
   <button onclick="alert('ю')" class="glow-on-hover" id="postopbutton" type="button">НАЖМИ НА МЕНЯ ПЖ !</button>
   <div class="reg">
      <input type="text" value="Admin" id="nameIF">
      <input type="text" value="Admin" id="pwdIF">
      <input type="button" class="material-symbols-outlined" value="Проверить" onclick="login()">
   </div>
   <form method="post" action="index.php" id="count">
      <input type="text" name="text" id="form1">
      <button type="submit" id="botton1"> Посчитать </button>
   </form>
   <?php
   if (!empty(($_POST['text']))) {
      $text = str_split($_POST['text']);
      $n;
      $p;
      foreach (array_unique($text) as $n) {
         $p = $n;
         $s = 0;
         foreach ($text as $f) {
            if ($p == $f)
               $s += 1;
         }
         echo <<<_END
    <o class="eee">$n, количество :$s<br></o>
    _END;
      }
   }
   if (isset($_POST['ice'])) {
      $ice = ($_POST['ice']);
      foreach ($ice as $item)
         echo "$item<br>";
   }

   if (isset($_POST['color'])) {
      $color = ($_POST['color']);
      echo <<<_END
_END;
   }
   ?>

   <form method="post" action="index.php" id="choca">
      <label id="labe">какое мороженое?</label>
      <o class="f3e5ab">Ванильное</o>
      <input type="checkbox" name="ice[]" value="Vanilla">
      <o class="d2691e">Шоколадное</o>
      <input type="checkbox" name="ice[]" value="Chocolate">
      <o class="fc5a8d">Земляничное</o>
      <input type="checkbox" name="ice[]" value="Strawberry">
      <button type="submit"> go </button>
   </form>
   <p class="main_text">Сокровеще <br></p>
   мои интересы
   <details id="hobbi">
      <summary>моё хобби</summary>
      Аниме Аниме Аниме Аниме и что то ещё игры
   </details>
   выберете сайт
   <input type="url" name="site" list="linkes">
   <datalist id="linkes">
      <option label='Google' value='http://google.com'>
      <option label='Yahoo!' value='http://yahoo.com'>
      <option label='Bing' value='http://bing.com'>
      <option label='Ask' value='http://ask.com'>
   </datalist>
   <form action="index.php">
      <input type="color" name='backround'>
      <button type="submit">выбрать цвет сайта </button>
   </form>
   <!-- <footer id="top">
      <a href="#top">наверх</a>
      <a href="0">
   </footer> -->
   <div id="fff">
      <table>
         <caption>таблица </caption>
         <tr>
            <th scope="col">игрок</th>
            <th scope="col">бот</th>
            <th scope="col">читер</th>
         </tr>
         <tr>
            <th scope="row">5</th>
            <td>2</td>
            <td>1</td>
         </tr>
         <tr>
            <th scope="row">быстро</th>
            <td>долго</td>
            <td>зочем</td>
         </tr>
         <tr>
            <th scope="row">почему</th>
            <td>что</td>
            <td>да</td>
         </tr>
      </table>
   </div>
   <div>
      <script src="JS.js" defer></script>
   </div>
   <figure>
      <img style="height: 200px; width: 200px" src="https://w.forfun.com/fetch/e6/e6044cb0b978ce39ff76b57402ebd1de.jpeg" alt="описание" />
      <figcaption>text ttttttt</figcaption>
   </figure>
   <iframe style="width: 500px; height:500px;" src="https://www.kreekly.com/lists/3000-samyh-populyarnyh-angliyskih-slov/" 
   frameborder="0"></iframe>

   <label for="ice-cream-choice">список:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
  <option value="Звезные войны"></option>
  <option value="Мандалорец"></option>
  <option value="Властилин колец"></option>
  <option value="Мститили"></option>
  <option value="Грут"></option>
</datalist>


</body>

</html>