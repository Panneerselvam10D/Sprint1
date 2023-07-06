function calculate(){

    let nuOfWordsArr = document.getElementById("textArea").value.trim().split(' ')
    
    let noOfWords = nuOfWordsArr.length
    let result = document.getElementById("result")
    result.innerHTML = noOfWords
}

function ebBillCalculate(unit){
    let sum=0;
                if(unit<=50){
                    sum=unit*0.75
                }
                else if(unit>50 && unit<=150){
                    sum=(50*0.75)+(unit-50)*1
                   
                }
                else if(unit>150 && unit<=250){
                    sum=(50*0.75)+(100*1)+(unit-150)*1.30
                }
                console.log(sum);
}
ebBillCalculate(75)