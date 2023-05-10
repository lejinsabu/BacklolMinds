const para = document.querySelectorAll(".p p")
const head = document.querySelectorAll(".p h1")
const shead = document.querySelectorAll(".p h4")
const futur = document.querySelectorAll(".future")
const big = document.querySelectorAll(".big")
const creative = document.querySelectorAll(".creative")

const name1 = document.querySelectorAll(".name hr")
const name2 = document.querySelectorAll(".name h3")
const name3 = document.querySelectorAll(".name h4")
const digital = document.querySelectorAll(".digital")
const uidesign = document.querySelectorAll(".uidesign")
const cwriting = document.querySelectorAll(".cwriting")
const Marketing = document.querySelectorAll(".Marketing")
const Web = document.querySelectorAll(".Web")
const Social = document.querySelectorAll(".Social")

const Whead1 = document.querySelectorAll(".heading hr")
const Whead = document.querySelectorAll(".heading h3")
const Whea = document.querySelectorAll(".heading h4")
const wview = document.querySelectorAll(".wview")
const img1 = document.querySelectorAll(".img1")
const img2 = document.querySelectorAll(".img2")
const img3 = document.querySelectorAll(".img3")
const img4 = document.querySelectorAll(".img4")

const aname = document.querySelectorAll(".aname hr")
const aname1 = document.querySelectorAll(".aname h3")
const aname2 = document.querySelectorAll(".aname h4")
const blocks = document.querySelectorAll(".blocks h3")
const amoto = document.querySelectorAll(".amoto")

const theader = document.querySelectorAll(".theader hr")
const theader1 = document.querySelectorAll(".theader h3")
const theader2 = document.querySelectorAll(".theader h4")
const feeds = document.querySelectorAll(".feeds")

const late = document.querySelectorAll(".late2 h1")
const late2 = document.querySelectorAll(".late2 p")
const tarikh = document.querySelectorAll(".tarikh")

const socillink = document.querySelectorAll(".socillink ")
const pro = document.querySelectorAll(".pro h1")
const pro1 = document.querySelectorAll(".pro p")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},{
    threshold: 0.5,

})


para.forEach(p => {
    observer.observe(p)
})
head.forEach(p => {
    observer.observe(p)
})
shead.forEach(p => {
    observer.observe(p)
})

name1.forEach(name => {
    observer.observe(name)
})
name2.forEach(name => {
    observer.observe(name)
})
name3.forEach(name => {
    observer.observe(name)
})
digital.forEach(digital => {
    observer.observe(digital)
})
uidesign.forEach(uidesign => {
    observer.observe(uidesign)
})
cwriting.forEach(cwriting => {
    observer.observe(cwriting)
})
Marketing.forEach(Marketing => {
    observer.observe(Marketing)
})
Web.forEach(Web => {
    observer.observe(Web)
})
Social.forEach(Social => {
    observer.observe(Social)
})

futur.forEach(future => {
    observer.observe(future)
})
big.forEach(big => {
    observer.observe(big)
})
creative.forEach(creative => {
    observer.observe(creative)
})

Whead1.forEach(header1 => {
    observer.observe(header1)
})
Whead.forEach(header1 => {
    observer.observe(header1)
})
Whea.forEach(header1 => {
    observer.observe(header1)
})
wview.forEach(wview => {
    observer.observe(wview)
})
img1.forEach(img1 => {
    observer.observe(img1)
})
img2.forEach(img2 => {
    observer.observe(img2)
})
img3.forEach(img3 => {
    observer.observe(img3)
})
img4.forEach(img4 => {
    observer.observe(img4)
})

aname.forEach(aname => {
    observer.observe(aname)
})
aname1.forEach(aname => {
    observer.observe(aname)
})
aname2.forEach(aname => {
    observer.observe(aname)
})
blocks.forEach(blocks => {
    observer.observe(blocks)
})
amoto.forEach(amoto => {
    observer.observe(amoto)
})

theader.forEach(theader => {
    observer.observe(theader)
})
theader1.forEach(theader => {
    observer.observe(theader)
})
theader2.forEach(theader => {
    observer.observe(theader)
})
feeds.forEach(feeds => {
    observer.observe(feeds)
})

late.forEach(late => {
    observer.observe(late)
})
late2.forEach(late => {
    observer.observe(late)
})
tarikh.forEach(tarikh => {
    observer.observe(tarikh)
})

socillink.forEach(socillink => {
    observer.observe(socillink)
})
pro.forEach(pro => {
    observer.observe(pro)
})
pro1.forEach(pro => {
    observer.observe(pro)
})



function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";

    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";

    }
  } 


  function myFunction1() {
    var dots1 = document.getElementById("dots1");
    var moreText1 = document.getElementById("more1");
    var btnText1 = document.getElementById("myBtn1");

    if (dots1.style.display === "none") {
  
        dots1.style.display = "inline";
        btnText1.innerHTML = "Read more";
        moreText1.style.display = "none";  
      } else {
        dots1.style.display = "none";
        btnText1.innerHTML = "Read less";
        moreText1.style.display = "inline";  
      }
  }

  function myFunction2() {
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var moreText21 = document.getElementById("more21");
    var btnText2 = document.getElementById("myBtn2");

    if (dots2.style.display === "none") {
  
        dots2.style.display = "inline";
        btnText2.innerHTML = "Read more";
        moreText2.style.display = "none";  
        moreText21.style.display = "none";  
      } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "Read less";
        moreText2.style.display = "inline";  
        moreText21.style.display = "inline";  
      }
  }

  function myFunction3() {
    var dots3 = document.getElementById("dots3");
    var moreText3 = document.getElementById("more3");
    var btnText3 = document.getElementById("myBtn3");

    if (dots3.style.display === "none") {
  
        dots3.style.display = "inline";
        btnText3.innerHTML = "Read more";
        moreText3.style.display = "none";  
      } else {
        dots3.style.display = "none";
        btnText3.innerHTML = "Read less";
        moreText3.style.display = "inline";  
      }
  }

  function myFunction4() {
    var dots4 = document.getElementById("dots4");
    var moreText4 = document.getElementById("more4");
    var moreText41 = document.getElementById("more41");
    var btnText4 = document.getElementById("myBtn4");

    if (dots4.style.display === "none") {
  
        dots4.style.display = "inline";
        btnText4.innerHTML = "Read more";
        moreText4.style.display = "none";  
        moreText41.style.display = "none";  
      } else {
        dots4.style.display = "none";
        btnText4.innerHTML = "Read less";
        moreText4.style.display = "inline";  
        moreText41.style.display = "inline";  
      }
  }

  function myFunction5() {
    var dots5 = document.getElementById("dots5");
    var moreText5 = document.getElementById("more5");
    var moreText51 = document.getElementById("more51");
    var btnText5 = document.getElementById("myBtn5");

    if (dots5.style.display === "none") {
  
        dots5.style.display = "inline";
        btnText5.innerHTML = "Read more";
        moreText5.style.display = "none";  
        moreText51.style.display = "none";  
      } else {
        dots5.style.display = "none";
        btnText5.innerHTML = "Read less";
        moreText5.style.display = "inline";  
        moreText51.style.display = "inline";  
      }
  }

  function myFunction6() {
    var dots6 = document.getElementById("dots6");
    var moreText6 = document.getElementById("more6");
    var moreText61 = document.getElementById("more61");
    var btnText6 = document.getElementById("myBtn6");

    if (dots6.style.display === "none") {
  
        dots6.style.display = "inline";
        btnText6.innerHTML = "Read more";
        moreText6.style.display = "none";  
        moreText61.style.display = "none";  
      } else {
        dots6.style.display = "none";
        btnText6.innerHTML = "Read less";
        moreText6.style.display = "inline";  
        moreText61.style.display = "inline";  
      }
  }

  function myFunction7() {
    var dots7 = document.getElementById("dots7");
    var moreText7 = document.getElementById("more7");
    var moreText71 = document.getElementById("more71");
    var btnText7 = document.getElementById("myBtn7");

    if (dots7.style.display === "none") {
  
        dots7.style.display = "inline";
        btnText7.innerHTML = "Read more";
        moreText7.style.display = "none";  
        moreText71.style.display = "none";  
      } else {
        dots7.style.display = "none";
        btnText7.innerHTML = "Read less";
        moreText7.style.display = "inline";  
        moreText71.style.display = "inline";  
      }
  }

  function myFunction8() {
    var dots8 = document.getElementById("dots8");
    var moreText8 = document.getElementById("more8");
    var btnText8 = document.getElementById("myBtn8");

    if (dots8.style.display === "none") {
  
        dots8.style.display = "inline";
        btnText8.innerHTML = "Read more";
        moreText8.style.display = "none";  
      } else {
        dots8.style.display = "none";
        btnText8.innerHTML = "Read less";
        moreText8.style.display = "inline";  
      }
  }

  function myFunction9() {
    var dots9 = document.getElementById("dots9");
    var moreText9 = document.getElementById("more9");
    var moreText91 = document.getElementById("more91");
    var btnText9 = document.getElementById("myBtn9");

    if (dots9.style.display === "none") {
  
        dots9.style.display = "inline";
        btnText9.innerHTML = "Read more";
        moreText9.style.display = "none";  
        moreText91.style.display = "none";  
      } else {
        dots9.style.display = "none";
        btnText9.innerHTML = "Read less";
        moreText9.style.display = "inline";  
        moreText91.style.display = "inline";  
      }
  }

  function myFunction10() {
    var dots10 = document.getElementById("dots10");
    var moreText10 = document.getElementById("more10");
    var moreText101 = document.getElementById("more101");
    var btnText10 = document.getElementById("myBtn10");

    if (dots10.style.display === "none") {
  
        dots10.style.display = "inline";
        btnText10.innerHTML = "Read more";
        moreText10.style.display = "none";  
        moreText101.style.display = "none";  
      } else {
        dots10.style.display = "none";
        btnText10.innerHTML = "Read less";
        moreText10.style.display = "inline";  
        moreText101.style.display = "inline";  
      }
  }

  function myFunction11() {
    var dots11 = document.getElementById("dots11");
    var moreText11 = document.getElementById("more11");
    var moreText111 = document.getElementById("more111");
    var btnText11 = document.getElementById("myBtn11");

    if (dots11.style.display === "none") {
  
        dots11.style.display = "inline";
        btnText11.innerHTML = "Read more";
        moreText11.style.display = "none";  
        moreText111.style.display = "none";  
      } else {
        dots11.style.display = "none";
        btnText11.innerHTML = "Read less";
        moreText11.style.display = "inline";  
        moreText111.style.display = "inline";  
      }
  }