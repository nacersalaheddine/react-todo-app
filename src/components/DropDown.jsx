import React from "react";
const DropDown = ({ toggleDropdown, activeItem, items, onItemSelect }) => {
  return (
    <div className="dropdown is-hoverable">
      <div className="dropdown-trigger">
        <button
          className="button is-large"
          aria-haspopup="true"
          aria-controls="dropdown-menu2"
          onClick={toggleDropdown}
        >
          <span key="stateSpan">الحالة</span> &nbsp;
          <span
            key="labelSpan"
            className={"tag is-medium " + activeItem.colorClass}
          >
            {activeItem.label}
          </span>
          <span key="iconSpan" className="icon is-small">
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu2" role="menu">
        <div className="dropdown-content">
          {items.map((item, idx) => {
            let classes = "tag is-medium " + item.colorClass;
            return (
              <React.Fragment key={idx}>
                <a
                  className={
                    activeItem === item
                      ? "dropdown-item is-active"
                      : "dropdown-item"
                  }
                  onClick={() => {
                    onItemSelect(item);
                  }}
                >
                  <span className={classes}>{item.label}</span>
                </a>
                {idx === items.length - 1 ? null : (
                  <hr key={"hr" + idx} className="dropdown-divider" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
