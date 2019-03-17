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
        $(all_el).show();
          var clock;
          
            clock = new FlipClock($('.clock'), 30, {
              clockFace: 'Counter',
              autoStart: true,
              countdown: true
              // onStart: function() {
              //   console.log('clock started!');
              // },
              // onStop: function() {
              //   console.log('clock stopped!');
              // }
          });
        setTimeout(clockEnds, 5000)
          });

          // Code not working .............
          function clockEnds (){
            console.log('clock end')
            // if(clock ==-1);{
            $(end_el).hide();
            $(done_el).hide();
            $(questions_el).hide();
            $(end_el).show();
            win.text(getScore());
            losses.text(getWrong());
            unanswered.text(noAnswer());
            return clockEnds;
            
          // }
        } 
        
         
      

          var answers = ["A","C","B"], 
            tot = answers.length;

            function getCheckedValue( radioName ){
                var radios = document.getElementsByName( radioName ); 
                for(var y=0; y<radios.length; y++)
                  if(radios[y].checked) return radios[y].value; 
            }
          
            function getScore(){
              var score = 0;
              for (var i=0; i<tot; i++) {
                if(getCheckedValue("question"+i)===answers[i]) score += 1; 
              }
              return score;
            }
            function getWrong(){
              var wrong = 0;
              for (var j=0; j<tot; j++) {
                const userResponse = getCheckedValue("question"+j);
                if (userResponse !== undefined && userResponse !== answers[j]) {
                  wrong += 1;
                } 
              }
              return wrong;
            }

            // Code not working .............
            function noAnswer(){
              var none = 0;
              for (var k=0; k<tot; k++) {
                const userResponse = getCheckedValue("question"+k);
                if (userResponse === undefined) {
                  none += 1;
                } 
              }
              return none;
            }
            
        
        $(end_el).hide();
       

$(done_el).click(function(){
  $(this).hide(); 
  $(questions_el).hide();
  $(end_el).show();
  {
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









