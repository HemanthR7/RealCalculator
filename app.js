var inputdata = document.getElementById("input")

function targetInput(x){
    inputdata.value=inputdata.value+x
}

function calculator(){
    const data=document.getElementById("input").value
    try{
        let result = eval(data)
        inputdata.value=result 
        if(inputdata.value=='undefined'){
            inputdata.value='Enter Input'
            inputdata.style.color='crimson'
            setTimeout(()=>{
                inputdata.value=''
            },1000)
        }
        else{
            inputdata.value=result
        }
    }
    catch{
        inputdata.value='Enter Proper Expression'
        setTimeout(()=>{
            inputdata.value=''
        },1000)
    }

}

function allclear(){
    inputdata.value=''
}

function remove(){
    inputdata.value=inputdata.value.slice(0,-1)
}