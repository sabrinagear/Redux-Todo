import React from "react";
import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../actions";

const Todo = props => {
  return (
    <li
      key={Math.random()}
      onClick={() => props.toggleTodo(props.todo.id)}
      className={props.todo.completed ? "completed" : ""}
    >
      {props.todo.value}
      <button
        className={props.todo.completed ? "close" : "close"}
        onClick={() => props.deleteTodo(props.todo.id)}
      >
        Delete
      </button>
    </li>
  );
};
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
export default connect(
  mapStateToProps,
  { toggleTodo, deleteTodo }
)(Todo);
