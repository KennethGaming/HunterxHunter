let card1;
let card2;
let clicks =1;
let score =0;
//when we click cards
document.addEventListener("click", function(event){
    //console.log(event.target.alt)
    //console.log(event.target.src)
    //when you click a face down card
    
    if (event.target.src.includes("9.png")) { 
       
        console.log("you clicked a face dowwn card");
        //flip the card
       
        event.target.src = event.target.alt
        console.log ({clicks});
       
       
       
        if (clicks == 1)
  {
            clicks = 2;
            // remember what card 1 is
            card1= event.target;
            console.log ({card1});
          }  else if (clicks== 2) {
            clicks = 1;
            // remember what card 2 is
            card2= event.target;
            console.log ({card2});
            
            if (card1.alt == card2.alt) {
                console.log ("That's a match!!!");
                score = score+1
                //Play sound
                let right= new Audio("correct.mp3");
                right.play()
                if (score ==8){
                   let win= new Audio ("street-fighter-ii-you-win-perfect.mp3")
                   win.play()
                }
                
                

            }else {
                console.log ("Not a match!!!")
                // flip the cards back over
                setTimeout(function(){

                    card1.src = "pictures/9.png"
                    card2.src = "pictures/9.png"

                } , 500)

                let worng= new Audio("wrong_5.mp3")
                worng.play()
                
                
                 
            }
          }
        
    }
    })
// shuffle the cards
document.querySelectorAll("img").forEach(function(card){
   
    card.style.order = Math.round(Math.random()*100);
})

function Reload(){
    location.reload()
}