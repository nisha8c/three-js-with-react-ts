import {IMenuItemProps} from "../../interfaces/interfaces";
import React from "react";

const WeeklyMenu: React.FC<{ title: string; items: IMenuItemProps[] }> = ({ title, items }) => {
    return (
        <section className="weekly-menu">
            <h2>{title}</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <div>{item.name} - ${item.price}</div>
                        <div>{item.description}</div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default WeeklyMenu;