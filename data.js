
let total=0;
const getData = async (day) => {
  const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${day}&api_key=DEMO_KEY`)
const data = await response.json()

 total = data.photos.length;
console.log(total)
let cont = document.getElementById("cont");
cont.innerHTML=""
// document.getElementById('loader').style.display='none'
for (let i = 0; i < 12; i++) {
  console.log(data.photos[i].img_src);
  let ele = ` <div class="card" style="width: 18rem;">
  <div class="photowali2" style="background-image: url('${data.photos[i].img_src}');"></div>
  
</div>
`;
  cont.innerHTML = cont.innerHTML + ele;

  if(total<12){
    document.getElementById('prevnext').innerHTML=` <button onclick="datapaun(this.id)" class="btn btn-primary m-2" id="${-1}" disabled>Prev</button>
    <button onclick="datapaun(this.id)" class="btn btn-primary m-2" id="${0}" disabled>Next</button>`
  }
}
return data;

}
let dat;
const myf=async (day)=>{
  dat=await getData(day);
}
// myf(1000)
console.log(dat)

