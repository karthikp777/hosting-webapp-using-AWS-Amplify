# React Amplify Starter

A small React + Vite website with separate CSS files, ready for AWS Amplify Hosting.

## Run locally

```bash
npm install
npm run dev
```

## Create a production build

```bash
npm run build
```

Vite creates the deployable website in the `dist/` folder.

## Deploy with AWS Amplify

1. Push this project to a GitHub repository.
2. In AWS Amplify, choose **Create new app** → **Host web app**.
3. Connect GitHub and select this repository and branch.
4. Amplify can use the included `amplify.yml` build settings.
5. Choose **Save and deploy**.

The app's source HTML entry point is `index.html`. React components are in `src/`, with styles in `src/App.css` and `src/index.css`.
