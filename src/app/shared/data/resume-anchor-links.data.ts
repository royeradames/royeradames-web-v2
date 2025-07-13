import skilledWithSection from './resume/skilled-with.data';

const resumeAnchorLinks = {
  home: {
    id: '',
    name: 'Home',
  },
  projects: {
    id: 'projects',
    name: 'Projects',
  },
  experience: {
    id: 'experience',
    name: 'Experience',
  },
  education: {
    id: 'education',
    name: 'Education',
  },
  skilledWith: {
    id: skilledWithSection.id,
    name: skilledWithSection.name,
  },
};

export default resumeAnchorLinks;
