de = "# ";
ed = " #";
let result = "";
let result2 = "";
let final = "";

function test(x,y){
    for (let i=0; i<x; i+=2){
        result = result + de;
        result2 = result2 + ed;
    }
    for (let j=0; j<y; j+=2){
        final = final +"\n"+ result +"\n"+ result2;
    }
    console.log(final);

};

test(6,4);


