class CardList{
    constructor(props){
        this.link = props.link;
        this.name = props.name;
        this._id = props._id;
        this.ownerId = props.ownerId;
        this.delIcon = props.delIcon;
        this.likes = props.likes;
        this.liked = props.liked;
    }
    
    addCard () {
        container.insertAdjacentHTML('beforeend', obj.createCards(
            this.link, 
            this.name, 
            this._id, 
            this.ownerId,
            this.delIcon,
            this.likes,
            this.liked,
        ));
    }
}
