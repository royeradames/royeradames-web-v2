const headerData = {
  navigation: {
    logo: {
      name: 'royeradames-logo.svg',
      link: '/',
      alt: 'Royer Adames Logo',
      width: 60,
      height: 60,
    },
    navigationLinks: [
      {
        name: 'Who am I?',
        link: '/',
        isExternal: false,
        isAnchorLink: false,
      },
      {
        name: 'Publications',
        link: 'https://royeraadames.medium.com/',
        isExternal: true,
        isAnchorLink: false,
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
        icon: {
          name: 'angular-icon.svg',
          height: 42,
          width: 42,
        },
        title: 'Angular',
        description: 'JavaScript UI framework. Commonly use in legacy code',
        link: 'https://angular.dev',
      },
      {
        icon: {
          name: 'nextjs-icon.svg',
          height: 42,
          width: 42,
        },
        title: 'Next.js',
        description: 'React Meta Framework',
        link: 'https://nextjs.org',
      },
      {
        icon: {
          name: 'sass-icon.svg',
          height: 42,
          width: 42,
        },
        title: 'Sass',
        description: 'CSS with TS features',
        link: 'https://sass-lang.com',
      },
      {
        icon: {
          name: 'microsoft-teams-icon.svg',
          height: 42,
          width: 42,
        },
        title: 'Microsoft Teams',
        description: 'The office. Texting, videos, calendar, and group chat.',
        link: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software',
      },
      {
        icon: {
          name: 'microsoft-azure-icon.svg',
          height: 42,
          width: 42,
        },
        title: 'Microsoft Azure',
        description: 'Microsoft AWS',
        link: 'https://azure.microsoft.com',
      },
      {
        icon: {
          name: 'docker-icon.svg',
          height: 42,
          width: 42,
        },
        title: 'Docker',
        description:
          'Eliminates the issue of "it runs in my computer but not in yours"',
        link: 'https://www.docker.com',
      },
      {
        icon: {
          name: 'git-icon.svg',
          height: 42,
          width: 42,
        },
        title: 'Git',
        description:
          'Powerful software for history tracking, changes management, and collaboration with multiple developers',
        link: 'https://git-scm.com',
      },
    ],
    contact: [
      {
        icon: 'email-icon.svg',
        title: 'Email',
        contactInfo: 'CONTACT@ROYERADAMES.COM',
        type: 'email',
      },
      {
        icon: 'text-icon.svg',
        title: 'Text',
        contactInfo: '(407)801-9345',
        type: 'text',
      },
      {
        icon: 'location-icon.svg',
        title: 'Address',
        contactInfo: 'Orlando, Florida',
        type: 'address',
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
