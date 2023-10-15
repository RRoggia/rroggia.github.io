# My blog
The intent is to have **very** simplistic blog where I can centralize information about me, things I read, and things I would like to share.

- [My blog](#my-blog)
  - [Writing Content](#writing-content)
      - [Reading Content Folder](#reading-content)
      - [Posts](#posts)
      - [Engineer Diary](#engineer-diary)
  - [App Structure](#app-structure)
    - [Config](#config)
    - [Pages](#pages)
    - [Templates](#templates)
    - [Covers](#covers)
      - [Download covers](#download-covers)
  - [Scripts](#scripts)
    - [Running locally](#running-locally)
    - [Build & check static](#build--check-static)
    - [Deploy to production](#deploy-to-production)
      - [Automatic Deploy](#automatic-deploy)

## Writing Content
To write content you need to add a markdown (`.md`) file to one of the folders described below. These folders represent the content shown in the blog.

### Reading Content
This is the main data source for the app. It contains the data used by the `/notes`, `/bookshelf`, `/book-dependencies` and `/books-timeline` pages. The markdown files start with a `frontmatter` in the beggining of the file. However, for files that only contains the `frontmatter` and no content it will not have its path generated. Therefore, you have to add a `html` to your `.md` and it will generate a path for it during build time. Its path is created based on the file name.

Each file must have a `frontmatter` identification. For example:

```
---
id: '9788544100882'
title: 'Scrum'
subtitle: 'A arte de fazer o dobro do trabalho na metade do tempo'
language: 'pt-BR'
status: 'Read'
coverPath: 'a-arte-de-fazer-o-dobro-do-trabalho-na-metade-do-tempo'
date: '2020-01-01'
edition: '1st'
publishDate: '2014-10-25'
authors: ['Jeff Sutherland']
translations: ['Natalie Gerhardt']
references:
 - <book-id>
---
```

- The `coverPath` must match the name of a cover within `covers`. If empty, there is a default image.
- Notes are sorted by Date. The date represents either the finish reading date or the last time I read it.
- If a note doesn't have a `title` or `html` (markup content) a note won't be created, but it will appear in the bookshelf

### Posts
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

### Engineer Diary
Similar to the other content it's also written in `.md`. The content structure mimics the folder/file structure in the `engineer-diary` folder. Adding a new file automatically generates all the paths to navigate to that file.

 Each file must have a `frontmatter` identification. For example:
```
---
title: 'Event Bridge'
---
```

The folder's name is used for its path.

## App Structure
I tried my best to differentiate what is content, and what is part of the blog structure.

### Config

In the root folder the `gatsby-config.js` configures the structure described below.

It also adds metadata to the blog like the Google Analytics TAG and my social network tags.

### Pages
The `pages` folder contains the resources created statically. The file name represents the path you can access it in production. For example, you can access the `notes` pages in the `/notes` path.

A page might use a GraphQL query to load the content from the markup folders and render a list of this content.

### Templates
Templates are the base structure for dynamically created resources. For example, each Note and each Post follow the structure of, respectively, the `NoteTemplate` and the `PostTemplate`. Each dynamic resource is created during build time in the `gatsby-node.js` file.

### Covers
The covers folder contains, well the covers for the reading content. You should name the file with the same name as the `coverPath` or vice versa. It supports both `.jpg` and `.png`.

#### Download covers
This is a python app that searches for covers url path for you in google. It's not working very well, but can be helpful if you are dumping a lot of files.

To use it run:

``` python
cd download-cover
pip install -r requirements.txt
python3 download_cover.py
```

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