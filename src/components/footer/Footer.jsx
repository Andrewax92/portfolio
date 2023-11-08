import "./footer.css"
import{AiFillLinkedin,AiFillGithub,AiFillFacebook} from 'react-icons/ai'

export const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">Andrei Axinoi</a>
      <ul className="permalinks">

        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com" target="_blank"><AiFillLinkedin/></a>
          <a href="https://github.com" target="_blank"><AiFillGithub/></a>
          <a href="https://facebook.com" target="_blank"><AiFillFacebook/></a>
      </div>
    </footer>
  )
}