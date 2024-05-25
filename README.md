# Project Creator.

This project was build by Sunday David, with the email: sundayudoekong1@gmail.com

# Steps Taken in building the project

1. I created a folder called habot-task for my project and as well open it with VSCode
2. I copied some of the icons as svg and as well copied the logo and Hero section background image and paste it in the code editor and also download fonts from google fonts for the project
3. After gathering all the materials that i needed to start the project, I create my project by executing the command
      - npx create-vite@latest .
      It can also be created using create-react-app, but i choose vite because of it speed and flexibility.
      I also laverage typescript in my project to follow the trending technology.
4. I installed most of the packages that i need for my project. plugins like
        - Tailwindcss (https://tailwindcss.com/docs/installation) for styling
        - AOS (https://www.npmjs.com/package/aos) for simple Scrolling Animation
5. After installing the packages, i start structuring the folder to meet the React best practice.
6. I also define some custom css, padding, font family etc.



# Project repository and preview url
    Repo: https://github.com/sundayjava/habot-task          https://github.com/sundayjava/habot-task.git
    Preview Link: https://sunday-d-habot-task.vercel.app



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
