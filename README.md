# Portfolio Website

Personal portfolio website for Mihnea Ionita - Frontend Developer with 7 years of professional experience.

Built with [Gatsby v4][gatsby] and [Netlify CMS][netlifycms].

## 🚀 Features

- Portfolio project showcase with custom ordering
- Professional About page and Contact form
- Responsive web design with dark/light mode support
- Project pagination with proper routing
- SEO optimized with OpenGraph and Twitter Cards
- Search functionality
- Netlify CMS for content management
- Modern tech stack: Gatsby v4, React, Theme UI

## 📋 Table of Contents

- [Development Setup](#development-setup)
- [Available Commands](#available-commands)
- [Project Structure](#project-structure)
- [Content Management](#content-management)
- [Deployment](#deployment)

## 🛠 Development Setup

### Prerequisites

- Node.js 14.15.0 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio

# Install dependencies
npm install
```

### Local Development

```bash
# Start the development server
npm run develop
# or
npm start

# Site will be available at http://localhost:8000
# GraphiQL will be available at http://localhost:8000/___graphql
```

### Local CMS Development

To use Netlify CMS locally:

```bash
# Terminal 1: Start CMS proxy server
npx netlify-cms-proxy-server

# Terminal 2: Start Gatsby development server
npm run develop

# Access CMS at http://localhost:8000/admin
```

## 📦 Available Commands

```bash
npm install                    # Install dependencies
npm run develop               # Start development server at http://localhost:8000
npm start                     # Alias for develop
npm run build                 # Build site with page logging (outputs to /public)
npm run serve                 # Serve production build locally
npm run clean                 # Clean Gatsby cache and public directories
npm run format                # Format code with Prettier
```

## 📁 Project Structure

```
.
├── src/
│   ├── components/          # React components
│   ├── content/
│   │   ├── pages/          # Page content (index, about, contact)
│   │   └── posts/          # Blog/project posts
│   ├── templates/          # Page templates
│   └── util/               # Site metadata and configuration
├── static/
│   ├── admin/              # Netlify CMS configuration
│   └── assets/             # Images and static files
├── gatsby-config.js        # Gatsby configuration
├── gatsby-node.js          # Dynamic page generation
└── package.json
```

## ✏️ Content Management

### Adding/Editing Projects

Projects are managed as blog posts in `src/content/posts/`. Each project is a markdown file with frontmatter:

```markdown
---
template: blog-post
title: Project Name
slug: /projects/project-name
date: 2024-01-01 00:00
description: Project description
featuredImage: /assets/image.jpg
---

Project content here...
```

**Note:** Projects are ordered by date (descending). To reorder projects, update the `date` field.

### Key Project Order

The portfolio displays projects in this priority order:
1. War and Peace
2. eRepublik
3. Game of Nations
4. eRepublik Labs
5. Bearerine
6. Other projects

### Editing via Netlify CMS

Access the CMS at `/admin` to manage content through a visual interface.

## 🚀 Deployment

The site is configured for Netlify deployment:

- **Build command:** `npm run build`
- **Publish directory:** `public`
- **Node version:** 14.15.0 (specified in netlify.toml)

Push to the main branch to trigger automatic deployment.

## 🔧 Tech Stack

- **Framework:** Gatsby v4
- **UI:** React, Theme UI
- **CMS:** Netlify CMS
- **Styling:** SCSS, Theme UI
- **Search:** ElasticLunr
- **Deployment:** Netlify
- **Image Processing:** gatsby-plugin-image, gatsby-plugin-sharp

## 📝 Notes

- Projects are sorted by date in descending order
- Dates are hidden from the UI but used for sorting
- Pagination displays 9 projects per page
- GraphQL is used for data querying
- The site supports dark/light mode theming

## 📄 License

This project is based on gatsby-starter-foundation.

---

Built with [Gatsby](https://gatsbyjs.org) and [Netlify CMS](https://www.netlifycms.org)

[gatsby]: https://gatsbyjs.org
[netlifycms]: https://www.netlifycms.org
