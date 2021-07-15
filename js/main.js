


const badgeEL = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');


window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500){
    //배지 숨기기
    // gsap.to(요소,지속시간,옵션)
    gsap.to(badgeEL, .6 , {
      opacity: 0,
      display: 'none'
    } );

    //버튼 보이기
    gsap.to(toTopEl, .2,{
      x:0,
    });
    
  } else {
    //배지 보이기
    gsap.to(badgeEL, .6 , {
      opacity: 1,
      display: 'block'
      
    });
   
    //버튼 숨기기
   gsap.to(toTopEl, .2,{
     x:100,
   });


  }
},300));

//_.throttle(함수, 시간)
//함수가 과잉 실행되는 것을 방지한다.


toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo:0
  });
});







//title 컵 나타나기

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){
gsap.to(fadeEl, 1,{
  delay:(index + 1) * 0.7, //index는 0부터 시작하므로 1번째 인덱스는 0.7초 뒤에 다음 인덱스는 +0.7 ..
  opacity:1,

  });

});

//forEach 함수는 반복재생




//공지사항 스와이퍼 new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container',{
 direction:'vertical',
 autoplay: true,
 loop:true,

});

new Swiper('.promotion .swiper-container', {
  slidesPerView:3, //보여줄 수 있는 슬라이드 개수
  spaceBetween:10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay:{
    delay:5000
  },
  pagination:{
    el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable:true //사용자의 페이지 번호 요소 제어

  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});


//공지사항 스와이퍼 new Swiper(선택자,옵션)하단

new Swiper ('.awards .swiper-container', {
  autoplay: true,
  loop:true,
  spaceBetween:30,
  slidesPerView: 5,
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }

})





//toggle

const promotEl = document.querySelector('.promotion');
const promotTogglebtn = document.querySelector('.toggle-promotion');
let ishidePromot = false


promotTogglebtn.addEventListener('click',function(){
  ishidePromot = !ishidePromot //!는 반대로 만들어 달라는 뜻
  if(ishidePromot){
    //숨김처리
    promotEl.classList.add('hide')
  }else{
    //열림처리
    promotEl.classList.remove('hide')
  }
});



function random(min,max){
  return parseFloat((Math.random() * (max * min) + min ))
}

function floatingObj(selector, delay, size){
  gsap.to(selector,//선택자
    random(1.5, 2.5), //애니메이션 동작 시간
  
  {//옵션
    y:size,
    repeat: -1,
    yoyo:true,
    ease: Power1.easeInOut,
    delay:random(0,delay)
  });
}
floatingObj('.floating1',1,15);
floatingObj('.floating2',.5,15);
floatingObj('.floating3',1.5,20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook:.8, 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());

});
