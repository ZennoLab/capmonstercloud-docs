<p align="center"><img src="https://github.com/ZennoLab/capmonstercloud-docs/blob/master/static/img/logo_docs.svg"></p>


# Documentation for Capmonster Cloud

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

--- 

### Installation

```bash
yarn
```
or
```bash
npm install
```
---
### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
By default it is English version

If you want to start Russian, try

```bash
yarn start -- --locale ru
```
---
### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

After build you can view full generated site with `ru` and `en` version, just run

```bash
yarn serve
```
---

### Structure

Russian documentation located at `/docs`

Every folder it's category for article.

English documentation located at `/i18n/en/docusaurus-plugin-content-docs/current/`

If you want same article for ru and en version, you need create file at `/docs` and `/i18n/en/docusaurus-plugin-content-docs/current/` with same filename and folder.

For more information about syntax and structure you can visit [https://docusaurus.io/](https://docusaurus.io/)