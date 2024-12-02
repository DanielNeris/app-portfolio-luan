import { motion } from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { cvPDF, link } from '../assets'
import { graphcInformations, socialMedias } from '../constants'
import SocialMediasCard from './SocialMediasCard'

const GraphCard = ({ data }) => {
  return (
    <div className="md:flex block md:mt-40">
      {data.map((item, index) => (
        <div className="flex items-center md:mr-20 mr-0 mt-10" key={index}>
          <span className="bold text-6xl">{item.time}</span>
          &nbsp;
          <span
            className="text-[#dfd9ff]"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      ))}
    </div>
  )
}

const Hero = () => {
  return (
    <section className={'relative w-full h-screen mx-auto'}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <span>Full Stack Developer</span>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Daniel Neris</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-gray`}>
            I am Passionate about developing innovative solutions
          </p>
          <p className={`${styles.heroSubText} mt-2 text-gray`}>
            and decentralization.
          </p>

          <div className="md:flex items-center mt-10 text-center">
            <button
              type="button"
              onClick={() => window.open(cvPDF, '_blank')}
              className="bg-transparent border-solid border-2 border-[#915EFF] rounded-full text-white font-bold py-3 px-5 mr-5 mb-10 md:mb-0"
            >
              <div className="flex justify-center items-center">
                <span className="mr-3">SEE MY RESUME</span>
                <img src={link} alt="link" className="w-6 h-6 object-contain" />
              </div>
            </button>

            <SocialMediasCard socialMedias={socialMedias} />
          </div>
          <GraphCard data={graphcInformations} />
        </div>
      </div>

      {/* <div className="absolute md:bottom-10 none bottom-[-100px] w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  )
}

export default SectionWrapper(Hero, 'home')
