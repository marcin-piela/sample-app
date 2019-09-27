# SAMPLE-APP

## Getting started

### Installation

Install dependencies using `npm` package manager

```sh
npm install
```

### Environment variables
```sh
REACT_APP_API_URL=https://api.example.com/
```

Create .env.development.local and .env.production.local files, one for development and second one for production build.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eslint`

Runs ESlint linter for all `.ts` and `.tsx` files.

### `npm run lint-fix`

Runs the above script (`eslint`) with auto fixing.

### `npm run translations`

Download newest translations from [google spreadsheet](https://docs.google.com/spreadsheets/d/1gKqZ8rFS44lLxC97JoOLm7ngADnB5OaNxcoxxsAOEhA/edit#gid=0). We're using [babelsheet-js](https://thesoftwarehouse.github.io/babelsheet-js/).

