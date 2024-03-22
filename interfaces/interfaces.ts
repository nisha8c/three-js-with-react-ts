export interface ITestimonialProps {
    name: string;
    quote: string;
}

export interface IServicesProps {
    serviceTitle: string;
    items: string[];
}

export interface IMenuItemProps {
    name: string;
    description: string;
    price: number;
}

export  interface IWeeklyMenuProps {
    title: string;
    items: IMenuItemProps[];
}