import resumeAnchorLinks from './resume-anchor-links.data';

const footerData = {
  callToAction: {
    title: "Let's build something together",
    message:
      "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    contactMessage: 'Drop me an email:',
    contactEmail: 'CONTACT@ROYERADAMES.COM',
  },
  resumeLinks: [
    {
      name: 'Back to top',
      link: `#${resumeAnchorLinks.home.id}`,
    },
    {
      name: 'Projects',
      link: `#${resumeAnchorLinks.projects.id}`,
    },
    {
      name: 'Experience',
      link: `#${resumeAnchorLinks.experience.id}`,
    },
    {
      name: 'Education',
      link: `#${resumeAnchorLinks.education.id}`,
    },
    {
      name: 'Skilled With',
      link: `#${resumeAnchorLinks.skilledWith.id}`,
    },
  ],
};

export default footerData;
