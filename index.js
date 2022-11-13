const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
  window.alert ("gracias por decir que si")
    location.href = "https://www.youtube.com/watch?v=9q9zsZer14g =44segundos";
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});