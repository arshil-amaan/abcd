import { memo, Suspense } from 'react';
import FooterPic from '../../assets/footer.webp';

const Footer = () => {
  return (
    <footer className="footer-section flex items-center justify-center flex-col text-center footer-center p-5 bg-amber-200 text-amber-900">
      <Suspense fallback={<div className='w-20 h-20 bg-gray-200 rounded-full' />}>
        <img src={FooterPic} alt="Footer" className="rounded-full w-20" loading="lazy" />
      </Suspense>
      <p className="font-bold leading-loose text-xl">Made with ❤️ by Arshil</p>
      <p className="leading-loose flex flex-col md:inline text-lg">
        <a href="mailto:arshilamaanansari@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-950">
          arshilamaanansari@gmail.com
        </a>
        <span className="hidden md:inline-block">⦿</span>
        <a href="tel:+91-7786989680" className="hover:text-amber-950">
          +91-7786989680
        </a>
        <span className="hidden md:inline-block">⦿</span>
        <a href="https://www.linkedin.com/in/arshil-amaan/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-950">
          linkedin.com/in/arshil-amaan/
        </a>
      </p>
      <p className="leading-loose">Copyright © {new Date().getFullYear()} - All rights reserved</p>
    </footer>
  );
};

export default memo(Footer);
