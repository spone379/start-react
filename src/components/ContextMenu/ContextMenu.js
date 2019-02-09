import React, { Component } from 'react';

import './ContextMenu.scss';


class Contextmenu extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.props.closeContextMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.props.closeContextMenu);
  }

  handleContextMenuClick = (e, item) => {
    e.preventDefault();

    item.action();
    this.props.closeContextMenu();
  }

  renderItems = (item, index) => (
    <li
      key={index}
      onMouseDown={item.action}
      onContextMenu={(e) => this.handleContextMenuClick(e, item)}
      className="context-menu__item">
      {item.text}
    </li>
  )

  render() {
    const { coords, items } = this.props;

    return (
      <ul
        className="context-menu"
        style={{ left: coords[0], top: coords[1] }}>
        {items.map((item, index) => this.renderItems(item, index))}
      </ul >
    );
  }
}

export default Contextmenu;