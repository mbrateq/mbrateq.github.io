// Code goes here

var player1Score = [];
var player2Score = [];
var fielsdArray= ['1.1','1.2','1.3','2.1','2.2','2.3','3.1','3.2','3.3'];

var clickCount = 0;
function clicked(id){


if(clickCount%2==0 &&  player1Score.indexOf(id)<0 && player2Score.indexOf(id)<0 && clickCount<=9){
	console.log("id: "+ id);
document.getElementById(id).style.backgroundColor = "red";
var index = fielsdArray.indexOf(id);
if (index !== -1) {
  fielsdArray.splice(index, 1);
}
player1Score.push(id);
clickCount++;
if(checkWinnerPlayer1()){
	clickCount = 10;	
}
var randomNumber = Math.floor(Math.random()*fielsdArray.length);
console.log("randomNumber: "+ randomNumber);
console.log("fieldsArray: "+ fielsdArray.toString);
var computerChoice = fielsdArray[randomNumber];
console.log("computerChoice"+ computerChoice);
document.getElementById(computerChoice).style.backgroundColor = "green";
index = fielsdArray.indexOf(computerChoice);
if (index !== -1) {
  fielsdArray.splice(index, 1);
}
player2Score.push(computerChoice);
clickCount++;
if(checkWinnerPlayer2()){clickCount = 10;}
  }

}

function Reset()
{
player1Score = [];
player2Score = [];
var fielsdArray= ['1.1','1.2','1.3','2.1','2.2','2.3','3.1','3.2','3.3'];
clickCount = 0;
location.reload();
}



function checkWinnerPlayer1(){

var player1rows = [];
var player1cols = [];


for(i=0;i<player1Score.length; i++){
var rowsColumns1 = [];
rowsColumns1 = player1Score[i].toString().split('.');
player1rows.push(rowsColumns1[0]);
player1cols.push(rowsColumns1[1]);

}


var player1Winner = checkForRowColumn(player1rows);
if(!player1Winner)
player1Winner = checkForRowColumn(player1cols);
if(!player1Winner)
player1Winner = checkForDiagonal(player1Score);

if(player1Winner){
var play1 = document.getElementById("txtPlayer1Name").value;
alert(play1+ ' wins click play again to resume');
document.getElementById("divResult").style.display = "block";
document.getElementById("divwinner").innerHTML = play1;
return true;
}
return false;
}

function checkWinnerPlayer2(){
var player2rows = [];
var player2cols = [];
for(i=0;i<player2Score.length; i++){
var rowsColumns2 = [];
rowsColumns2 = player2Score[i].toString().split('.');
player2rows.push(rowsColumns2[0]);
player2cols.push(rowsColumns2[1]);

}


var player2Winner = checkForRowColumn(player2rows);
if(!player2Winner)
player2Winner = checkForRowColumn(player2cols);
if(!player2Winner)
player2Winner = checkForDiagonal(player2Score);

if(player2Winner){
alert('computer wins! click play again to resume');
document.getElementById("divResult").style.display = "block";
document.getElementById("divwinner").innerHTML = play2;
return true;
}
return false;


}

function checkForRowColumn(array){
if(array.length>2){
var one = 0;
var two = 0;
var three = 0;
for(i=0;i<array.length;i++){
if(array[i]=='1')
one++;
if(array[i]=='2')
two++;
if(array[i]=='3')
three++;
}
if(one==3 || two==3 || three==3)
return true;

return false;
}
return false;

}

function checkForDiagonal(playerScore){
if(playerScore.length >2){
if(playerScore.indexOf('1.1')>-1 && playerScore.indexOf('2.2')>-1 && playerScore.indexOf('3.3')>-1)
return true;
if(playerScore.indexOf('1.3')>-1 && playerScore.indexOf('2.2')>-1 && playerScore.indexOf('3.1')>-1)
return true;
return false;

}


}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
