import React from 'react'

import { SectionWrapper } from '../hoc'
import SocialMediasCard from './SocialMediasCard'
import { socialMedias } from '../constants'
import { email } from '../assets'

const Footer = () => {
  return (
    <footer className="text-white py-6 border-t border-gray-600">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Luan Rodrigues. All Rights
            Reserved.
          </p>
        </div>

        <div className="space-x-6 grid text-end mb-5">
          <SocialMediasCard socialMedias={socialMedias} />
        </div>

        <div className="space-x-6 grid text-end">
          <a
            href="mailto:luoldrigues@gmail.com"
            className="hover:text-[#5A8DEE]"
          >
            {/* <img src={email} alt={''} className="w-5 h-5 object-contain" /> */}
            <div>
              <span>Email: </span>
              <span>luoldrigues@gmail.com</span>
            </div>
          </a>
          <a href="tel:+5514996574890" className="hover:text-[#5A8DEE]">
            BR Phone: +55 (11) 98892-8000
          </a>
        </div>
      </div>
    </footer>
  )
}

export default SectionWrapper(Footer, 'about')
