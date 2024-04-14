# Project Structure

This project structure is a skeleton used as a template for projects within the Gincat Digital organization. It helps organize the codebase in a clear and maintainable manner, separating concerns and improving code readability and scalability.

## Folder Structure

- **.msw/**: Houses configurations for the mock API, see [MSW documentation](https://v1.mswjs.io/) for more.
	- **worker/**: Stores the MSW service worker file (should not be used for anything else).
- **.scripts/**: Contains custom scripts used in the project such as `plop`.
- **.storybook/**: Houses all the configuration files related to [Storybook](https://storybook.js.org/).
- **.templates/**: Stores component templates to be generated via `plop` script, see [Plop documentation](https://plopjs.com/documentation/) for more info.
- **.webpack/**: Contains all the Webpack configurations for compiling the source code and starting a development server, see [@gincat-digital/webpack](https://www.npmjs.com/package/@gincat-digital/webpack) for more info.
- **dist/**: Stores the compiled code ready to be used in production environments.
- **mocks/**: Contains mock API routes for local development testing, powered by [https://v1.mswjs.io/docs/api/rest](https://v1.mswjs.io/).
- **src/**: Houses all the source code files for the project, excluding generated files after compilation.
	- **app/**: Contains the main application files, such as the root component and any application-wide configurations.
	- **assets/**: Houses static assets such as images, fonts, and other resources used in the project.
	- **components/**: Stores reusable UI components used across different pages and sections of the application.
	- **contexts/**: Contains React Contexts for managing global state and sharing data across components.
	- **data/**: Holds data files or constants used within the application, such as parameter values or configuration files.
	- **hooks/**: Contains custom React hooks used to encapsulate and reuse stateful logic across components.
	- **html/**: Stores HTML templates or files if any static HTML needs to be included in the project.
	- **i18next/**: Houses internationalization (i18n) configurations and translations for multi-language support.
	- **locales/**: Contains localization files for different languages used in the project.
	- **pages/**: Houses page-level components or containers responsible for rendering specific routes or views.
	- **routes/**: Contains route configurations and routing logic, defining the navigation paths of the application.
	- **storybook/**: Houses storybook utils to be used within component stories, such like argument types.
	- **styles/**: Stores SCSS files for styling components and pages.
	- **types/**: Contains TypeScript type definitions used throughout the project for type safety.
	- **utils/**: Houses utility functions, helper methods, or reusable logic used across the application.
