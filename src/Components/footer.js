import { FaGithubAlt, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer>
            
            <a className='copy'>Gustavo Moreira - Direitos reservados.</a>

            <span className="footer-contato" id="contato">
                <p><FaLinkedin/></p>
                <a href="https://www.linkedin.com/in/gustavo-moreira-aa488418b/" target='blank'>Linkedin</a>
                <p><FaInstagram/></p>
                <a href="https://www.instagram.com/gust4_s4ntos/" target='blank'>instagran</a>
                <p><FaGithubAlt/></p>
                <a href="https://github.com/GustavoMoreiraDev" target='blank' >Git-hub</a>
            </span>

        </footer>
    )
}

export default Footer;