function autoType(elementClass, typingSpeed){
  var thhis = $(elementClass);
  thhis.css({
    "position": "relative",
    "display": "inline-block"
  });
  thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
  thhis = thhis.find(".text-js");
  var text = thhis.text().trim().split('');
  var amntOfChars = text.length;
  var newString = "";
  thhis.text("|");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for(var i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },1500);
}


//Добавляти нові функції з текстами сюди...
  $(document).ready(function(){
    autoType(".type-js-1",200);
  });

  setTimeout(() => {

    document.querySelector('.type-js-1').style.display = 'none';
    $(document).ready(function(){
      autoType(".type-js-2",200);
    });

    setTimeout(() => {

      document.querySelector('.type-js-2').style.display = 'none';
      $(document).ready(function(){
        autoType(".type-js-3",200);
      });
      
      setTimeout(() => {

        document.querySelector('.type-js-3').style.display = 'none';
        $(document).ready(function(){
          autoType(".type-js-4",200);
        });
    
      }, 7000);
  
    }, 7000);

  }, 7000);

// setInterval(() => {

//   document.querySelector('.type-js-1').style.display = 'block';
//   document.querySelector('.type-js-2').style.display = 'block';
//   document.querySelector('.type-js-3').style.display = 'block';
//   document.querySelector('.type-js-4').style.display = 'block';

//   //Добавляти нові функції з текстами сюди...
//   $(document).ready(function(){
//     autoType(".type-js-1",200);
//   });

//   setTimeout(() => {

//     document.querySelector('.type-js-1').style.display = 'none';
//     $(document).ready(function(){
//       autoType(".type-js-2",200);
//     });

//     setTimeout(() => {

//       document.querySelector('.type-js-2').style.display = 'none';
//       $(document).ready(function(){
//         autoType(".type-js-3",200);
//       });
      
//       setTimeout(() => {

//         document.querySelector('.type-js-3').style.display = 'none';
//         $(document).ready(function(){
//           autoType(".type-js-4",200);
//         });

//         setTimeout(() => {

//           document.querySelector('.type-js-4').style.display = 'none';
      
//         }, 7000);
    
//       }, 7000);
  
//     }, 7000);

//   }, 7000);

// }, 28000);