var likeCounter1 = document.getElementById('like1')
var likeCounter2 = document.getElementById('like2')
var likeCounter3 = document.getElementById('like3')

var likeArray = [likeCounter1,likeCounter2,likeCounter3];


var likes = [0,0,0];

function likeMachine(count){
    likes[count]++;
    likeArray[count].innerText = likes[count];
}