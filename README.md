# Getting Started with Tailwind CSS

Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. It scans your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file. It's designed to be fast, flexible, and reliable — with zero-runtime.

## Installation

### Tailwind CLI

The Tailwind CLI tool is the simplest and fastest way to start using Tailwind CSS from scratch. It's available as a standalone executable, but you can use it without installing Node.js.

#### Install Tailwind CSS

To install Tailwind CSS via npm and create your `tailwind.config.js` file, open your terminal and run:

```zsh
npm install -D tailwindcss
npx tailwindcss init
```

#### Configure Your Template Paths

In your `tailwind.config.js` file, add the paths to all of your template files. This step is crucial for Tailwind CSS to correctly generate the necessary styles.

```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Add the Tailwind Directives to Your CSS

In your main CSS file, add the `@tailwind` directives for each of Tailwind’s layers.

```css
/* src/input.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Start the Tailwind CLI Build Process

Use the Tailwind CLI to scan your template files for classes and build your CSS. The `--watch` flag will keep the process running, watching for any changes you make to your template files and automatically rebuilding the CSS file.

```zsh
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

### Start Using Tailwind in Your HTML

Finally, add your compiled CSS file to the `<head>` of your HTML file and start using Tailwind’s utility classes to style your content.

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```

### Additional Installation Methods

- **Using PostCSS**: Tailwind CSS can also be integrated into your project with PostCSS.
- **Framework Guides**: Tailwind provides guides for integrating with various frameworks.
- **Play CDN**: For small projects or just experimenting, you can include Tailwind CSS directly from a CDN.

Happy coding with Tailwind CSS!