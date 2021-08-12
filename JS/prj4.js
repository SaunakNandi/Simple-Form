$('#success').hide();
$('#failure').hide();
const x=document.getElementById('name')  // Grabbing id=name
const email=document.getElementById('email')
const phone=document.getElementById('phone')
let validEmail=false;
let validUser=false;
let validPhone=false;
x.addEventListener('blur',()=>{
    // validate name here
    console.log("blurred");
    // name should start form a-z/A-Z
    let regex=/^([a-zA-Z])([0-9a-zA-Z ]){3,20}$/;    // {4,20} -mean the length of the name should be from 4 to 20, $ means the name can contain at most 20 inputs
    let str=x.value;
    console.log(regex,str)
    if(regex.test(str))
    {
        validUser=true;
        console.log("matched");
        x.classList.remove('is-invalid')  // Removes 'is-invalid' from the class="form-control"
    }
    else
    {
        console.log(x.classList);   //The className property returns the name of the classes in the form of a string, whereas the classList property of JavaScript returns the name of the classes in the form of an array.
        x.classList.add('is-invalid')  // is-invalid get added to class="form-control"
    }
})

email.addEventListener('blur',()=>{
    console.log();
    // validate name here
    let regex=/^([_\-\.0-9a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]){2,7}$/;    // {4,20} -mean the length of the name should be from 4 to 20, $ means the name can contain at most 20 inputs
    let str=email.value;
    console.log(regex,str)
    if(regex.test(str))
    {
        validEmail=true;
        console.log("matched");
        email.classList.remove('is-invalid')  // Removes 'is-invalid' from the class="form-control"
    }
    else
    {
        console.log(email.classList);   //The className property returns the name of the classes in the form of a string, whereas the classList property of JavaScript returns the name of the classes in the form of an array.
        email.classList.add('is-invalid')  // is-invalid get added to class="form-control"
    }
})

phone.addEventListener('blur',()=>{
    console.log();
    // validate name here
    let regex=/^([0-9]){10}$/;    // {4,20} -mean the length of the name should be from 4 to 20, $ means the name can contain at most 20 inputs
    let str=phone.value;
    console.log(regex,str)
    if(regex.test(str))
    {
        validPhone=true;
        console.log("matched");
        phone.classList.remove('is-invalid')  // Removes 'is-invalid' from the class="form-control"
    }
    else
    {
        console.log(phone.classList);   //The className property returns the name of the classes in the form of a string, whereas the classList property of JavaScript returns the name of the classes in the form of an array.
        phone.classList.add('is-invalid')  // is-invalid get added to class="form-control"
    }
})


let sub=document.getElementById('submit');

// addEventListener doesn't go with getElementsByClassName.
sub.addEventListener('click',(e)=>{ 
    console.log("clicked");
    e.preventDefault();    //prevent the auto relod of success message
    /*let success=document.getElementById('success');
    success.classList.add('show');*/
    if(validEmail && validPhone && validUser)
    {
        //let success=document.getElementById('success');
        success.classList.add('show');
        $('#failure').hide();    /// Using a little bit jQerry 
        // here we grab the failure id and then hide it 
        $('#success').show();
    }
    else
    {
        success.classList.remove('show');
        failure.classList.add('show')
        $('#success').hide();       // here we grab the success id and then hide it so that failure div can't come below success div
        $('#failure').show();
    }   
})