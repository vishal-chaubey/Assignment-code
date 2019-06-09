function generateTerms (callback) {

    // your code here that calls the supplied callback with a random numer every second
    var term = 1000;
    callback(term);
   
  
  }
 
  function callback(term) {
  
  // your code here that prints the term
  var count = 0;
  var arr = [];
  setInterval(()=>{
    var num = Math.floor(Math.random()*term) + 1;
    arr.push(num);
    const sum = arr.reduce((total,value)=> total + value, 0);
    //console.log(arr);
    //console.log(sum);
    count++;
    var avg = sum / count;
   console.log(`Number = ${num}, Count = ${count},sum = ${sum}, avg = ${avg} `);

    },1000);
   
  
  }
  
  generateTerms(callback)