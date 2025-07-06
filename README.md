# RoyeradamesWebV2

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

## Prerequisites

Before you can run this project, you need to have the following installed:

- **Node.js** (version 18.19.1 or later): Download from [nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js)

## Installing Angular

To work with this project, you'll need the Angular CLI installed globally:

```bash
npm install -g @angular/cli
```

You can verify your Angular CLI installation by running:

```bash
ng version
```

## How This Project Was Generated

This project was created using the Angular CLI with the following command:

```bash
ng new royeradames-web-v2 --directory=. --routing --style=css --package-manager=npm
```

**Command breakdown:**

- `ng new royeradames-web-v2` - Creates a new Angular project named "royeradames-web-v2"
- `--directory=.` - Creates the project in the current directory instead of a new subdirectory
- `--routing` - Adds Angular Router for navigation between views
- `--style=css` - Uses CSS for styling (default option)
- `--package-manager=npm` - Uses npm as the package manager

**Note:** The CLI also prompted for additional options:

- **Zoneless application**: Selected "Yes" for better performance (Developer Preview)
- **Server-Side Rendering (SSR)**: Selected "Yes" for better SEO and performance

To create a similar project in a new directory, you would run:

```bash
ng new your-project-name --routing --style=css --package-manager=npm
```

## Project Setup

1. Clone this repository
2. Navigate to the project directory
3. Install project dependencies:

```bash
npm install
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
