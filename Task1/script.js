var sum=0;
do{
    var x=prompt("enter your value");
    // }while(isNaN(x));

//     do{
//         x= Number(x);
//         console.log(typeof(x));
//         console.log(x);
//         sum = sum+x;
    if (isNaN(x)||x==""){
        x=1;
    }
    else{
        x= Number(x);
        console.log(typeof(x));
        console.log(x);
        sum = sum+x;
    }
}
while(x>0 && sum<100);
console.log(sum);
document.write("<h1>"+sum+"</h1>")

