import React from "react";

const FilterButtons = ({ todos, filter, onFilterTodos, onDeleteAll }) => {
  return (
    <nav className="level">
      <div className="level-right">
        <div className="level-item">
          <div className="field has-addons">
            <p className="control">
              <button
                className="button"
                onClick={() => {
                  onFilterTodos("done");
                }}
                disabled={todos.length <= 0 || filter === "done"}
              >
                <span className="icon is-small">
                  <i className="fa fa-check"></i>
                </span>
                <span>إضهار المهام المكتملة</span>
              </button>
            </p>
            <p className="control">
              <button
                className="button"
                onClick={() => {
                  onFilterTodos("pending");
                }}
                disabled={todos.length <= 0 || filter === "pending"}
              >
                <span className="icon is-small">
                  <i className="fa fa-circle-o"></i>
                </span>
                <span>إضهار المهام الغير مكتملة</span>
              </button>
            </p>
            <p className="control">
              <button
                className="button"
                onClick={() => {
                  onFilterTodos("all");
                }}
                disabled={todos.length <= 0 || filter === "all"}
              >
                <span className="icon is-small">
                  <i className="fa fa-list"></i>
                </span>
                <span>إضهار جميع المهام</span>
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="level-left">
        <div className="level-item">
          <button
            className="button is-large is-danger is-light is-start "
            title="حذف جميع المهام"
            disabled={todos.length <= 0}
            onClick={onDeleteAll}
          >
            <span className="icon is-medium">
              <i className="fa fa-trash-o"></i>
            </span>
            <span>حذف جميع المهام</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default FilterButtons;
