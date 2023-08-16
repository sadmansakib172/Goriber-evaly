document.getElementById('btn-submit').addEventListener('click', function(){
    const inputField = document.getElementById('text-area');
    const inputText = inputField.value ;
    
    const p = document.createElement('p');
    p.innerText = inputText;
    const container = document.getElementById('review');
    container.appendChild(p);

    inputField.value = '';
})