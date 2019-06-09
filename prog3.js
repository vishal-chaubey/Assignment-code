function generateTerms (callback) {

    // your code here that calls the supplied callback with a random numer every second
    var term = 1000;
    callback(term);
   
  
  }
 
  function callback(term) {
  
  // your code here that prints the term
  var count = 0;
  setInterval(()=>{
    var num = Math.floor(Math.random()*term) + 1;
    count++;
    console.log(`Number = ${num}, Count = ${count}`);

    },1000);
   
  
  }
  
  generateTerms(callback)