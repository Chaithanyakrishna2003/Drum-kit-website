
var x=document.querySelectorAll(".drum").length;

for(var i=0;i<x;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function () {

 var buttonInnerHTML= this.innerHTML;

 makeSound(buttonInnerHTML);
 buttonAnimation(buttonInnerHTML);

});
}
document.addEventListener("keypress", function(event) {
 //  alert("key was pressed");
   makeSound(event.key);
});
function makeSound(key){
   switch (key){
      case "w":
         var t1=new Audio("sounds/tom-1.mp3");
         t1.play();
         break;
   
      case "a":
      var t2=new Audio("sounds/tom-2.mp3");
      t2.play();
      break;
   
      case "s":
      var t3=new Audio("sounds/tom-3.mp3");
      t3.play();
      break;
       
      case "d":
         var t4=new Audio("sounds/tom-4.mp3");
         t4.play();
         break;
          
         case "j":
          var t5=new Audio("sounds/snare.mp3");
          t5.play();
         break;
   
      case "k":
        var t6=new Audio("sounds/crash.mp3");
        t6.play();
       break;
       
    case "l":
      var t7=new Audio("sounds/kick-bass.mp3");
      t7.play();
      break;
   default:
   }
}
function buttonAnimation(currentKey){
   var activeButton= document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
      activeButton.classList.remove("pressed");
   },100);
   }

