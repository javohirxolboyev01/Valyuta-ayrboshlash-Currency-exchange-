const input = document.querySelector("input");
const span = document.querySelectorAll("span");
const button = document.querySelector("button");

let sum = 0;
button.addEventListener('click',(event) =>{
    sum = +input.value * 12800;
     span[2].innerText = `${sum} so'm`;
     console.log(sum);

});

// const input = document.querySelectorAll("input");
// const button = document.querySelector("button");


// var boy1 = [
//     {names:'Javohir', surname : 'Xolboyev', age : 20},
//     {names:'Muslima ', surname : 'Xolboyeva', age : 18},
//     {names:'Muhammad Fotih', surname : 'Ziyodullayev', age : 2},
// ];

// function Ism(){
//     setTimeout(() => {
//         var users = '';
//         boy1.map((qiymat)=>{
//             users  += `<h3>${qiymat.names} ${qiymat.surname} ${qiymat.age}</h3>`;
//         });
//         const div = document.createElement('div');
//         div.innerHTML = users;
//         document.body.append(div)
//     },  2000);
// }
// Ism();


// asyncfunction getUser(Ism){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             boy1.push(Ism);

//             const member = x =0;
//             if(x=0){
//                 resolve();
//             }else{
//                 reject('Bu yerda xato');
//             }
//         }, 3000)
//     });
// }
// await getUser({names :'Durdona', surname : 'Xolboyeva', age: 16})
// .then(Ism)
// // .catch(()=>{console.log('error funcsiya');});


// let a = [1, 4, 15, 7, 2];
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//     sum += a[i];
// }
// console.log(sum);


// const input = document.querySelectorAll("input");
// const button = document.querySelector("button");


// var user = [
//    // {color : 'red', model : 'Mercedes Bens', speed : '300km/s'},
//     {color : 'blue', model : 'BMW', speed : '500km/s'},
//     {color : 'black', model : 'Chevrolet', speed : '200km/s'},
//     {color : 'white', model : 'Hyundai', speed : '400km/s'},
// ];
// function getCar(){
//     setTimeout(()=>{
  
//         let car = '';
//         user.map((soni)=>{
    
//             car += `<p> ${soni.color} ${soni.model} ${soni.speed}</p>`
//         });
//         document.body.innerHTML=car;

//     }, 2000)
// }
// getCar();


// function monster(){

//     //return new Promise(( resolve, reject)=>{

//         setTimeout(()=>{

//             user.pop(getCar);
//            // const x = true;
//            // if(javob){
//              //   resolve();
//           //  }else{
//           //      reject('This is fuction Error fanction!!')
//            // }
//         }, 2000);
//     //});
//     }


// monster({color : 'green', model : ' Honda', speed: '120km/s'});
// //.then(getCar)
// //.catch('Add Error fanction ');


// 



    // w3school -> JS canvas


// const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");
// ctx.fillStyle = "#FF0000";
// canvas.height = canvas.width;
// ctx.transform(1, 0, 0, -1, 0, canvas.height)

// let xMax = canvas.height;
// let slope = 1.2;
// let intercept = 70;

// ctx.moveTo(0, intercept);
// ctx.lineTo(xMax, f(xMax));
// ctx.strokeStyle = "black";
// ctx.stroke();

// function f(x) {
//   return x * slope + intercept;
// }



  // console.log('started...');
  // new Promise((reject ,resolve)=>{
  //   reject('welcome to facebook');
  // }).then((value)=>console.log(value));
  // console.log('finished...');