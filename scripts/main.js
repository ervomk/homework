$(document).ready(function(){
    var seconds=5;
   var timer=setInterval(function(){
       $('p').addClass('animated shake').delay('500').queue(function(test){
           $('p').removeClass('animated shake');
           test();
       });
   },seconds*1000);
});
