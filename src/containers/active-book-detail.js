import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveBookDetail extends Component {
    render () {
        if(!this.props.activeBook){
            return <div>Select a book to get started!!</div>
        }
        return (
            <div> 
                <h3> Details for : </h3>
                <div>{this.props.activeBook.title}</div>
                <h5> Pages : {this.props.activeBook.pages}</h5>
            </div>
        );
    }
}

function mapStateToProps(state){
    // Whatever is returned will show up in props of BookList
    return {
        activeBook : state.activeBook
    }
}

export default connect(mapStateToProps)(ActiveBookDetail);