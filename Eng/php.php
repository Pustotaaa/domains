<?php
$randome = array(
  "as for","bow","cake","Canyon","cat","confetti","cow","dagger","data","distribute.png","dry","form","horse","journey","lamp","light","mountains","narrow","pickaxe","ruins","sold","speech","suspect","sword","trade","allocate"
);
if(!empty($_POST['text']) && mb_strtolower($_POST['text']) == mb_strtolower($_POST['lol']) or $_POST['lol'] == '322')
{
$otvet = $randome[rand(0,19)];
    echo <<<_END
<form action="" id=form1">
  <input type="text" name="text" id='text'>
  <input type="submit">
  <input type="hidden" name="lol" id="lol" value="$otvet">
  <img src="img/$otvet.jpg" id="img">
</form>
_END;
}
else{
echo 1;
}
