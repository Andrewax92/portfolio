import{AiFillLinkedin,AiFillGithub,AiFillFacebook} from 'react-icons/ai'

export const HeaderSocials = () => {
  return (
      <div className="header_socials">
          <a href="https://linkedin.com" target="_blank"><AiFillLinkedin/></a>
          <a href="https://github.com" target="_blank"><AiFillGithub/></a>
          <a href="https://facebook.com" target="_blank"><AiFillFacebook/></a>
      </div>
  )
}