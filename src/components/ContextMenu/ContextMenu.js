import React from 'react';

import './ContextMenu.css';


const Contextmenu = (props) => {
  const handleContextMenuClick = (e, item) => {
    e.preventDefault();

    item.action();
    props.closeContextMenu();
  }

  const renderItems = (item, index) => (
    <li
      key={index}
      onMouseDown={item.action}
      onContextMenu={(e) => handleContextMenuClick(e, item)}
      className="context-menu__item">
      {item.text}
    </li>
  )

  return (
    <ul
      className="context-menu"
      style={{ left: props.coords[0], top: props.coords[1] }} >

      {props.items.map((item, index) => renderItems(item, index))}

    </ul >
  );
}

export default Contextmenu;