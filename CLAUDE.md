# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Gatsby v4 and Netlify CMS. It's based on the gatsby-starter-foundation template and features a blog, customizable pages, dark/light mode themes, and content management through Netlify CMS.

## Development Commands

### Setup and Development
```bash
npm install                    # Install dependencies
npm run develop               # Start development server at http://localhost:8000
npm start                     # Alias for develop
```

### Local CMS Development
To use Netlify CMS locally:
```bash
npx netlify-cms-proxy-server  # Start CMS proxy server (in one terminal)
npm run develop               # Start Gatsby dev server (in another terminal)
```
Then access the CMS at `http://localhost:8000/admin`

### Building and Production
```bash
npm run build                 # Build site with page logging (outputs to /public)
npm run serve                 # Serve production build locally
npm run clean                 # Clean Gatsby cache and public directories
```

### Code Quality
```bash
npm run format                # Format code with Prettier
```

## Architecture

### Content Management Structure

**Content is managed through Netlify CMS** (config: `static/admin/config.yml`):
- **Posts**: Markdown files in `src/content/posts/` with frontmatter (template, title, slug, date, description, featuredImage)
- **Pages**: Three main pages in `src/content/pages/`: index.md (home), about.md, contact.md
- **Settings**: Site metadata in `src/util/site.json`, social icons in `src/util/socialmedia.json`
- **Themes**: Color schemes in `src/util/default-colors.json` and `src/util/dark-theme-colors.json`

### Page Generation (gatsby-node.js)

The `createPages` API dynamically generates pages from markdown:
1. Queries all markdown files sorted by date
2. Creates individual pages using template specified in frontmatter (e.g., `blog-post`, `about-page`)
3. Passes previous/next context for blog post navigation
4. Generates paginated blog list pages at `/projects` (9 posts per page)

**Template mapping**: Frontmatter `template` field (e.g., "blog-post") maps to `src/templates/blog-post.js`

### Component Architecture

**Layout System** (`src/components/layout.js`):
- Root layout component wrapping all pages
- Integrates: Header (Logo + Navigation + Search), Theme switcher, Footer
- Uses Theme UI for responsive breakpoint styling

**Key Components**:
- `src/components/theme.js` - Dark/light mode toggle
- `src/components/search.js` - ElasticLunr-powered search (indexes title, slug, template)
- `src/components/seo.js` - SEO metadata handling
- `src/templates/*.js` - Page templates for different content types

**GraphQL Data Layer**:
- Content sourced from `src/content/` and `static/assets/`
- Search index built via `@gatsby-contrib/gatsby-plugin-elasticlunr-search`
- Images processed with gatsby-plugin-image and gatsby-plugin-sharp

### Styling System

**Theme UI** (`src/gatsby-plugin-theme-ui/index.js`):
- Centralized theme configuration with color modes
- Colors defined in JSON files, imported and merged with theme
- Uses `lightness()` from `@theme-ui/color` for color variants
- Supports dark mode through `modes.dark` object
- SCSS files in `src/assets/scss/` for additional styling

**Color customization**: Users can change theme colors via CMS (Settings > Appearance), which updates the JSON files

### Plugin Configuration (gatsby-config.js)

Key plugins and their roles:
- **gatsby-source-filesystem**: Sources content and assets
- **gatsby-transformer-remark**: Processes markdown with remark plugins (images, code highlighting with Prism, responsive iframes)
- **gatsby-plugin-netlify-cms**: Integrates Netlify CMS admin interface
- **gatsby-plugin-theme-ui**: Enables Theme UI styling system
- **gatsby-plugin-image**: Modern image optimization
- **@gatsby-contrib/gatsby-plugin-elasticlunr-search**: Client-side search

Site metadata loaded from `src/util/site.json` and injected into siteMetadata.

## Common Development Patterns

### Adding a New Blog Post
Posts must be created through Netlify CMS or manually as markdown files in `src/content/posts/` with frontmatter matching the CMS schema in `static/admin/config.yml`.

### Modifying Theme Colors
Edit `src/gatsby-plugin-theme-ui/index.js` for code-level changes, or use CMS Settings > Appearance for user-facing color customization.

### GraphQL Queries
Access GraphiQL at `http://localhost:8000/___graphql` during development to explore the data layer and test queries.

### Working with Templates
When adding new content types, create corresponding template in `src/templates/` and reference it in the markdown frontmatter's `template` field.

## Deployment

The site is configured for Netlify deployment:
- Build command: `npm run build`
- Publish directory: `public`
- Node version: 14.15.0 (specified in netlify.toml)
- Netlify CMS uses Git Gateway backend for authentication
