import React from "react"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const smallImage = {
    aspectRatio: 3,
    src: "https://via.placeholder.com/600x200",
  };

  const mediumImage = {
    aspectRatio: 5,
    src: "https://via.placeholder.com/1000x200",
  };

  const largeImage = {
    aspectRatio: 7,
    src: "https://via.placeholder.com/1400x200",
  };

  const sources = [
    {
      ...smallImage,
      media: `(max-width: 599px)`,
    },
    {
      ...mediumImage,
      media: `(min-width: 600px)`,
    },
    {
      ...largeImage,
      media: `(min-width: 900px)`,
    },
  ];
  return (
  <Layout>
    <SEO title="Home" />
    <h1>Art directed image example</h1>
    <p>The following image is art directed, using the following config:</p>
    <ul>
      <li><code>(max-width: 599px)</code>: image is https://via.placeholder.com/600x200</li>
      <li><code>(min-width: 600px)</code>: image is https://via.placeholder.com/1000x200</li>
      <li><code>(min-width: 900px)</code>: image is https://via.placeholder.com/1400x200</li>
    </ul>
    <div style={{marginBottom: '1rem'}}>
      <Img fluid={sources} />
    </div>
    <p>At large screen sizes (<code>min-width: 900px</code>), we should expect the 1400x200 image to show, but instead the 1000x200 image is shown.</p>
  </Layout>
)}

export default IndexPage
