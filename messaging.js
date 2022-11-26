let btn=document.querySelector('button');
let ui=document.querySelector('.body');

let massage=document.querySelector('#inmassage');

btn.addEventListener('click', () => {

    let input=massage.value;
    if(input!='')
    {let template=`
    <p class="massage user_massage">${input}</p>
    `;
    ui.innerHTML += template;
    }
    else
    return;
})