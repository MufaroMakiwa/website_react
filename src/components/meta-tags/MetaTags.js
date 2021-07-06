import React from "react";
import { Helmet } from "react-helmet";


const MetaTags = ({ pageTitle }) => {
  return (
    <Helmet>
      <title>{`MIT Africans | ${pageTitle}`}</title>
      <meta property="og:title" content={`MIT Africans | ${pageTitle}`} />
      <meta property="og:description" content="MIT's African Students' Association" />
      <meta property="og:image" content="%PUBLIC_URL%/social_media.png" />
      {/* <meta property="og:url" content="http://euro-travel-example.com/index.htm" /> */}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

export default MetaTags
