import {ITestimonialProps} from "../../interfaces/interfaces";

function Testimonials ({ name, quote }: ITestimonialProps){
    return (
        <section className="testimonials">
            <p>{quote}</p>
            <span>{name}</span>
        </section>
    );
}

export default Testimonials;