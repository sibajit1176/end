let age:number=20;
var uname:String="Sibajit";


function getItem(){
   
    // app?.appendChild(p);
    let data=document.createElement("li");
    let res=`Name: ${uname} , Age: ${age}`;
    data.innerHTML=res;
    p.appendChild(data);
console.log(`Name: ${uname} , Age: ${age}`);
}
const p=document.createElement('div');
document.getElementById("data")?.appendChild(p);
    
async function userData() {
    const data= await fetch("https://jsonplaceholder.typicode.com/users")
     const result=await data.json(); 
     result.forEach((item:any) => {
         
        let result=document.createElement("div")
        let data:any=`Name: ${item.name} , Number: ${item.phone}`;
         result.innerHTML=data;
         console.log(data);
         p.appendChild(result);
     }); 
    console.log(result);   
}
let arr=[]
async function userImage() {
    const data=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=89a30e34da6ee507e76e34124f4f2e77&language=en-US&page=1");
    let res=await data.json();
     arr=await res.results
    for(let item of arr){
         let data=item.thumbnailUrl;
         let img=document.createElement("img");
         img.src=`https://image.tmdb.org/t/p/original${item && item.backdrop_path}`;
         console.log(data);
         p.appendChild(img);
    }

    console.log(arr);
    
}

