# Restaurant Website

A simple restaurant website built using JavaScript modules and bundled with Webpack. The project demonstrates dynamic page rendering, module organization, and basic DOM manipulation without using any frontend frameworks.

## Features

* Home page
* Menu page
* About page
* Dynamic content rendering using JavaScript
* Modular code structure
* Webpack bundling and development server support

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6 Modules)
* Webpack

## Project Structure

```
src/
│
├── index.js
├── styles.css
├── homepage.js
├── menu.js
├── about.js
│
dist/
│
webpack.config.js
package.json
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd restaurant-website
```

Install dependencies:

```bash
npm install
```

## Running the Development Server

```bash
npm run start
```

or

```bash
npx webpack serve
```

The application will be available in your browser through the local development server.

## Building for Production

```bash
npm run build
```

This generates an optimized production build inside the `dist` folder.

## Learning Objectives

This project was created to practice:

* ES6 module imports and exports
* DOM manipulation
* Webpack configuration and bundling
* Asset management with Webpack
* Organizing JavaScript applications into reusable modules

## Author

@alamshaz
