import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { education } from '../constants'

const AcademicCard = ({ education }) => {
  return (
    <div className="bg-[#1d1836] p-6 rounded-lg shadow-lg border-b border-solid border-[#fff]">
      <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
      <p className="text-gray-400">{education.institution}</p>
      <p className="text-gray-500">{education.graduationYear}</p>
    </div>
  )
}

const Academic = () => {
  return (
    <section className="py-20">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I’ve Learned
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Academic Journey.
        </h2>
      </motion.div>
      <div className="max-w-6xl mx-auto text-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <AcademicCard education={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Academic, 'academic')
