interface FormElements {
    name: HTMLInputElement,
    email: HTMLInputElement
}

function handleForm() {
    const getByIdForm = document.getElementById('cool-form')
    const documentForm = document.forms[0]

    documentForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const documentFormElements = documentForm.elements as unknown as FormElements
        const name = documentFormElements.name.value
        const email = documentFormElements.email.value
        console.log('stuff')
    })
}

handleForm()

function checkName(name: string) {
    if (typeof name === 'string' && name.length > 3) {
        console.log('Valid name')
    } else {
        throw new Error(`Invalid name: ${name}`)
    }
}
