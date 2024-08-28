import { Suspense, lazy } from 'react';
import { Parallax } from 'react-parallax';
import imageOverlay from '../../assets/earth.webp';
import { Toaster } from 'react-hot-toast';

// Lazy load the child components
const ContactForm = lazy(() => import('./ContactForm/ContactForm'));
const GetInTouch = lazy(() => import('./ContactForm/GetInTouch'));

const Contact = () => {
    return (
        <Parallax
            bgImage={imageOverlay}
            bgImageAlt="layered earth"
            bgImageStyle={{ objectFit: 'cover' }}
            strength={-200}
            className='relative px-7 py-9 md:p-12'
        >
            <Toaster />
            <section
                id='contact'
                className='mx-auto flex bg-gray-100 rounded-lg shadow-lg justify-center flex-col md:flex-row'
            >
                <Suspense fallback={<div>Loading...</div>}>
                    <ContactForm />
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <GetInTouch />
                </Suspense>
            </section>
        </Parallax>
    );
};

export default Contact;
