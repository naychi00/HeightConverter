function forCm(){
    let ft = Number(document.querySelector('#input').value);
   //  console.log(typeof ft);
   let cm = ft * 30.48;
   // console.log(cm);
   document.querySelector('#result').innerText = cm.toFixed(2) + " cm";
   document.querySelector('#input').value = "";
   document.querySelector('#input').focus();

   }

   function forFt(){
       let cm = Number(document.getElementById('input').value);
       // console.log(cm);
       let ft = cm / 30.48;
       // console.log(ft)
       document.getElementById('result').innerHTML = ft.toFixed(2) + "ft";
       document.getElementById('input').value = "";
       document.getElementById('input').focus();
   }