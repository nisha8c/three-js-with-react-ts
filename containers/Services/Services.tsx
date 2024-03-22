import {IServicesProps} from "../../interfaces/interfaces";

function Services ({ serviceTitle, items }: IServicesProps) {
    return (
        <section className="services">
            <h2>{serviceTitle}</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    );
}
export default Services;