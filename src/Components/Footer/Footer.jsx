import React from 'react'
import footerPic from '../../assets/footer-pic.webp'

const Footer = () => {
  return (
    <footer className="footer-section flex items-center justify-center flex-col text-center footer-center p-5 bg-amber-200 text-amber-900">
      <img src={footerPic} alt="footerPic" width={"80px"} className='rounded-full ' />
      <p className="font-bold leading-loose text-xl">Made with ❤️ by Arshil</p>
      <p className="leading-loose flex flex-col md:inline text-lg"><a href="mailto:arshilamaanansari@gmail.com" target='_blank' className='hover:text-amber-950'>arshilamaanansari@gmail.com</a> <span className='hidden md:inline-block'>⦿</span> <a href="tel:+91-7786989680" className='hover:text-amber-950'>+91-7786989680</a> <span className='hidden md:inline-block'>⦿</span> <a href="https://www.linkedin.com/in/arshil-amaan/" target='_blank' className='hover:text-amber-950'>linkedin.com/in/arshil-amaan/</a></p>
      <p className='leading-loose'>Copyright © {new Date().getFullYear()} - All rights reserved</p>
    </footer>
  )
}

export default Footer;