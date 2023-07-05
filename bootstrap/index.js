
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
