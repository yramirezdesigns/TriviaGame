$(document).ready(function(){
  var win = 0;
  var losses = 0;
  var unanswered = 0;
  var counter = 15;

  var startP_el = $('#startPage');
  var start_el = $('#start');
  var questions_el = $('#questionPage');
  var time = $('#timer');
  var q1_el = $('#question1');
  var q2_el = $('#question2');
  var end_el = $('#gameEndsPage');
  var wins_el = $('#totalCorrect');
  var losses_el = $('#totalIncorrect');
  var notAnswered_el = $('#totalUnanswered');
  var done_el = $('#done');
  var all_el = $('#myDIV');
  var win = wins_el;
  var losses = losses_el;
  var unanswered = notAnswered_el;
  

  $(all_el).hide();

    $(start_el).click(function(){
        $(this).hide(); 
        $(all_el).show();{
          var clock;
          
            clock = new FlipClock($('.clock'), 5, {
              clockFace: 'Counter',
              autoStart: true,
              countdown: true
          });
        }
          });

          // Code not working .............
        //   function clockEnds (){
        //     if(clock ==-1);{
        //     $(end_el).hide();
        //     $(done_el).hide();
        //     $(questions_el).hide();
        //     $(end_el).show();{
        //     win.text(getScore());
        //     losses.text(getWrong());
        //     unanswered.text(noAnswer());
        //     return clockEnds;
        //     }
        //   }
        // } 
        
         
      

          var answers = ["A","C","B"], 
            tot = answers.length;

            function getCheckedValue( radioName ){
                var radios = document.getElementsByName( radioName ); 
                for(var y=0; y<radios.length; y++)
                  if(radios[y].checked) return radios[y].value; 
            }
          
            function getScore(){
              var score = 0;
              for (var i=0; i<tot; i++)
                if(getCheckedValue("question"+i)===answers[i]) score += 1; 
              return score;
            }
            function getWrong(){
              var wrong = 0;
              for (var j=0; j<tot; j++)
                if (getCheckedValue("question"+j)!==answers[j]) wrong += 1; 
              return wrong;
            }

            // Code not working .............
            // function noAnswer(){
            //   var none = 0;
            //   for (var k=0; k<tot; k++)
            //     if ((getCheckedValue("question"+k)!==answers[k]) && (getCheckedValue("question"+k)===answers[k])!==tot) none += 1;
            //   return none;
            // }
            
        
        $(end_el).hide();
       

$(done_el).click(function(){
  $(this).hide(); 
  $(questions_el).hide();
  $(end_el).show();{
    win.text(getScore());
    losses.text(getWrong());
    unanswered.text(noAnswer());
}
});
  
});





//   function questionsToPage (q1_el, q2_el) {
//     for (var i = 0; i < this.length;i++){
//     console.log(questionsToPage);
//     }
//   }
// questionsToPage('Best couple in Marvel?','Best couple in DC?');



// function winnings() {
//     wins_el.text(wins);
// }

// winnings();


//   function startbutton(){
//     $("#startPage").show();
//     $("questionPage").hide();
//     $("#gameEndsPage").hide();
//     $("button").click(function(){
//         $("#start").load("#questionPage");
//       }

//   }









