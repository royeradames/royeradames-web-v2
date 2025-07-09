const headerData = {
  navigation: {
    logo: {
      name: 'royeradames-logo.svg',
      link: '/',
      alt: 'Royer Adames Logo',
      width: 121,
      height: 94,
    },
    navigationLinks: [
      {
        name: 'Who am I?',
        link: '#who-am-i',
      },
      {
        name: 'Publications',
        link: '/publications',
      },
    ],
    menuLinks: [
      {
        name: 'Who am I?',
        link: '/',
      },
      {
        name: 'Publications',
        link: '/publications',
      },
    ],
  },
  hero: {
    title: 'Royer Adames',
    titleDescription: [
      {
        position: 'Full-Stack Developer',
        nestedPositions: ['Front-End Developer', 'Back-End Developer'],
      },
      {
        position: 'Software Designer',
      },
    ],
    message: {
      text: 'I value the development and design that ',
      focusText: 'values your needs',
    },
    currentTechnology: [
      {
        icon: 'angular-icon.svg',
        title: 'Angular',
        description: 'JavaScript UI framework. Commonly use in legacy code',
      },
      {
        icon: 'nextjs-icon.svg',
        title: 'Next.js',
        description: 'React Meta Framework',
      },
      {
        icon: 'sass-icon.svg',
        title: 'Sass',
        description: 'CSS with TS features',
      },
      {
        icon: 'microsoft-teams-icon.svg',
        title: 'Microsoft Teams',
        description: 'The office. Texting, videos, calendar, and group chat.',
      },
      {
        icon: 'microsoft-azure-icon.svg',
        title: 'Microsoft Azure',
        description: 'Microsoft AWS',
      },
      {
        icon: 'docker-icon.svg',
        title: 'Docker',
        description:
          'Eliminates the issue of “it runs in my computer but not in yours',
      },
      {
        icon: 'github-icon.svg',
        title: 'Github',
        description: 'Common place where our software lives',
      },
    ],
    contact: [
      {
        icon: 'email-icon.svg',
        title: 'Email',
        contactInfo: 'CONTACT@ROYERADAMES.COM',
      },
      {
        icon: 'text-icon.svg',
        title: 'Text',
        contactInfo: '(407)801-9345',
      },
      {
        icon: 'location-icon.svg',
        title: 'Address',
        contactInfo: 'Orlando, Florida',
      },
    ],
    image: {
      alt: 'Royer Adames',
      name: 'hero-image.webp',
      height: 1108,
      width: 569,
    },
  },
};

export default headerData;

export type TNavigationLinks =
  (typeof headerData)['navigation']['navigationLinks'];
