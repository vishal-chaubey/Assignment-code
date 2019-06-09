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
    /*standard deviation = sqrt((arr[i]-avg)^2/(count - 1))*/
    var diff = arr.map(a =>{
        var diff = a - avg;
        var sqr = diff * diff;
      return sqr;
    });
    var diffSqureSum = diff.reduce((total, start) => total + start, 0);  
    //console.log(diffSqureSum);   
    var diffSqureAvg = diffSqureSum / diff.length;
    //console.log(diffSqureAvg);
    var stdDev = Math.sqrt(diffSqureAvg);
    //console.log(stdDev);
   console.log(`Number = ${num}, Count = ${count},sum = ${sum}, avg = ${avg}, stdDev = ${stdDev} `);

    },1000);
   
  
  }
  
  generateTerms(callback)