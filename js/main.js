  `use strict`;

  var app = new Vue ({
    el:"#head",
    methods:{
      open: function(){
           document.querySelector(".sp-menu").classList.toggle("activ");
         }
        }
  })


{
// PCmenu Javascript
const parents = Array.from(document.querySelectorAll(".DetailParent"));
const overlays = Array.from(document.querySelectorAll(".overlay"))

parents.forEach(parent => {
  parent.addEventListener("mouseover", (e) => {
    
    const index = parents.findIndex(parent => parent === e.target);

    overlays.forEach(overlay => {
      overlay.classList.remove("activ")
    })
    
    overlays[index].classList.add("activ");
  });

  document.querySelector("main").addEventListener("mouseover", () => {
    overlays.forEach(overlay => {
      overlay.classList.remove("activ")
    })
  });

  document.getElementById("head").addEventListener("mouseover", () => {
    overlays.forEach(overlay => {
      overlay.classList.remove("activ")
    })
  })
}); 
}


      
      var vm = new Vue  ({
     
       el:"#app2",
       methods: {
         
         open01: function(){
           document.getElementById("detailParent01").classList.toggle("activ");
           document.getElementById("detail01").classList.toggle("activ");
         },
         open02: function(){
           document.getElementById("detailParent02").classList.toggle("activ");
           document.getElementById("detail02").classList.toggle("activ");
         },
         open03: function(){
           document.getElementById("detailParent03").classList.toggle("activ");
           document.getElementById("detail03").classList.toggle("activ");
         },
         open04: function(){
           document.getElementById("detailParent04").classList.toggle("activ");
           document.getElementById("detail04").classList.toggle("activ");
         },
         open05: function(){
           document.getElementById("detailParent05").classList.toggle("activ");
           document.getElementById("detail05").classList.toggle("activ");
         }
       }
      });

document.onclick = function (e){
 console.log(e)
}

var firstInfo = new Vue ({
  el:"#info",
  data: {
    info:"新型コロナウイルスに関するJALグループの対応について"
  }
})
      
var news = new Vue ({
  el:"#news",
  data: {
    date:"2020.10.30",
    message:"決算会見について"
    // info01:{
    //   date:"2020.10.30",
    //   message:"決算会見について"
    // },
    // info02:{
    //   date:"2020.09.30",
    //   message:"JALグループ統合報告書"
    // },
    // info03:{
    //   date:"2020.09.30",
    //   message:"JALグループ統合報告書"
    // }
  }
})

var secNews = new Vue ({
  el:"#secNews",
  data: {
    date:"2020.09.30",
    message:"JALグループ統合報告書"
  }
})

var thiNews = new Vue ({
  el:"#thiNews",
  data: {
    date:"2020.09.30",
    message:"JALグループ統合報告書"
  }
})
      
// スクロール時

// const scrollElement = document.querySelector(".table")
// window.addEventListener("scroll", () => {
//   scrollElement.classList.add("show");
// }) 
const scrollTitle = document.querySelector(".content h1")

function scrolTitlelEvent () {
  scrollTitle.classList.add("activ");
}

window.addEventListener("scroll", () => {
  var y = pageYOffset;
  if (y > 800) {
    scrolTitlelEvent();
    }
  
})


const scrollElement = document.querySelector(".table")

function scrollEvent () {
  scrollElement.classList.add("show");
}

window.addEventListener("scroll", () => {
  var y = pageYOffset;
  if (y > 400) {
    scrollEvent();
    }
  console.log(y)
})


const elements = document.querySelectorAll(".items")

function scroll () {
  for (let element of elements) {

    element.classList.add("activ");
  }
}

window.addEventListener("scroll", () => {
  var y = pageYOffset;
  if (y > 1500 ) {
    scroll();
    }
})

const scrollItemsElements = Array.from(document.querySelectorAll(".col li"))


let index = 0

function scrollItemsEvents() {
    scrollItemsElements[index].classList.add("activ"); 
    index ++;
  }


 window.addEventListener("scroll", (e) => {
  var y = pageYOffset;
  if (y > 900 ) {
    var id = setInterval(function () {
      if (index < 3)
      scrollItemsEvents();
      else {
        clearInterval(id)
      }
    },300)
  };
  
  })

  const scrollTitleElement = document.querySelector(".content .title")

function scrollTitleElementEvent () {
  scrollTitleElement.classList.add("activ");
}

window.addEventListener("scroll", () => {
  var y = pageYOffset;
  if (y > 2000) {
    scrollTitleElementEvent (); 
    }
  
})
