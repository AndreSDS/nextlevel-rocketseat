window.addEventListener("DOMContentLoaded", (event) => {
    
    const buttonSearch = document.querySelector('#page-home main a');
    const modal = document.querySelector('#modal');
    const buttonCLose = document.querySelector('#modal .container header a');

    buttonSearch.addEventListener('click', ()=>{
        modal.classList.remove('hide');
    })

    buttonCLose.addEventListener('click', ()=>{
        modal.classList.add('hide');
    })

});