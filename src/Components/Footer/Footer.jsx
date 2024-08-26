import React from 'react'
import footerPic from '../../assets/footer-pic.webp'

const Footer = () => {
  return (
    <footer className="footer-section flex items-center justify-center flex-col text-center footer-center p-5 bg-amber-200 text-amber-950">
      <img src={footerPic} alt="footerPic" width={"80px"} className='rounded-full ' />
      <p className="font-bold leading-loose">Made with ❤️ by Arshil</p>
      <p className=' leading-loose'>Copyright © {new Date().getFullYear()} - All right reserved</p>
    </footer>
  )
}

export default Footer;