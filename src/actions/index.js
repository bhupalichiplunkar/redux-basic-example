export default function selectBook (book) {
    //this is an action creator, it needs to return an action( an object with type property)
    return {
        type : 'BOOK_SELECTED',
        payload : book
    }
}