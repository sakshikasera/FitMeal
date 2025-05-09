import navbar from "./components/navbar.js";

let header = document.getElementById("navbar");

header.innerHTML = navbar();


// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     // nav:false1
//     autoplay:true,
//     autoplayTimeout: 1000,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })



// var i;
//         var slideimg = document.getElementById("slideimg")
//         var overlay = document.querySelector(".overlay")
//        var images = ["https://i.pinimg.com/originals/60/82/2a/60822abccca5daecf6229287e330246f.png" ,"https://www.fitmeals.co.in/wp-content/uploads/2021/09/businesswoman-2817567_640.jpg","https://cdn.pixabay.com/photo/2017/01/14/10/57/woman-1979272__480.jpg","https://cdn.pixabay.com/photo/2017/04/27/08/29/man-2264825_960_720.jpg"]
//         var len = images.length;
//         var i = 0
       
      
//         function slider()
//         {
//             if(i > len-1)
//             {
//                 i = 0 
//             }
           
//             slideimg.src = images[i]
         
//             var overlay = document.querySelector(".overlay")
//        overlay.innerHTML = bannertext()
//             i++
//             setTimeout('slider()',5000);
//       }
     



   

     
//        function bannertext()
//        {
//            if(i==0){
//                return `
//                <button onclick=right() class="rightbuttom" style="width: 7.5%; height: 15.8%; font-size: 20px; color:rgb(90,90,90);">&#x2192</button>
//                <button onclick=left() class="leftbuttom" style="width: 7.5%; height: 15.8%; font-size: 20px; color:rgb(90,90,90);">&#x2190</button>
              
           

//          </div>`
//            }
//            else if (i == 1)
//            {
//                return `
//                <button onclick=right() class="rightbuttom" style="width: 7.5%; height: 15.8%; font-size: 20px; color:rgb(90,90,90);">&#x2192</button>
//                <button onclick=left() class="leftbuttom" style="width: 7.5%; height: 15.8%; font-size: 20px; color:rgb(90,90,90);">&#x2190</button>
//                <div class="content">
//                    <h1>Your Personal Health Coach</h1>
//              <h3>A persona nutritionist assigned to design your diet charts</h3>

//          </div>`
//            }
//            else if (i == 2)
//            {
//                return `
//                <button class="rightbuttom" style="width: 7.5%; height: 15.8%; font-size: 20px; color:rgb(90,90,90);" onclick = right()>&#x2192</button>
//                <button class="leftbuttom" style="width: 7.5%; height: 15.8%; font-size: 20px; color:rgb(90,90,90);" onclick=left()>&#x2190</button>
//                <div class="content">
//              <h1>Wholesome Healthy Recipes</h1>
//              <h3>Get access to quick and easy recipes and meal prep ideas</h3>

//          </div>`
//            }
//            else if (i == 3)
//            {
//                return `
//                <button class="rightbuttom" style="width: 7.5%; height: 15.8%; font-size: 20px; color:rgb(110,110,110);" onclick = right()>&#x2192</button>
//                <button class="leftbuttom" style="width: 7.5%; height: 15.8%; font-size: 20px; color:rgb(110,110,110);" onclick=left()>&#x2190</button>
//                <div class="content">
//              <h1>Personalised workout plans</h1>
//              <h3>workout routines designed according to your experience level.</h3>

//          </div>`
//            }
           
//        }
//         function right()
//        {
//            console.log("aa ")
//            i++
//            if(i>3)
//            {
//               i = 0
//            }
//            slideimg.src = images[i]
//            overlay.innerHTML = bannertext();

//        }
//        function left()
//        {
//            console.log("aa ")
//            i--
//            if(i<0)
//            {
//               i = 3
//            }
//            slideimg.src = images[i]
//            overlay.innerHTML = bannertext();

//        }




