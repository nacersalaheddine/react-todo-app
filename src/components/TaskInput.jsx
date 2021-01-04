import React, { Component } from "react";
import { saveToDB, dataKey } from "../util/utils";
import DropDown from "./DropDown";
class TaskInput extends Component {
  titleInputClasses = "fa fa-circle-o";

  state = {
    todoTitle: "",
    todoContent: "",
    isDropdownVisible: false,
  };
  mainFontClass = " tajawal-font-class";
  render() {
    const { todoStates, activeTodoState } = this.props;

    const { todoTitle, todoContent, isDropdownVisible } = this.state;
    if (this.state.todoTitle.length > 2) {
      this.titleInputClasses = "fa fa-check";
    } else {
      this.titleInputClasses = "fa fa-circle-o";
    }
    return (
      <>
        <div className="field has-addons">
          <div className="control is-expanded has-icons-left has-icons-right ">
            <input
              className={
                "input is-large " +
                activeTodoState.colorClass +
                this.mainFontClass
              }
              type="text"
              placeholder="😐 إدخال عنوان المهمة*"
              value={todoTitle}
              onChange={this.updateTodoTitle}
            />
            <span className="icon is-medium is-left ">
              <i className={this.titleInputClasses}></i>
            </span>
            <span className="icon is-medium is-right">
              <i className="fa fa-text-height"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <textarea
              className={
                "textarea is-medium " +
                activeTodoState.colorClass +
                this.mainFontClass
              }
              placeholder="😏 محتوى المهمة(إختياري)"
              value={todoContent}
              onChange={this.updateTodoContent}
            ></textarea>
          </div>
        </div>

        <div className="field has-addons">
          <DropDown
            toggleDropdown={this.toggleDropdown}
            isDropdownVisible={isDropdownVisible}
            items={todoStates}
            activeItem={activeTodoState}
            onItemSelect={this.selectItem}
          />

          <button
            className={
              "button is-large is-fullwidth " +
              activeTodoState.colorClass +
              this.mainFontClass
            }
            onClick={this.addToDB}
          >
            👌 إضافة
          </button>
        </div>
      </>
    );
  }
  selectItem = (item) => {
    this.props.onSetState(item);
  };
  updateTodoTitle = (evt) => {
    const val = evt.target.value;
    this.setState({
      todoTitle: val,
    });
  };
  updateTodoContent = (evt) => {
    const val = evt.target.value;
    this.setState({
      todoContent: val,
    });
  };
  toggleDropdown = () => {
    this.setState({ isDropdownVisible: !this.state.isDropdownVisible });
  };
  addToDB = () => {
    const { todoTitle, todoContent } = this.state;
    if (!todoTitle) {
      alert("empty fields");
      return;
    }
    const newTodo = {
      title: todoTitle,
      content: todoContent,
      status: this.props.activeTodoState.label,
    };
    const allTodos = [newTodo, ...this.props.todos];

    saveToDB(allTodos, dataKey);
    this.props.onAddTodo(newTodo);
    this.setState({
      todoTitle: "",
      todoContent: "",
    });
  };
}

export default TaskInput;
