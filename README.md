# My blog
The intent is to have **very** simplistic blog where I can centralize information about me, things I read, and things I would like to share.

- [My blog](#my-blog)
  - [Structure](#structure)
    - [Config](#config)
    - [Markup Folders](#markup-folders)
      - [Notes](#notes)
      - [Posts](#posts)
    - [Pages](#pages)
    - [Templates](#templates)
  - [Scripts](#scripts)
    - [Running locally](#running-locally)
    - [Build & check static](#build--check-static)
    - [Deploy to production](#deploy-to-production)
      - [Automatic Deploy](#automatic-deploy)

## Structure
I tried my best to differentiate what is content, and what is part of the blog structure.

### Config

In the root folder the `gatsby-config.js` configures the structure described below.

It also adds metadata to the blog like the Google Analytics TAG and my social network tags.

### Markup Folders
These folders represent the content shown in the blog.

#### Notes
Each note will have its own path created during build time. Its path is created based on the file name.

Each file must have a `frontmatter` identification. For example:

```
---
title: 'Accelerate'
language: 'en-US'
status: 'Reading'
coverPath: 'accelerate'
date: '2021-03-25'
---
```

- The `coverPath` must match the name of a cover within `covers`. If empty, there is a default image.
- Notes are sorted by Date. The date represents either the finish reading date or the last time I read it.

#### Posts
Each Post will have its own path created during build time. Its path is created based on the file name.

Each file must have a `frontmatter` identification. For example:
```
---
title: 'Book club'
tags: []
published: true
date: '2019-11-06'
---
```

### Pages
The `pages` folder contains the resources created statically. The file name represents the path you can access it in production. For example, you can access the `notes` pages in the `/notes` path.

A page might use a GraphQL query to load the content from the markup folders and render a list of this content.

### Templates
Templates are the base structure for dynamically created resources. For example, each Note and each Post follow the structure of, respectively, the `NoteTemplate` and the `PostTemplate`. Each dynamic resource is created during build time in the `gatsby-node.js` file.


## Scripts
Check the `package.json` to see all the scripts:

Install the dependencies with `npm i`.

### Running locally
Either `npm start` or `npm run develop`.

Gatsby will start the server at `localhost:8000` and the GraphQL API at `localhost:8000/___graphql`.

### Build & check static

```
  npm run build 
  npm run serve
```

### Deploy to production
In the root folder run `npm run deploy`.

The deploy command will create the static build and push it to the GitHub `production` branch. The *rroggia.github.io* repository has the `production` branch configured as the GH page.

#### Automatic Deploy
Pushing changes to master will automatically trigger a new deploy in production using the GH Actions. Check the `.github/main.yml` for more info about it.