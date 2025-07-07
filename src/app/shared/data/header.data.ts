const headerData = {
  navigation: {
    logo: {
      image: 'royeradames-logo.svg',
      link: '/',
      alt: 'Royer Adames Logo',
      width: '121',
      height: '94',
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
        link: '#who-am-i',
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
    currentTechnology: [],
    contact: [
      {
        icon: 'email',
        title: 'Email',
        contactInfo: 'CONTACT@ROYERADAMES.COM',
      },
      {
        icon: 'phone',
        title: 'Phone',
        contactInfo: '(407)801-9345',
      },
      {
        icon: 'Text',
        title: 'Text',
        contactInfo: '(407)801-9345',
      },
      {
        icon: 'address',
        title: 'Address',
        contactInfo: 'Orlando, Florida',
      },
    ],
    image: {
      alt: 'Royer Adames',
      href: '',
      height: 1108,
      width: 569,
    },
  },
};

export default headerData;

export type TNavigationLinks =
  (typeof headerData)['navigation']['navigationLinks'];
