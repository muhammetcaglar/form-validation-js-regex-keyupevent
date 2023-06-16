const form=document.querySelector('.signupForm');
const message=document.querySelector('.message');



form.addEventListener('submit',e =>{
    e.preventDefault();
    const pattern=/^[a-zA-Z]{6,10}$/;
    const username=form.username.value;
    if(pattern.test(username)){
        message.textContent='Format Doğru';
        form.setAttribute('style','border:3px solid green');
    }
    else{
        message.textContent='Format yanlış, sadece harf giriniz ve 6-10 karakter arasında olsun.';
        form.setAttribute('style','border:3px solid red');
    }
    //sayfanın refresh olmamasını sağlar
    // console.log('form gönderildi');
    // console.log(username.value);
   

})