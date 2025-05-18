let form=document.querySelector('form')
let main=document.querySelector("main")
let inputs=document.getElementsByTagName("input")
let id=inputs[0]
let name1=inputs[1]
let email=inputs[2]
let salary=inputs[3]
let rollNo=inputs[4]
let tableMonitor=document.querySelectorAll("table")[0]
console.log(tableMonitor);

let table=document.querySelectorAll("table")[1]
let tbody=document.createElement("tbody")
table.append(tbody)
//  ("click" parent event for all the elements in the toDoList )
main.addEventListener("click",(e)=>{
    e.preventDefault()
    // reusable funciton to remove the inputs backgound color as if no innertext exists
    function emptyColor(){
        id.style.backgroundColor="white"
        name1.style.backgroundColor="white"
        email.style.backgroundColor="white"
        salary.style.backgroundColor="white"
        rollNo.style.backgroundColor="white"
    }
    // reusable funciton to empty the inputs values
    function emptyInputs(){
        id.value=""
        name1.value=""
        email.value=""
        salary.value=""
        rollNo.value=""
    }
    //reusable function when we programitaclly passes the values (not by manual)
    //at that time "input" event trigges 
     function updateInputStyle(inputElement,inputValue){
        if(inputValue==""){
            inputElement.style.backgroundColor="black"
            inputElement.style.color="white" 
        }
        else{
            inputElement.style.backgroundColor="white"
            inputElement.style.color="black"
        }
     }
        //adding start
    if(e.target.innerText=="ADD"){
         if( id.value==""||name1.value==""||email.value==""||salary.value==""||rollNo.value=="")
             window.alert("kindly fillup all the details!")
            else if(!email.value.includes("@")){
                window.alert("kindly enter proper email address")
                return
            }
            else{
                let tr=document.createElement("tr")
                tbody.append(tr)
                tr.innerHTML+=`<td>${id.value}</td>
                              <td>${name1.value}</td>
                              <td>${email.value}</td>
                              <td>${salary.value}</td>
                              <td>${rollNo.value}</td>
                       <td><button>EDIT</button></td>
                       <td><button>DELETE</button></td>`
                emptyInputs()
        }
    }
    //adding ends
    //reset starts
    else if(e.target.innerHTML=="RESET"){
        if( id.value!=""||name1.value!=""||email.value!=""||salary.value!=""|| rollNo.value!=""){
        emptyInputs()
        emptyColor();
        }
        else
        window.alert("There is nothing to reset 🤷‍♂️")
    }
    //reset ends
    //edit and update starts
    else if(e.target.innerHTML=="EDIT"){
           e.target.innerHTML="UPDATE"
           // travesing DOM  and passing the input values to the inputs so that user can update them
           let currentTd=e.target.parentElement
           rollNo.value=currentTd.previousElementSibling.innerHTML
           salary.value=currentTd.previousElementSibling.previousElementSibling.innerHTML
           email.value=currentTd.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
           name1.value=currentTd.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML          
           id.value=currentTd.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
           // calling the updateInputStyle as "input" event handle this (programically passing values)
           updateInputStyle(id,id.value)
           updateInputStyle(name1,name1.value)
           updateInputStyle(email,email.value)
           updateInputStyle(salary,salary.value)
           updateInputStyle(rollNo,rollNo.value)
        }

        else if(e.target.innerHTML=="UPDATE"){
           e.target.innerHTML="EDIT"
            if(!email.value.includes("@")){
            window.alert("email is invalid")
            return
           }
           else {
           let currentTd=e.target.parentElement
           currentTd.previousElementSibling.innerText=rollNo.value
           currentTd.previousElementSibling.previousElementSibling.innerHTML=salary.value
           currentTd.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML=email.value
           currentTd.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML=name1.value
           currentTd.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML=id.value
           emptyInputs();
           }
        }
    // edit & update ends
        else if(e.target.innerHTML=="DELETE"){
                e.target.parentElement.parentElement.remove()
        }
}) // entire main "clikc" event ends



