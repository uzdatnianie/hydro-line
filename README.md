# Hydro-line web page

## Prerequisites
- Install [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm/blob/master/README.md#install--update-script)
- Set proper project node version: ```20.17```
```
nvm use
```
- Install [Package manager (pnpm)](https://pnpm.io/installation#using-other-package-managers)
```
npm install -g pnpm
```
## Project setup

All commands are run from the root of the project, from a terminal:

| Command           | Action                                           |
| :---------------- | :----------------------------------------------- |
| `pnpm install`    | Installs dependencies                            |
| `pnpm dev`        | Starts local dev server at `localhost:4321`      |
| `pnpm build`      | Build your production site to `./dist/`          |
| `pnpm preview`    | Preview your build locally, before deploying     |

## Project tooling
This project make use of [Astro](https://astro.build/), [UnoCSS](https://unocss.dev/)

## Using CSS
It's strongly recommended to use styles as utility tools which are already predefined and based on [Tailwind CSS](https://tailwindcss.com/) namespace and could be easly checked in [UnoCSS Interactive playground](https://unocss.dev/interactive/)