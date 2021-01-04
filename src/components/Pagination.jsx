import React, { Component } from "react";

class Pagination extends Component {
  state = {};
  render() {
    return (
      <nav className="pagination" role="navigation" aria-label="pagination">
        <a
          className="pagination-previous"
          title="This is the first page"
          disabled
        >
          السابق
        </a>
        <a className="pagination-next">التالي</a>
        <ul className="pagination-list">
          <li>
            <a
              className="pagination-link is-current"
              aria-label="Page 1"
              aria-current="page"
            >
              1
            </a>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 2">
              2
            </a>
          </li>
          <li>
            <a className="pagination-link" aria-label="Goto page 3">
              3
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
