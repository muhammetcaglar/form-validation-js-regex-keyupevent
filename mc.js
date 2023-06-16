const form=document.querySelector('.signupForm');
const message=document.querySelector('.message');
const pattern=/^[a-zA-Z]{6,10}$/;


form.addEventListener('submit',e =>{
    e.preventDefault();
    
    const username=form.username.value;
    if(pattern.test(username)){
        message.textContent='Format Doğru';
        
    }
    else{
        message.textContent='Format yanlış, sadece harf giriniz ve 6-10 karakter arasında olsun.';
    
    }
    //sayfanın refresh olmamasını sağlar
    // console.log('form gönderildi');
    // console.log(username.value);

})

form.username.addEventListener('keyup',e=>{
    if(pattern.test(e.target.value)){
      form.username.setAttribute('class','success');
    }
    else{
        form.username.setAttribute('class','error');
    }
})
