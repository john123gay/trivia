 var correct = 0;
        var wrong = 0;

        var time = 60;

        window.onload = function() {
            start();
            
        };
        
        function reset() {

            

        }

        function start() {
            intervalId = setInterval(count, 1000);
            time = 60;


            

        }

        function stop() {

            console.log("stopping");
            clearInterval(intervalId);

        }

        function count() {

            time--; 
            var converted = timeConverter(time);
            //$("#display").text("01:00");
            $("#display").text(converted);
          

        }
        function timeConverter(t) {

            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);

            
            if(seconds === 0) {
                completed();
                stop();
            }
            
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            
            if (minutes === 0) {
                minutes = "00";
            }
            else if (minutes < 10) {
                minutes = "0" + minutes;
            }

            return minutes + ":" + seconds;
            
            
        }

        /*  $('input[name="newjersey"]').on("click", function () {
              if ($(this).val() !== "ans") {
                  wrong++;
              } else {
                  correct++
  
              }
  
          });
          $('input[name="newyork"]').on("click", function () {
              if ($(this).val() !== "ans") {
                  wrong++;
              } else {
                  correct++
  
              }
  
          });
          $('input[name="florida"]').on("click", function () {
              if ($(this).val() !== "ans") {
                  wrong++;
              } else {
                  correct++
  
              }
  
          });
          $('input[name="texas"]').on("click", function () {
              if ($(this).val() !== "ans") {
                  wrong++;
              } else {
                  correct++
  
              }
  
          });
  */

        function completed() {
            
            for (var i = 0; i < 8; i++) {
                var radios = document.getElementsByName('question' + i);
                for (var j = 0; j < radios.length; j++) {
                    var radio = radios[j];
                    if (radio.value === "ans" && radio.checked) {
                        correct++;
                    } else if (radio.value === "wrg" && radio.checked) {
                        wrong++;
                    }
                    else if (radio.value === null){
                        wrong++;
                    }
                }
            }
            alert("you got " + correct + " right and "+ wrong +" wrong")

        }
        $("#finish").on("click", stop);
        $("#finish").on("click", completed);
        

          //  console.log("Number Right: \n" + correct + "\n" + "Number Wrong: \n" + wrong);
    