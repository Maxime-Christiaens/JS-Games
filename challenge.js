d = "#";
e = " ";
de = "# ";
ed = " #";
let result = "";
let result2 = "";
let final = "";

function test(x,y){
    for (let i=0; i<x; i++){
        result = result + de;
        result2 = result2 + ed;
    }
    //console.log(result); 
    //console.log(result2); 
    for (let j=0; j<y; j+=2){
        final = final +"\n"+ result +"\n"+ result2;
    }
    console.log(final);

};

test(8,8);


