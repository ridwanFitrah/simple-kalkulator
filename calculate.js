//masukkan semua elemnt//
const display= document.querySelector('.display');
const button= document.querySelectorAll('[data-value]');



//buat funtion
function calculate(btnvalue){
    display.focus();
    if(btnvalue==="AC"){
       display.value="0";
        
    }
    else if(display.value==="0"){
        display.value= btnvalue;
    }
    else if(btnvalue==="DEL"){
        display.value=display.value.slice(0,-1);
    }
    else if(btnvalue==="%"){
       display.value=eval(display.value/100);
        
    }
    else if(btnvalue==="="){
        //.eval bisa digunakan untuk menjalankan dari sebuah kode//
        try{
        display.value= eval(display.value);
        }
        catch{
            alert('masukkan angka yang benar!!');
        }
    }
    else{
        display.value+=btnvalue;  
    }

    };
button.forEach(e=>{
    e.addEventListener('click',(el)=> {
        
        calculate(el.target.dataset.value);

        // calculate(el.target.dataset.value);
    });
});
