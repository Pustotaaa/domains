<?php
$randome = array("bow","cake","Canyon","cat","confetti","cow","dagger","data","form","horse","lamp","light","mountains","narrow","pickaxe","ruins","speech","suspect","sword","trade");
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
