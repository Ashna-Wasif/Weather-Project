//  let city= document.getElementById('input');
//  let button= document.getElementsById('btn');
//  let temp= document.querySelector('.temp');
//  let desc = document.querySelector('.description');
// // console.log(document.querySelector(city).innerHTML);
// button.addEventListener('click', () => {
//   const inputtext=city.value;
//   console.log(inputtext);
// });

// fetch(`http://api.weatherapi.com/v1/current.json?key=867d50ef65c34f0d853123930242607&q=${inputtext}`)     
// .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
let temp = document.querySelector('.temp');
let desc = document.querySelector('.description');
let image = document.getElementById('image');
let city = document.getElementById('input');
let button = document.getElementById('btn');
let inputtext;

document.addEventListener('DOMContentLoaded', () => {
  button.addEventListener('click', () => {
      inputtext = city.value;
      if(inputtext){
      console.log(inputtext);
     //fetching(inputtext);
      //ftn call up 
  let url=`http://api.weatherapi.com/v1/current.json?key=867d50ef65c34f0d853123930242607&q=${inputtext}`;

  fetch(url)     
  // .then(response => response.json())
  .then(response => {
    if (!response.ok) {
      throw new error;
      //('City not found',error);
    }
    return response.json();
  })
    .then(data => {console.log(data)
     
      temp.innerText=data.current.temp_c;
      desc.innerText=data.current.condition.text;
       const img=`https://cdn.weatherapi.com/weather/64x64/day/176.png`;
      image.src=img;
      console.log(image)
      image.style.display = 'block';
      
    })
     .catch(error => console.error(error));
  }
else
alert('Enter valid City')});
});
//Use async await
 async function fetching(inputtext){
  
  try{
  let url=`http://api.weatherapi.com/v1/current.json?key=867d50ef65c34f0d853123930242607&q=${inputtext}`;

   let response= await fetch(url);     
  
    let data = await response.json();
    if(!response.ok)
    {
      alert("Response is not OK")
      throw new error("City Not here In API");}
    //let data = console.log("hereitis"+json)
      temp.innerText=data.current.temp_c;
      desc.innerText=data.current.condition.text;
      // const img=`https:${data.current.condition.icon}`;
      // image.src=img;
      // img.style.display = 'block';
    }
    catch(e){
       alert ("City not found" +e);
}
 }