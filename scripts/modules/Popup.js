class Popup{
    constructor(props) {
        this.element = props.element;
        this.class = 'popup_is-opened';
    }
    open() {
        this.element.classList.add(`${this.class}`);
    }
    close() {
        this.element.classList.remove(`${this.class}`);
    }
}