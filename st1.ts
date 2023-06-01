
// var selectElement = document.getElementById("mySelect")as HTMLSelectElement;
// selectElement.addEventListener('change', handleSelectChange);
// let json:any=[{"day1":"rech destination"},{"day2":"City tour"},{"day2":"breakfast"},{"day3":"visit"},{"day4":"back"}]
// function handleSelectChange(){
//     const req = (event.target as HTMLSelectElement).value;
//     console.log(typeof req);
    
//     const arr=json.filter((item:any)=>{
//         console.log(typeof item.req);
//             console.log(item);
//       return item==req
//     })
//     console.log(arr);
    
// }

let selectEle=document.getElementById("mySelect") as HTMLInputElement;
let mainDiv=document.getElementById("mainDiv") as HTMLInputElement;

let json:any=[{"day1":"rech destination"},{"day2":"City tour"},{"day2":"breakfast"},{"day3":"visit"},{"day4":"back"}]

selectEle.addEventListener("change",(e)=>{
    e.preventDefault();
    mainDiv.innerHTML="";
    showContent(selectEle.value);
})

function showContent(key:string){
    json.forEach(item=>{
        if(Object.keys(item)[0] == key){
            let card=getCard(item[key]);
            mainDiv.appendChild(card);
        }
    })
}

function getCard(content:string){
    let card=document.createElement("div");
    card.innerHTML=content;
    return card;
}

function createOption(){
    let arr:string[]=[];
    json.forEach(element => {
        if(arr.indexOf(Object.keys(element)[0]) == -1){
            let option=getOption(Object.keys(element)[0]);
            selectEle.appendChild(option);
            arr.push(Object.keys(element)[0]);
        }
    });
}

function getOption(key:string){
    let option=document.createElement("option");
    option.value=key;
    option.innerHTML=key;
    return option;
}
createOption()
    
  

