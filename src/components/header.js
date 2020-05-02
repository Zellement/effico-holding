import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header className="p-8 mx-auto w-auto max-w-sm text-center">

    <div class="triangle-topleft"></div>
    <p className="font-bold fixed top-0 left-0 z-50 transform -rotate-45 text-xs mt-6 ml-1 text-white">New website <br />coming soon!</p>

    <StaticQuery
      query={graphql`

       query MyQuery {
          allFile(filter: {relativePath: {eq: "effico-logo.png"}}) {
            edges {
              node {
                id
                relativePath
                childImageSharp {
                  fixed(width: 230) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }

        `}
      render={data => (
        <>
          <Img className="block mx-auto" fixed={data.allFile.edges[0].node.childImageSharp.fixed} />
        </>
      )}
    />

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
