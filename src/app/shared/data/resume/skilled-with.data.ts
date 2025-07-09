const skilledWith = [
  {
    icon: 'java-script-icon.svg',
    title: 'JavaScript (JS)',
    description: 'The language of the web. Makes HTML dynamic.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    icon: 'angular-icon.svg',
    title: 'Angular',
    description: 'JavaScript UI framework. Commonly use in legacy code',
    link: 'https://angular.dev',
  },
  {
    icon: 'cypress-icon.svg',
    title: 'Cypress',
    description: 'JavaScript software testing framework',
    link: 'https://cypress.io',
  },
  {
    icon: 'html-icon.svg',
    title: 'HTML',
    description: 'Holds the content of the web',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    icon: 'css-icon.svg',
    title: 'CSS',
    description: 'Makes HTML prettier',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    icon: 'agile-icon.svg',
    title: 'Agile',
    description: 'Our stand up process',
    link: 'https://agilemanifesto.org',
  },
  {
    icon: 'reactjs-icon.svg',
    title: 'React',
    description: 'JavaScript UI Framework. The most popular',
    link: 'https://react.dev',
  },
  {
    icon: 'typescript-icon.svg',
    title: 'TypeScript (TS)',
    description: 'JavaScript with types. Helps us find bugs before deployment',
    link: 'https://www.typescriptlang.org',
  },
  {
    icon: 'svelte-icon.svg',
    title: 'Svelte',
    description:
      'JavaScript UI Framework. One of the simples, and quickens to pick up but rare to use in companies',
    link: 'https://svelte.dev',
  },
  {
    icon: 'nextjs-icon.svg',
    title: 'Next.js',
    description: 'React Meta Framework',
    link: 'https://nextjs.org',
  },
  {
    icon: 'sass-icon.svg',
    title: 'Sass',
    description: 'CSS with TS features',
    link: 'https://sass-lang.com',
  },
  {
    icon: 'jira-icon.svg',
    title: 'Jira',
    description: 'Software development management platform',
    link: 'https://www.atlassian.com/software/jira',
  },
  {
    icon: 'microsoft-teams-icon.svg',
    title: 'Microsoft Teams',
    description: 'The office. Texting, videos, calendar, and group chat.',
    link: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software',
  },
  {
    icon: 'computer-archicture-icon.svg',
    title: 'Computer Architecture',
    description: 'What decides the structure of the software',
    link: 'https://en.wikipedia.org/wiki/Computer_architecture',
  },
  {
    icon: 'jest-icon.svg',
    title: 'Jest',
    description: 'Alternative JavaScript software testing framework',
    link: 'https://jestjs.io',
  },
  {
    icon: 'playwright-icon.svg',
    title: 'Playwright',
    description:
      'A beautiful and easy to use JavaScript software testing framework and Automator',
    link: 'https://playwright.dev',
  },
  {
    icon: 'puppeteer-icon.svg',
    title: 'Puppeteer',
    description: 'The grandpapi JavaScript software testing framework',
    link: 'https://pptr.dev',
  },
  {
    icon: 'aws-icon.svg',
    title: 'AWS',
    description:
      'What we normally use directly or indirectly to deploy our software. Compute has utility',
    link: 'https://aws.amazon.com',
  },
  {
    icon: 'microsoft-azure-icon.svg',
    title: 'Microsoft Azure',
    description: 'Microsoft AWS',
    link: 'https://azure.microsoft.com',
  },
  {
    icon: 'vercel-icon.svg',
    title: 'Vercel',
    description: 'AWS middleman with a good UI',
    link: 'https://vercel.com',
  },
  {
    icon: 'big-o-notation-icon.svg',
    title: 'Big O Notation',
    description: 'What we use to tell how fast our software is',
    link: 'https://en.wikipedia.org/wiki/Big_O_notation',
  },
  {
    icon: 'data-structured-icon.svg',
    title: 'Data Structure',
    description: 'Software data types and how to best use them',
    link: 'https://en.wikipedia.org/wiki/Data_structure',
  },
  {
    icon: 'sql-icon.svg',
    title: 'SQL',
    description: 'Language of relational database',
    link: 'https://en.wikipedia.org/wiki/SQL',
  },
  {
    icon: 'elastricsearch-icon.svg',
    title: 'ElasticSearch',
    description: 'Makes searching and filtering your big data quick',
    link: 'https://www.elastic.co/elasticsearch',
  },
  {
    icon: 'expressjs-icon.svg',
    title: 'Express.js',
    description: 'Barebone backend software in node.js',
    link: 'https://expressjs.com',
  },
  {
    icon: 'mysql-icon.svg',
    title: 'MySQL',
    description: 'Rational database',
    link: 'https://www.mysql.com',
  },
  {
    icon: 'scrum-icon.svg',
    title: 'Scrum',
    description: 'The implementation of agile. Is how we do morning standup',
    link: 'https://scrum.org',
  },
  {
    icon: 'apollo-graph-ql-icon.svg',
    title: 'Apollo GraphQL',
    description: 'Implementation of GraphQL',
    link: 'https://www.apollographql.com',
  },
  {
    icon: 'python-icon.svg',
    title: 'Python',
    description: 'The language of AI',
    link: 'https://www.python.org',
  },
  {
    icon: 'docker-icon.svg',
    title: 'Docker',
    description:
      'Eliminates the issue of "it runs in my computer but not in yours"',
    link: 'https://www.docker.com',
  },
  {
    icon: 'nodejs-icon.svg',
    title: 'Node.js',
    description: 'The grandfather of running Javascript outside of the browser',
    link: 'https://nodejs.org',
  },
  {
    icon: 'rest-api-icon.svg',
    title: 'RESTful API',
    description: 'The common way to build a backed software',
    link: 'https://en.wikipedia.org/wiki/Representational_state_transfer',
  },
  {
    icon: 'slack-icon.svg',
    title: 'Slack',
    description: 'Microsoft teams but cooler',
    link: 'https://slack.com',
  },
  {
    icon: 'github-icon.svg',
    title: 'Github',
    description: 'Common place where our software lives',
    link: 'https://github.com',
  },
  {
    icon: 'git-icon.svg',
    title: 'Git',
    description:
      'Powerful software for history tracking, changes management, and collaboration with multiple developers',
    link: 'https://git-scm.com',
  },
  {
    icon: 'tailwind-icon.svg',
    title: 'Tailwind',
    description: 'CSS++',
    link: 'https://tailwindcss.com',
  },
];

export default skilledWith;
