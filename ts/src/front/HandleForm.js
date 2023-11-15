function handleForm() {
    const getByIdForm = document.getElementById('cool-form')
    const documentForm = document.forms[0]

    documentForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const name = documentForm.elements['name']?.value
        checkName({})
        const email = documentForm.elements['email']?.value
        console.log('stuff')
    })
}

handleForm()

/**
 * @param {string} name the name
 */
function checkName(name) {
    if (typeof name === 'string' && name.length > 3) {
        console.log('Valid name')
    } else {
        throw new Error(`Invalid name: ${name}`)
    }
}
