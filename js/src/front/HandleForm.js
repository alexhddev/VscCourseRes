function handleForm(){
    const getByIdForm = document.getElementById('cool-form');
    const documentForm = document.forms[0];

    documentForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        const name = documentForm.elements['name']?.value;
        const email = documentForm.elements['email']?.value;
        console.log('stuff')
    })
}

handleForm();