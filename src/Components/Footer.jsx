import React from 'react';
import '../Footer.css';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin-logo.png';
import github from '../assets/social.png';
function Footer()
{
    return(
        <footer>
            <hr></hr>
            <div className="footer w-full">
                <div className='flex flex-col items-center justify-center'>
                    <div className="flex pb-5">
                        <a className='p-4 h-16 w-16' href="https://www.instagram.com/hamdev_/" target='_blank'>
                            <img className = "invert"src={instagram}></img>
                        </a>
                        <a className='p-4 h-16 w-16' href="https://www.linkedin.com/in/benjamin-zarate/" target='_blank'>
                            <img className = "invert" src={linkedin}></img>
                        </a>
                        <a className='p-4 h-16 w-16' href="https://github.com/benjaminZarate" target='_blank'>
                            <img src={github}></img>
                        </a>
                    </div>
                    <div className='flex'>
                        <a className='pr-10 text-white' href="#">Portfolio</a>
                        <a className=' text-white'href="https://github.com/benjaminZarate/free-to-play-searcher" target='_blank'>Source code</a>
                    </div>
                </div>
                <div className="items-center pt-10 text-gray-400">
                <p className='font-medium'>Ham Dev</p> Copyright © 2023
                </div>
            </div>
        </footer>
    );
}

export default Footer;