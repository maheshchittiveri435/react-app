import React, { useState } from "react";
import './Menu.css'

const Menu = (props) => {
const Checklist = 'Checklist';

const [activeItem, setActiveItem] = useState(null);
const handleClick = (item) => {
  setActiveItem(item);
};

  return (
    <nav>
        <ul>
            <li><a href="/" onClick={() => handleClick(Checklist)} className={activeItem === Checklist ? 'active' :''}>{Checklist}</a></li>
            <li><a href="/Quotes" onClick={() => handleClick('Quotes')} className={activeItem === 'Quotes' ? 'active' :''}>Quotes</a></li>
            <li><a href="/Conversation" onClick={() => handleClick('Conversation')} className={activeItem === 'Conversation' ? 'active' :''}>Conversation</a></li>
        </ul>
    </nav>
  );
};

export default Menu;
