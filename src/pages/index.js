import React from "react"
import { graphql } from "gatsby"
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import SEO from "../components/seo"
import Img from 'gatsby-image'

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const IndexPage = ( {data} ) => {
  return (
    <>
      <SEO title="Effico Ltd - New Website Coming Soon!" />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
      >
        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <p className="m-0 text-primary font-bold text-center p-4">
            <span className="text-lg md:text-2xl block">Domestic & Commercial</span>
            <span className="text-2xl md:text-5xl block">Electrical Contractors</span>
          </p>
        </motion.div>

        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <p className="m-0 text-primary font-bold text-center p-4">
            <span className="inline-block"><a href="mailto:enquiries@effico.ltd"><FaEnvelope className="inline" /> enquiries@effico.ltd</a></span>
            <span className="inline-block mx-4">&bull;</span>
            <span className="inline-block"><a href="tel:01157751060"><FaPhone className="inline" /> 0115 775 1060</a></span>
          </p>
        </motion.div>

        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <div className="p-8 max-w-3xl mx-auto">
            <p>Effico are a professional and highly-experienced team of NICEIC-approved electrical and cooling engineers based in the East Midlands.</p>
            <p>Specialising in both commercial and domestic electrical works, we are proud to have delivered fast-paced, high-quality projects for a number of clients locally and nationwide.</p>
            <p>Founded in 2017, Lukasz and the team have over 30 years combined experience in order to provide superior levels of service and workmanship to every project – from design all the way through to implementation.</p>
          </div>

          <div className="md:flex">
          <>
            {data.allImageSharp.edges.map(edge => 
              <Img className="block md:w-1/3" key={edge.node.id} fluid={edge.node.fluid} />
            )}
          </>
          </div>

        </motion.div>
      </motion.section>
    </>
  )
}

export default IndexPage


export const query = graphql`
query GalQ {
  allImageSharp(filter: {fluid: {originalName: {nin: "effico-logo.png"}}}) {
    edges {
      node {
        id
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}

`
