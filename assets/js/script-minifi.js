const navbar=document.querySelector(".navbar"),helps=document.getElementById("menu-li"),item=[...document.querySelectorAll(".item")],hamburger=document.querySelector("#menu-btn"),menu=document.querySelector(".menu"),logo=document.querySelector(".uniajc-logo");let counter=2;window.addEventListener("scroll",(e=>{window.scrollY<20?(navbar.classList.remove("bg-transparent"),item.forEach((e=>{e.classList.add("cl-item")})),logo.src="https://i.imgur.com/HoNwVDh.png"):(navbar.classList.add("bg-transparent"),item.forEach((e=>{e.classList.remove("cl-item")})),logo.src="https://i.imgur.com/LnGfALA.png",menu.classList.add("bg-menu"))})),toggleMenu=()=>{menu.classList.toggle("show-menu"),logo.src="https://i.imgur.com/LnGfALA.png",navbar.classList.add("bg-transparent")},setInterval((()=>{document.getElementById("radio"+counter).checked=!0,counter++,counter>5&&(counter=1)}),8e3);for(let e=0;e<item.length;e++)item[e].addEventListener("click",(()=>{let t=document.getElementsByClassName("active");t.length>0&&(t[0].className=t[0].className.replace(" active","")),this.className+=" active","Incio de sesión"==item[e].innerHTML&&window.scrollTo(0,500),"Inicio"==item[e].innerHTML&&window.scrollTo(0,0),"Ayudas"==item[e].innerHTML&&window.scrollTo(0,900),"Contacto"==item[e].innerHTML&&window.scrollTo(0,2500)}));