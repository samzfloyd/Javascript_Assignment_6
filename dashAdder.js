function computeDash(num){
    let num1=String(num);
    let arr = [];
    let k=1;
    for(let i=0;i<num1.length;i++){
        if(num1[i]%2==0 && num1[k]%2==0){
            arr.push(num1[i]+"-");
            
        }else if(num1[i]=="undefined"){
            arr.push(num[i]+"-")
        }
        else{
            arr.push(num1[i]);    
        }k++
        
    }
    let test = arr.toString()
    
    console.log(test.replace(/,/g,""));
}

computeDash(204681)
