import React , { Component} from 'react';
import { connect } from 'react-redux';
import selectBook from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList(){
        return this.props.booklist.map((book) => {
            return (
            <li key={book.title} 
             onClick={() => this.props.selectBook(book)} 
             className="list-group-item">
                {book.title}
            </li>
            )
        })
    }

    render() {
        // console.log(this.props.booklist) // =>123
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    // Whatever is returned will show up in props of BookList
    return {
        booklist : state.booklist
    }
}

//anything that is returned from this function will end up as props on BookList Container
function mapDispatchToProps(dispatch){
    //whenever selectBook is called, the result should be passed to all reducers
    return bindActionCreators({ selectBook : selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);