'use strict';

{
  const images = [
    'img/kintone.png',
    'img/omikuji.png',
    'img/slot.png',
    'img/number.png',
  ];

  const links = [
    'https://tokihiko1229.github.io/kintone',
    'https://tokihiko1229.github.io/omikuji',
    'https://tokihiko1229.github.io/slot',
    'https://tokihiko1229.github.io/number',
  ]

  let currentIndex = 0;

  const mainImage = document.getElementById('main');
  mainImage.src = images[currentIndex];
  
  const link = document.getElementById('link')
  link.href = links[currentIndex];

  images.forEach((image, index) => { 
    const img = document.createElement('img'); 
    img.src = image; 

    const li = document.createElement('li');
    if (index === currentIndex) {
      li.classList.add('current');
    }

    li.addEventListener('click', () => {
      mainImage.src = image;
      const thumbnails = document.querySelectorAll('.thumbnails > li');
      thumbnails[currentIndex].classList.remove('current');
      currentIndex = index;
      link.href = links[currentIndex];
      thumbnails[currentIndex].classList.add('current');
    });

    li.appendChild(img); 
    document.querySelector('.thumbnails').appendChild(li);
  });

  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    let target = currentIndex + 1;
    if (target === images.length) {
      target = 0;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  const prev = document.getElementById('prev');
  prev.addEventListener('click', () => {
    let target = currentIndex -1;
    if (target < 0) {
      target = images.length -1;
    }
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  let timeoutId;

  function playSlideshow() {
    timeoutId = setTimeout(() => {
      next.click();
      playSlideshow();
    }, 1000);
  }

  let isPlaying = false;

  const play = document.getElementById('play');
  play.addEventListener('click', () => {
    if (isPlaying === false) {
      playSlideshow();
      play.textContent = '停止';
    } else {
      clearTimeout(timeoutId);
      play.textContent = 'スライドショーを再生';
    }
    isPlaying = !isPlaying;
  });
}