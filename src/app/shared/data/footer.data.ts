import resumeAnchorLinks from './resume-anchor-links.data';

const footerData = {
  callToAction: {
    title: "LET'S BUILD TOGETHER",
    message: 'Drop me an email:',
    contactEmail: 'CONTACT@ROYERADAMES.COM',
  },
  resumeLinks: [
    {
      name: 'Back to top',
      link: `#${resumeAnchorLinks.home.id}`,
      isExternal: false,
      isAnchorLink: true,
    },
    {
      name: 'Projects',
      link: `#${resumeAnchorLinks.projects.id}`,
      isExternal: false,
      isAnchorLink: true,
    },
    {
      name: 'Experience',
      link: `#${resumeAnchorLinks.experience.id}`,
      isExternal: false,
      isAnchorLink: true,
    },
    {
      name: 'Education',
      link: `#${resumeAnchorLinks.education.id}`,
      isExternal: false,
      isAnchorLink: true,
    },
    {
      name: 'Skilled With',
      link: `#${resumeAnchorLinks.skilledWith.id}`,
      isExternal: false,
      isAnchorLink: true,
    },
  ],
};

export default footerData;
