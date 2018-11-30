import React, { Component } from "react";
import { connect } from "react-redux";
import { combineReducers } from 'redux'

// Presentational Component
class test extends Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <span onClick={this.props.onAdd}>Add</span>
        <span onClick={this.props.onClear}>clear</span>
      </div>
    )
  }
}

// action
const createClearAction = () => {
  return {
    type: "clear"
  }
}
const createAddAction = () => {
  return {
    type: "add"
  }
}

// reducer
const number = (state = 0, action) => {
  switch (action.type) {
    case "add": 
      return state+1;

    case "clear":
      return 0;
    
      default:
        return state;
  }
}

export const reducer = combineReducers({
  number
})

// Container
const mapStateToProps = state => {
  return {
    number: state.number
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClear: () => dispatch(createClearAction()),
    onAdd: () => dispatch(createAddAction())
  }
}

const Test = connect(mapStateToProps, mapDispatchToProps)(test)

export default Test