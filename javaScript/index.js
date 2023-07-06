
let namee ="10decoders";
namee ="hklnfi"
console.log(namee);


function ageCheck(age){
  let ans = age >18 ? "pass" : "fail"
  console.log(ans);
}
function timeCheck(time){
    let res = undefined;
    if(time >= 1 && time <13){
            res = "Good morning";
    }
    else if(time >=13 && time < 17){
        res ="Good Afternoon";
    }
    else {
        res = "good evng";
    }
    console.log(res);
}


ageCheck(19);
timeCheck(13);

    const employee ={
        react:'PannerNode',
        java : 'noname',
        dot_net : 'karthick'

    };

    let colors =['blue','red','yellow'];

for(let key in colors){
    console.log(key);
}
for(let key of colors){
    console.log(key);
}


for(let key in employee){
    console.log(key);
}
for(let key of Object.employee){
    console.log(employee.key);
}


//string methods
let name = "panneer selvam";
console.log(name.slice(2,5));
console.log(name.slice(-6));
console.log(name.substr(-6,4));
console.log(name.length);

 

let cost = "Rs.10";
console.log(cost.padEnd(9,"0"));
console.log(cost.padStart(9,"0"));

let arr = [5,8,10,7,9,11];

console.log(arr.splice(3,3,17,19,111))
console.log(arr);
console.log(arr.unshift(100));
console.log(arr);
console.log(arr.splice(0,0,1000));
console.log(arr);
console.log(arr.splice(arr.length/2,0,0));
console.log(arr);

