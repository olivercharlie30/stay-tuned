


//   document.querySelector(".header-Ul").addEventListener("click", ()=> {
//       let headerUl =  1;
//     if (headerUl === 0) {
//         document.querySelector("#sidebar").style.display = "none";
//       }else {
//         document.querySelector("#sidebar").style.display = "flex";
//         document.querySelector("#menu").style.display = "none";
//       }
//   })





// document.querySelector(".like").addEventListener("click", ()=> {
   
//     let num = 1;  
//     if (num ===1) {
//        document.querySelector(".like").innerHTML = `<i class="fa-solid fa-thumbs-up"></i> Liked`;
//         document.querySelector(".like").style.color = "blue";
//         document.querySelector(".like").style.fontSize = "large";
//       }
// });


// document.querySelector(".comments").addEventListener("click", ()=> {
//     document.querySelector("navbar").style.display = "none";
//     document.querySelector(".commentSection").style.display = "flex";
//     document.querySelector(".commentSection").style.position = "flixed";

// })

// let content = document.querySelector('#content');
window.addEventListener("scroll", ()=> {
  //  let left = document.querySelector("leftbar");
  //  let rightbar = document.querySelector("rightbar");

  //  left.style.position = "fixed"; 
  //  rightbar.style.position = "fixed";
  console.log("scrolled");
})



//  document.querySelector("#close-Postcontent").addEventListener("click", ()=> {
//       document.querySelector(".post-Content").style.display = "none";
//       alert("are you sure you want delete this post.");
//   })
    


//    const popUpModalSettings = () => {
//     document.querySelector(".settings").style.dispaly = "flex";
//     alert("PopUp");
//    }
  
//   document.querySelector(".more").addEventListener("click", ()=> {
//      popUpModalSettings();
//   });



//  const  createNewSettings = ()=> {
//   let settings = document.querySelector(".settings");
//       settings.style.display = "flex";
 
//    let div  = document.createElement("div");
//        div.className = "uliLists"
//         div.innerHTML = 
//                     ` <div  class="uliLists">
//                         <ul>
//                           <li></li>
//                           <li class="more">More</li>
//                           <li class="english">english</li>
//                           <li class="feeddback">Feedback and help</li>
//                           <li class="darkMood">Dark Mood > </li>
//                         </ul>
//                     `;
//     settings.appendChild(div);  
//     console.log(div);  


//  }
//  document.querySelector(".more").addEventListener("click", ()=> {
//   createNewSettings ();
//  });

     //MENUBURGER
  // const menuBurger = () => {
  //   let navbarMenu = document.querySelector(".navbarMenu");
  //   let menu = document.querySelector("#menu");

  //   navbarMenu.style.display = "flex";
  //   menu.style.display = "none";
  //   menu.style.hover = "none";
  // }
  //   document.querySelector("#menu").addEventListener("click", ()=> {
  //     menuBurger();
  //  })
 

  //NAVBARHAMBURGER OPEN
  document.querySelector(".navbarhamburger").addEventListener("click", ()=> {
    alert("open");
     document.querySelector(".searchUlists").style.display = "flex";
     document.querySelector(".navbarhamburger").style.display = "none";
     document.querySelector(".navbarHamburgerClose").style.display = "flex";
       

     document.querySelector(".navbarhamburger").style.border = "2px solid black";
  })
    //NAVBARHAMBURGER CLOSE
  document.querySelector(".navbarHamburgerClose").addEventListener("click", ()=> {
    alert("close");
     document.querySelector(".searchUlists").style.display = "none";
     document.querySelector(".navbarhamburger").style.display = "flex";
     document.querySelector(".navbarHamburgerClose").style.display = "none";
    
  })




    // darkMood 
    const darkMood = () => {
      let navbar = document.querySelector("navbar");
      let body = document.querySelector("body");
      let navbarMenu = document.querySelector(".navbarUlMenu");
      let darkMood = document.querySelector(".darkMood");
      let moreSettings = document.querySelector(".moreSettingUlists");


      body.classList.toggle("dark");
      navbar.style.border = "1px solid white";
      navbarMenu.style.border = "1px solid white";
      darkMood.innerHTML = "LIGHT MOOD";
      moreSettings.style.backgroundColor = "black";
      moreSettings.style.color = "white";
    }
   document.querySelector(".darkMood").addEventListener("click", ()=> {
      darkMood();
   })
     
   
   //navbarMenuClose

//MORE SETTING POP UP 
const moreSettingPopUp = ()=> {
  let moreSettings = document.querySelector(".moreSettings");
  moreSettings.style.display = "flex";
}
document.querySelector(".more").addEventListener("click", ()=> {
  moreSettingPopUp();
})



const moreCloseSettings =()=> {
  let moreSettings = document.querySelector(".moreSettings");
  moreSettings.style.display = "none"; 
}
document.querySelector(".moreCloseSettings").addEventListener("click", ()=>{
  moreCloseSettings();
})



  //SEE MORE FUNCTION
  let category = document.querySelector(".textMore");

  let readMoreBtn = document.querySelector(".readMoreBtn").addEventListener("click", (e)=> {
    category.classList.toggle("showMore");
    readMoreBtn.style.display = "none";
     
  })


document.querySelector(".like").addEventListener("click", ()=> {
  alert("like");
   document.querySelector(".like").style.color = "blue";
})


