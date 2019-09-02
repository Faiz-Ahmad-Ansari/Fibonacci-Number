var para = document.getElementById("para");
    function fib() {
        var input = document.getElementById("myInput").value;
        var fibArray = [0,1];
        for(i=2; i<= input;i++){
            fibArray.push(fibArray[i-2]+fibArray[i-1]);
            console.log(fibArray);
            }
        document.getElementById("para").innerHTML= fibArray;
        console.log(fibArray);
        }