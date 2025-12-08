function checkName(name){
    if (name == null) {
        return false;
    }
    else if (name.length<= 1)
    {
        return false;
    }
    else if(!(/^[A-Za-z\- ]+$/.test(name)))
    {
        return false;
    }
    else {
        return true;
    }
}

function checkNumber(number){
    number=Number(number);
    if(number>=0 && number<=100) {
        return true;
    }
    else{
        return false;
    }

}

function classColor(number){
    number = Number(number);
    if(number<50)
    {
        return "red";
    }
    else{
        return "green";
    }

}

const submitBtn= document.getElementById("submitBtn");
submitBtn.addEventListener("click", function(){
    const name= document.getElementById("studentName");
        let nameValue= name.value.trim();   
        console.log(nameValue);
    const number= document.getElementById("studentNumber");
          let  numberValue=number.value;
          console.log(numberValue);
    const body= document.getElementById("value");
    if(checkName(nameValue) && checkNumber(numberValue)) {
        let Color=classColor(numberValue);
        const htmlAdd= `<tr class="${Color}"}>
            <td>${nameValue}</td>
            <td>${numberValue}</td>      
               </tr>`
        body.insertAdjacentHTML("beforebegin",htmlAdd);
    }
    name.value="";
    number.value="";
    
})