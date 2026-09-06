
let balance = 1000;
const symbol = [" A", "B", "C","D", "E" ]
const maxButton = document.getElementById('maxBet')
const minButton = document.getElementById('minBet')



function spin(bet){
    let reels = document.querySelectorAll('.reel')
    let message = document.getElementById('message')

    if (bet > balance){
        message.innerText= "You don't have enough money"
    }
    else {
        balance -= bet
        let reelOne = symbol[Math.floor(Math.random()* symbol.length)]
        let reelTwo = symbol[Math.floor(Math.random()* symbol.length)]
        let reelThree = symbol[Math.floor(Math.random()* symbol.length)]

        reels[0].innerText = reelOne
        reels[1].innerText = reelTwo
        reels[2].innerText = reelThree

        if (reelOne === reelTwo && reelTwo === reelThree){
            message.innerText="You won!"
            let profits = bet * 10 
            profits += balance 
        }
        else {
            message.innerText="You lost!"
        }
        document.querySelector('#moneyDisplay').innerText = `$${balance}`



    }
}

 maxButton.addEventListener('click', function(){spin(50)})
 minButton.addEventListener('click', function(){spin(1)})




