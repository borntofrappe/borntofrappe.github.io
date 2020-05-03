# svelte-app

At the time of writing, I haven't figured out a better way to deploy through Github Pages than in the master branch, and at the root level. With this in mind, once you build the project

```bash
npm run build
```

Be sure to take the contents of the **build** folder and move them at the mentioned root level. Github will take care of deploying the website considering `index.html`. With this in mind, feel free to add folders for the assets/stylesheets/scripts referenced in the markup document.
