import React from "react";

const Menu = ({header, items, active, setActive}) => {
    return (
        <div className={active ? 'calculator active' : 'calculator'} onClick={() => setActive(false)}>
            <div className="calculator__content" onClick={e => e.stopPropagation()}>
                <div className="calculator__header">{header}</div>
                <ul>
                    {items.map(item =>
                        <li>
                            <a href={item.href}>{item.value}</a>
                            <span className="material-icons">{item.icon}</span>
                        </li>
                        )}
                </ul>
            </div>

        </div>
    );
};

export default Menu;