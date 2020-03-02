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
    <Img fluid={sources} />
  </Layout>
)}

export default IndexPage
