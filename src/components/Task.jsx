import React, { Component } from "react";

class Todo extends Component {
  state = {};
  colorStyles = [
    " is-dark",
    "is-warning",
    "is-danger",
    "is-success",
    "is-info",
    "is-link",
    "is-primary",
    "is-white",
  ];
  getRandomStyle = () => {
    return " is-primary";
    /*
    return (
      "message " +
      this.colorStyles[Math.floor(Math.random() * this.colorStyles.length + 0)]
    );*/
  };
  getRenderedData = ({ todo, onToggleDone }) => {
    if (todo.done) {
      return {
        title: <s>{todo.title}</s>,
        content: <s>{todo.content}</s>,
        doneBtn: (
          <button
            className={"button is-small is-sucess"}
            onClick={() => {
              onToggleDone(todo);
            }}
          >
            <span className="icon is-small">
              <i className="fa fa-check"></i>
            </span>
            <span>إعادة</span>
          </button>
        ),
      };
    } else {
      return {
        title: todo.title,
        content: todo.content,
        doneBtn: (
          <button
            className={"button is-small is-primary"}
            onClick={() => {
              onToggleDone(todo);
            }}
          >
            <span className="icon is-small">
              <i className="fa fa-circle-o"></i>
            </span>
            <span>إنهاء</span>
          </button>
        ),
      };
    }
  };
  styles = {
    filter: "blur(1px)",
    opacity: "0.4",
  };
  render() {
    const { todo, todoStatesClasses, onDelete } = this.props;
    const { title, content, doneBtn } = this.getRenderedData(this.props);
    return (
      <article
        className={"message is-medium " + todoStatesClasses[todo.status]}
        style={todo.done ? this.styles : {}}
      >
        <div className="message-header">
          <p>
            {doneBtn}
            &nbsp;&nbsp;&nbsp; {title}
          </p>
          <div className="tags">
            <span className={"tag is-medium " + this.getRandomStyle()}>
              {todo.status}
            </span>
            <a
              className="tag is-medium is-delete"
              onClick={() => {
                onDelete(todo);
              }}
            ></a>
          </div>
        </div>
        <div className="message-body">{content}</div>
      </article>
    );
  }
}

export default Todo;
