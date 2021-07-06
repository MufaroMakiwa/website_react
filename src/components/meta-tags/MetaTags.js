import React from "react";
import { Helmet } from "react-helmet";
import HeaderLogo from "../../assets/header_logo.png";


const MetaTags = ({ pageTitle }) => {
  return (
    <Helmet>
      <title>{`MIT Africans | ${pageTitle}`}</title>
      <meta property="og:title" content={`MIT Africans | ${pageTitle}`} />
      <meta property="og:description" content="MIT's African Students' Association official website." />
      <meta property="og:image" content={HeaderLogo} />
      {/* <meta property="og:url" content="http://euro-travel-example.com/index.htm" /> */}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

export default MetaTags
