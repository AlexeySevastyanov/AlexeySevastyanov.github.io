class Validation{
    constructor() {
        this.checkForm = this.checkForm.bind(this);
    }

    checkForm(event) {
        if (event.target.classList.contains('popup__input') || event.target.classList.contains('popup-user__input')) {
          this.checkInput(event);
          this.validForm(event);
        }
    }
    
    checkInput(event){
        
        if (!event.target.validity.valid) {
            this.emptyInput(event);
            this.checkLink(event);
            this.checkRange(event)
        } else {
            this.removeError(event)
        }
    }

    errMessage(event){
        if (event.target.classList.contains('popup__input_type_name')){
            return placeNameErr
        } else if (event.target.classList.contains('popup__input_type_link-url')){
            return placeLinkErr
        } else if (event.target.classList.contains('popup-user__input_type_name')){
            return userNameErr
        } else if (event.target.classList.contains('popup-user__input_type_link-url')){
            return userJobErr
        }
    }

    emptyInput(event){
        if (event.target.value.length === 0) {
            return this.errMessage(event).textContent = validMessage.empty;
        }
    }
    checkLink(event){
        if (event.target.getAttribute('type') === 'url') {
            return this.errMessage(event).textContent = validMessage.invalidLink;
        }
    }
    checkRange(event){
        if (event.target.getAttribute('type') === 'text') {
        if (event.target.value.length === 1 || event.target.value.length > 30) {
            return this.errMessage(event).textContent = validMessage.range;
          }
        }
    }
    
    removeError(event) {
        return this.errMessage(event).textContent = validMessage.correct
    }

    validForm(event){
    const [inputOne, inputTwo, button] = event.currentTarget.parentElement.elements;
    if (event.currentTarget.parentElement.getAttribute('class') === 'popup__form'){
    if (!inputOne.validity.valid || !inputTwo.validity.valid || inputOne.value.length === 0 || inputTwo.value.length === 0) {      
        addCard.classList.remove('button_black');
        button.setAttribute('disabled', 'disabled')
    } else {
        addCard.classList.add('button_black');
        button.removeAttribute('disabled')
        }
    } else if (event.currentTarget.parentElement.getAttribute('class') === 'popup-user__form'){
        if (!inputOne.validity.valid || !inputTwo.validity.valid || inputOne.value.length === 0 || inputTwo.value.length === 0) {      
            saveUser.classList.remove('button_black');
            button.setAttribute('disabled', 'disabled')
        } else {
            saveUser.classList.add('button_black');
            button.removeAttribute('disabled')
        }
    }
}
}

const validator = new Validation;
linkAdd.addEventListener('input', validator.checkForm);
nameAdd.addEventListener('input', validator.checkForm);
userNameEdit.addEventListener('input', validator.checkForm);
userJobEdit.addEventListener('input', validator.checkForm);