var systemguess = Math.floor(Math.random()*100)+1
var guess = 0
function guessNum() 
{
    var num = document.getElementById('in').value;
    if (num === '' || num > 100 || num < 1) {
        console.log('Invalid Input');
    }
    else {
        guess++
        var num = parseInt(document.getElementById('in').value);
        if (num === systemguess) {
            console.log('Got the answer correctly !!');
            document.getElementById('out').innerText = 'Got the answer correctly!!'+'( '+guess+' '+'attempts )'
        }
        else if (num > systemguess) {
            console.log('Guess a smaller number');
            document.getElementById('out').innerText = 'Oops,Guess a smaller number'
        }
        else {
            console.log('Guess a greater number');
            document.getElementById('out').innerText = 'Oops,Guess a greater number'
        }
    }
}

