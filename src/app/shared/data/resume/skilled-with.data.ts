const skilledWith = [
  {
    icon: {
      name: 'java-script-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'JavaScript (JS)',
    description: 'The language of the web. Makes HTML dynamic.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    icon: {
      name: 'angular-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Angular',
    description: 'JavaScript UI framework. Commonly use in legacy code',
    link: 'https://angular.dev',
  },
  {
    icon: {
      name: 'cypress-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Cypress',
    description: 'JavaScript software testing framework',
    link: 'https://cypress.io',
  },
  {
    icon: {
      name: 'html-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'HTML',
    description: 'Holds the content of the web',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    icon: {
      name: 'css-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'CSS',
    description: 'Makes HTML prettier',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    icon: {
      name: 'agile-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Agile',
    description: 'Our stand up process',
    link: 'https://agilemanifesto.org',
  },
  {
    icon: {
      name: 'reactjs-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'React',
    description: 'JavaScript UI Framework. The most popular',
    link: 'https://react.dev',
  },
  {
    icon: {
      name: 'typescript-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'TypeScript (TS)',
    description: 'JavaScript with types. Helps us find bugs before deployment',
    link: 'https://www.typescriptlang.org',
  },
  {
    icon: {
      name: 'svelte-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Svelte',
    description:
      'JavaScript UI Framework. One of the simples, and quickens to pick up but rare to use in companies',
    link: 'https://svelte.dev',
  },
  {
    icon: {
      name: 'nextjs-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Next.js',
    description: 'React Meta Framework',
    link: 'https://nextjs.org',
  },
  {
    icon: {
      name: 'sass-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Sass',
    description: 'CSS with TS features',
    link: 'https://sass-lang.com',
  },
  {
    icon: {
      name: 'jira-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Jira',
    description: 'Software development management platform',
    link: 'https://www.atlassian.com/software/jira',
  },
  {
    icon: {
      name: 'microsoft-teams-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Microsoft Teams',
    description: 'The office. Texting, videos, calendar, and group chat.',
    link: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software',
  },
  {
    icon: {
      name: 'computer-archicture-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Computer Architecture',
    description: 'What decides the structure of the software',
    link: 'https://en.wikipedia.org/wiki/Computer_architecture',
  },
  {
    icon: {
      name: 'jest-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Jest',
    description: 'Alternative JavaScript software testing framework',
    link: 'https://jestjs.io',
  },
  {
    icon: {
      name: 'playwright-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Playwright',
    description:
      'A beautiful and easy to use JavaScript software testing framework and Automator',
    link: 'https://playwright.dev',
  },
  {
    icon: {
      name: 'puppeteer-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Puppeteer',
    description: 'The grandpapi JavaScript software testing framework',
    link: 'https://pptr.dev',
  },
  {
    icon: {
      name: 'aws-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'AWS',
    description:
      'What we normally use directly or indirectly to deploy our software. Compute has utility',
    link: 'https://aws.amazon.com',
  },
  {
    icon: {
      name: 'microsoft-azure-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Microsoft Azure',
    description: 'Microsoft AWS',
    link: 'https://azure.microsoft.com',
  },
  {
    icon: {
      name: 'vercel-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Vercel',
    description: 'AWS middleman with a good UI',
    link: 'https://vercel.com',
  },
  {
    icon: {
      name: 'big-o-notation-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Big O Notation',
    description: 'What we use to tell how fast our software is',
    link: 'https://en.wikipedia.org/wiki/Big_O_notation',
  },
  {
    icon: {
      name: 'data-structured-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Data Structure',
    description: 'Software data types and how to best use them',
    link: 'https://en.wikipedia.org/wiki/Data_structure',
  },
  {
    icon: {
      name: 'sql-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'SQL',
    description: 'Language of relational database',
    link: 'https://en.wikipedia.org/wiki/SQL',
  },
  {
    icon: {
      name: 'elastricsearch-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'ElasticSearch',
    description: 'Makes searching and filtering your big data quick',
    link: 'https://www.elastic.co/elasticsearch',
  },
  {
    icon: {
      name: 'expressjs-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Express.js',
    description: 'Barebone backend software in node.js',
    link: 'https://expressjs.com',
  },
  {
    icon: {
      name: 'mysql-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'MySQL',
    description: 'Rational database',
    link: 'https://www.mysql.com',
  },
  {
    icon: {
      name: 'scrum-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Scrum',
    description: 'The implementation of agile. Is how we do morning standup',
    link: 'https://scrum.org',
  },
  {
    icon: {
      name: 'apollo-graph-ql-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Apollo GraphQL',
    description: 'Implementation of GraphQL',
    link: 'https://www.apollographql.com',
  },
  {
    icon: {
      name: 'python-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Python',
    description: 'The language of AI',
    link: 'https://www.python.org',
  },
  {
    icon: {
      name: 'docker-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Docker',
    description:
      'Eliminates the issue of "it runs in my computer but not in yours"',
    link: 'https://www.docker.com',
  },
  {
    icon: {
      name: 'nodejs-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Node.js',
    description: 'The grandfather of running Javascript outside of the browser',
    link: 'https://nodejs.org',
  },
  {
    icon: {
      name: 'rest-api-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'RESTful API',
    description: 'The common way to build a backed software',
    link: 'https://en.wikipedia.org/wiki/Representational_state_transfer',
  },
  {
    icon: {
      name: 'slack-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Slack',
    description: 'Microsoft teams but cooler',
    link: 'https://slack.com',
  },
  {
    icon: {
      name: 'github-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Github',
    description: 'Common place where our software lives',
    link: 'https://github.com',
  },
  {
    icon: {
      name: 'git-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Git',
    description:
      'Powerful software for history tracking, changes management, and collaboration with multiple developers',
    link: 'https://git-scm.com',
  },
  {
    icon: {
      name: 'tailwind-icon.svg',
      height: 32,
      width: 32,
    },
    title: 'Tailwind',
    description: 'CSS++',
    link: 'https://tailwindcss.com',
  },
];

export default skilledWith;
