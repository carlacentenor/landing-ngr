
        $(document).ready(function () {
           
            if(screen.width<1025){

                   // Counter
                   const show = document.querySelector('.count'),
                   number = Number(show.innerHTML) + 1;

               let counter = 5970,
                   delay = 1,
                   x = number / 100,
                   y = 0;

               counter_js();

               function counter_js() {
                   y++;
                   delay = (x - y);
                   show.innerHTML = counter.toString();
                   counter++;
                   if (counter < number) {
                       setTimeout(function () {
                           counter_js();
                       }, delay)
                   }
               }


            }
            else{
                $('#myContainer').multiscroll({
                    // navigation: true,
                    loopBottom: false,
                    loopTop: false,
                  
                });
            }

        });

        

       