var closebtn = document.getElementById('popover_close'),
count = 0;
var timer = setInterval(function() { 
  $('.modal').modal('show') }, 1000);
closebtn.onclick = function() {
 count += 1;
if(count === 2)
{
  clearInterval(timer)
}
};
