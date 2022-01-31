var likeCounter = document.getElementById('like')
console.log(likeCounter)


like = 3;
function likeMachine(){
    like++;
    likeCounter.innerText = like;
}
