const buttons=document.querySelectorAll('.button');
let pinNumber = "";
var randomValue= 0;
var counter=3;

document.querySelector('.generate-btn').addEventListener('click', ()=>{

    randomValue =( Math.floor(1000 + Math.random()*9000)).toString();
    document.querySelector('.form-control').value=randomValue;
    submitCounter(3);

})

for(var i=0; i<buttons.length ; i++)
{
   const button=buttons[i];
    button.addEventListener('click', ()=>{
    
        var buttonValue=button.innerHTML;
            
        if(button.innerHTML == 'C')
        {
            pinNumber= "";
            document.querySelector('.input-section input').value = pinNumber; 
            return;

        }
        if(buttonValue.match(/&lt;/gi)){
            
            pinNumber=pinNumber.substring(0, pinNumber.length-1);
            document.querySelector('.input-section input').value = pinNumber; 
            return;   
        }
       
        pinNumber= pinNumber + button.innerHTML;
        document.querySelector('.input-section input').value = pinNumber;

    });
}

document.querySelector('.submit-btn').addEventListener('click', ()=>{

    if(randomValue == 0)
    {
        alert("please generate pin number");
    }
    else
    {
        counter--;
        submitCounter(counter);

        if(pinNumber === "")
        {
            alert("please enter pin number");
            return;
        }
    
        if(randomValue === pinNumber ){
            
            document.getElementById('pin-match').style.display="block";
            document.getElementById('pin-not-match').style.display="none";
            return;
        }
        if(randomValue != pinNumber){
            document.getElementById('pin-not-match').style.display="block";
            document.getElementById('pin-match').style.display="none";
            return;
        }

    }
});

function submitCounter(number)
{
    let count = number ;
    document.getElementById("try").innerHTML=count;
    if(count != 0){
        document.querySelector('.submit-btn').style.display = "block";
    }
    else{
        document.querySelector('.submit-btn').style.display = "none";
    }
}