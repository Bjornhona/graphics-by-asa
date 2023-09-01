const reqSvgs = require.context('../styles/icons/socialMediaIcons', true, /\.svg$/);
const paths = reqSvgs.keys();

const linksList = {
  facebook: "https://www.facebook.com/graphicsbyasa/",
  twitter: "https://twitter.com/AsaGraphics",
  instagram: "https://www.instagram.com/graphicsbyasa/",
  linkedin: "https://www.linkedin.com/in/asaeri3/",
  github: "https://github.com/Bjornhona",
  youtube: "https://www.youtube.com/channel/UC7tEfdREodgftGM3h4USdOA/featured?view_as=subscriber"
}

export const socialMediaIcons = paths.map(path => {
  const iconType = path.replace('./', '').replace('.svg', '');

  return {
    icon: reqSvgs(path), 
    link: linksList[iconType]
  }
});