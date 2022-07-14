
var level = 0;
var pattern_list = [];
var user_list = []
var num = undefined;


function random_button_clicked(){
    var num = Math.floor(Math.random()*4);
    var audio = new Audio("sounds/sound_"+(num+1).toString()+".mp3");
    $(".btn"+ (num+1).toString()).addClass("pressed");
    setTimeout(function(){$(".btn"+ (num+1).toString()).removeClass("pressed")},100);
    audio.play();
    pattern_list.push((num+1).toString());
}




$(".start-game").click(function(){
     if ($("#level-title").text().indexOf("Start")!= -1){
          $("#level-title").text("SCORE 0");
          level = 0;
          random_button_clicked();
     }   
  });
  
  
 
$(".btn1,.btn2,.btn3,.btn4").click(function(event){
     user_list.push($(this).attr("class").slice(-1));
     button_no = $(this).attr("class").slice(-1);
     var audio = new Audio("sounds/sound_"+button_no+".mp3");
     $(".btn"+ button_no).addClass("pressed");
     setTimeout(function(){$(".btn"+button_no).removeClass("pressed")},50);
     audio.play();
 
     if(JSON.stringify(pattern_list.slice(0,user_list.length)) != (JSON.stringify(user_list))){
          $("#level-title").text("Game Over, your score is  " + level + "  , Click Play To Start Again");
          user_list= [];
          pattern_list = [];
          var audio = new Audio("sounds/wrong.mp3");
          $("body").addClass("game-over");
          setTimeout(function(){ $("body").removeClass("game-over")},100);
          audio.play();
     }
 
     else if(JSON.stringify(pattern_list) == JSON.stringify(user_list)){
          level++;
          $("#level-title").text("SCORE"+" "+level.toString());
          user_list = [];
          setTimeout(random_button_clicked,1000);
     }
})


 