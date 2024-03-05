// tz=document.querySelector("#timezone");
// btn=document.querySelector("#btn");
// dt=document.querySelector("#date-time");

// btn.addEventListener("click",async () => {
//     try {
//     const response = await fetch(`http://worldtimeapi.org/api/timezone/${tz.value}`);
//     const time=await response.json();

//     const date = new Date(time.datetime);
//     dt.innerHTML = date.toLocaleString();
//     }catch (err) {
//         console.log(err);
//     }
    

    
// });
// //declaring the function for updating the time
// async function counterTime() {
//     try {
//       const response = await fetch(`http://worldtimeapi.org/api/timezone/${tz.value}`);
//       const time = await response.json();
//       const date = new Date(time.datetime);
//       dt.innerHTML = date.toLocaleString();
//     } catch (err) {
//       console.log(err);
//     }
//   }

  
//   //button to call the function
//   btn.addEventListener("click", () => {
 
//     counterTime();
    
//     setInterval(counterTime, 1000);
//   });


//   //taking time
//   const giventime = date.getHours();
//   try{}  
//   if (giventime < 12) {
    
//     document.body.style.backgroundColor = "#fcccbb";
//   } else {
    
//     document.body.style.backgroundColor = "#ADD8E6";
//   }
 
  const tz = document.querySelector("#timezone");
  const btn = document.querySelector("#btn");
  const dt = document.querySelector("#date-time");
  
  //declaring the function for updating the time
  async function counterTime() {
    try {
      const response = await fetch(`http://worldtimeapi.org/api/timezone/${tz.value}`);
      const time = await response.json();
      const date = new Date(time.datetime);
      dt.innerHTML = date.toLocaleString();
      const giventime = date.getHours();
      if (giventime < 12) {
        document.body.style.backgroundColor = "#F9C784";
      } else {
        document.body.style.backgroundColor = "#1F487E";
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  //button to call the function
  btn.addEventListener("click", () => {
    counterTime();
    setInterval(counterTime, 1000);
  });
  

  