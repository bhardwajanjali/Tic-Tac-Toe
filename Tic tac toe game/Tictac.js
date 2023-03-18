var turn=1;
var win=-1;
var draw=0;
var matrix=[
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1]
]
function playerAction(elem,row,col){

    if(elem.innerHTML!=""){
        return;
    }
    if(win!=-1){
        return;
    }
    draw++;
    matrix[row][col]=turn;
    /*to check turn*/
    if(turn==1){
        elem.innerHTML="X";
        document.getElementById("msgsec").innerHTML="Player 2 turn";
        turn=2;
    }  

    else if(turn==2){
        elem.innerHTML="0";
        document.getElementById("msgsec").innerHTML="Player 1 turn";
        turn=1;
    }
    /*condition of winning*/
    if(matrix[0][0]==matrix[0][1]&&matrix[0][1]==matrix[0][2])win=matrix[0][0];
    else if(matrix[1][0]==matrix[1][1]&&matrix[1][1]==matrix[1][2])win=matrix[1][0];
    else if(matrix[2][0]==matrix[2][1]&&matrix[2][1]==matrix[2][2])win=matrix[2][0];
    else if(matrix[0][0]==matrix[1][0]&&matrix[1][0]==matrix[2][0])win=matrix[0][0];
    else if(matrix[0][1]==matrix[1][1]&&matrix[1][1]==matrix[2][1])win=matrix[0][1];
    else if(matrix[0][2]==matrix[1][2]&&matrix[1][2]==matrix[2][2])win=matrix[0][2];
    else if(matrix[0][0]==matrix[1][1]&&matrix[1][1]==matrix[2][2])win=matrix[1][1];
    else if(matrix[0][2]==matrix[1][1]&&matrix[1][1]==matrix[2][0])win=matrix[0][0];

    if(win!=-1){
        document.getElementById("msgsec").innerHTML="Player "+ win +" has won the game";
    }
    if(draw==9&&win==-1){
        document.getElementById("msgsec").innerHTML="Game Drawn";
    }
}