(function() {
    const fields =  document.querySelectorAll('input');
    const inputButton = document.getElementById('input-button');

    function isFieldEmpty(fieldToCheck) {
        return Boolean(!fieldToCheck.value);
    }

    function isEmailValid(email) {
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
        return emailRegex.test(email);
    }

    function displayErrorMessage(field) {
        const errorPara = field.nextElementSibling;
        errorPara.classList.add('display-error-message');
    }
    function removeErrorMessage(field) {
        const errorPara = field.nextElementSibling;
        errorPara.classList.remove('display-error-message');
    }

    function displayErrorIcon(field) {
        const parent = field.parentElement;
        const errorIcon = parent.lastElementChild;
        errorIcon.classList.add('display-error-icon')
    }

    function removeErrorIcon(field) {
        const parent = field.parentElement;
        const errorIcon = parent.lastElementChild;
        errorIcon.classList.remove('display-error-icon')
    }

    function displayErrors(field) {
        field.classList.add('display-error-border');
        displayErrorIcon(field);
        displayErrorMessage(field);
    }
    function removeErrors(field) {
        field.classList.remove('display-error-border');
        removeErrorIcon(field);
        removeErrorMessage(field);
    }

    function checkFields() {
        fields.forEach(field => {
            if(isFieldEmpty(field)) {
                displayErrors(field);
            }
            else removeErrors(field);
            if(field.id === 'email') {
                if(!isEmailValid(field.value)) {
                    displayErrors(field);
                    
                }
                else {
                    removeErrors(field);
                }
            }
        })
    }
    inputButton.addEventListener('click', checkFields);
}) ()