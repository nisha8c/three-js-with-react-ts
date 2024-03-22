import './Footer.scss'
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";

const githubUrl = process.env.GITHUB_URL;
const linkedinUrl = process.env.LINKEDIN_URL;
const facebookUrl = process.env.FACEBOOK_URL;

function Footer() {
    return(
        <footer className={"footer"}>
            <a href={githubUrl}>
                <BsGithub/>
            </a>
            <a href={linkedinUrl}>
                <BsLinkedin/>
            </a>
            <a href={facebookUrl}>
                <FaFacebookF/>
            </a>
        </footer>
    );
}

export default Footer;