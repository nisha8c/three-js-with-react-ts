import {IWeeklyMenuProps} from "../../interfaces/interfaces";

function WeeklyMenu( { title, items } : IWeeklyMenuProps) {
    console.log('Weekly Menu component is being rendered');
    return (
        <section className="weekly-menu">
            <h2>{title}</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <div>{item.name}</div>
                        <div>{item.description}</div>
                        <div>{item.price}</div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default WeeklyMenu;