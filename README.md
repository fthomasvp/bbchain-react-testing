# BBChain React Testing

## Installation

You should have this tool on your computer to able to run the app:

| Tool                              | Version |
| --------------------------------- | ------- |
| [Node.js](https://nodejs.org/en/) | >= 16.x |

> This project uses [Vite](https://vitejs.dev).

In a terminal go to _project root directory_ and then run the command below to install the dependencies:

```bash
npm install
```

## Usage

To start the app on development environment, run the command below:

```bash
npm run dev
```

You should then have the app running on http://localhost:3000

or

If your already generate a [Build](#build) for production environment, just run this:

```bash
npm run preview
```

You should then have the app running on http://localhost:4173

## Build

To build the app for production environment, you should run the following command:

```bash
npm run build
```

## Testing

This project has implemented tests using [Vitest](https://vitest.dev). It's also has a coverage report.

To run the tests on _watch mode_, run the command below:

```bash
npm test
```

If you want to see the coverage report, run this:

```bash
npm run coverage
```

## License

Unlicensed.