import React, { Component } from "react";
import { getData, saveToDB, clearDB, dataKey } from "../util/utils";
import TaskInput from "./TaskInput";
import Task from "./Task";
import FilterButtons from "./FilterButtons";
import Pagination from "./Pagination";
class Content extends Component {
  constructor() {
    super();
    this.state.todos = getData(dataKey);
    this.state.todoStates = [
      {
        label: "عادي",
        colorClass: "",
      },
      {
        label: "عاجل",
        colorClass: "is-warning",
      },
      {
        label: "مهم",
        colorClass: "is-link",
      },
      {
        label: "حرج",
        colorClass: "is-danger",
      },
    ];

    this.state.activeTodoState = this.state.todoStates[0];
  }

  state = {
    todos: [],
    todoStates: [],
    filter: "all",
  };
  todoStatesClasses = {
    عادي: "",
    عاجل: "is-warning",
    مهم: "is-link",
    حرج: "is-danger",
  };
  setTodoState = (state) => {
    this.setState({ activeTodoState: state });
  };
  addTodo = (todo) => {
    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
  };
  toggleDone = (todo) => {
    const todos = [...this.state.todos];
    const index_ = this.state.todos.indexOf(todo);
    const done = todo.done ? !todo.done : true;
    todos[index_] = { ...todo, done };

    this.setState({ todos });
    //persist data
    saveToDB(todos, dataKey);
  };
  deleteAll = () => {
    this.setState({ todos: [] });
    //persist data
    clearDB();
  };
  deleteTodo = (todo) => {
    const todos = this.state.todos.filter((tdo) => {
      return tdo !== todo;
    });

    this.setState({ todos });
    //persist data
    saveToDB(todos, dataKey);
  };
  filterTodos = (filter) => {
    this.setState({ filter });
  };
  getFilteredTodos = () => {
    if (this.state.filter === "pending") {
      return this.state.todos.filter((tdo) => {
        return tdo.done === undefined || tdo.done === false;
      });
    } else if (this.state.filter === "done") {
      return this.state.todos.filter((tdo) => {
        return tdo.done && tdo.done === true;
      });
    } else {
      // "all
      return this.state.todos;
    }
  };
  render() {
    //console.log(">>", this.state.todos);
    const filteredTodos = this.getFilteredTodos();
    const { todos, filter } = this.state;
    return (
      <div className="container" dir="rtl">
        <br />
        <h1 className="title"> 😁 أدخل المهمة</h1>
        <TaskInput
          onSetState={this.setTodoState}
          todos={this.state.todos}
          activeTodoState={this.state.activeTodoState}
          todoStates={this.state.todoStates}
          onAddTodo={this.addTodo}
        />

        {/*<Pagination />*/}
        <FilterButtons
          todos={todos}
          onFilterTodos={this.filterTodos}
          onDeleteAll={this.deleteAll}
          filter={filter}
        ></FilterButtons>
        <hr />
        {filteredTodos.map((todo, idx) => (
          <Task
            key={idx}
            todo={todo}
            todoStatesClasses={this.todoStatesClasses}
            onToggleDone={this.toggleDone}
            onDelete={this.deleteTodo}
          />
        ))}
      </div>
    );
  }
}

export default Content;
