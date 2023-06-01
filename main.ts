let array:string[]=[]

function addnum(){
    const inputdata=document.getElementById("req")as HTMLInputElement;
    let data=inputdata.value
    array.push(data);
    inputdata.value="";
    console.log(array);
    alert(`succesfully insert ${data} `)
}

function popbut(){
    if(array.length != 0){
        let data=array[array.length-1];
        array.splice(array.length-1,1);
        alert(`delete ${data}`);
        console.log(array);
    }else{
        alert("stack is empty");
    }
}
// let node1=document.createElement("p");
// document.getElementById("peek")?.appendChild(node1);
let put=document.getElementById("peekData")as HTMLElement;

let count=document.getElementById("count")as HTMLElement;


function showdata(){
    if(array.length!=0){
        put.innerHTML=array[array.length-1];
    }else{
        alert("list empty");
    }
    console.log(array.length);
   count.innerHTML=`${array.length}`; 
   
}
