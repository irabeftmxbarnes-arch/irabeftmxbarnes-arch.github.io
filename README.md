# Vite React Shadcn TypeScript

A modern e-commerce website built with Vite, React, TypeScript, and Shadcn UI.

## Development

Run the development server:

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:5000`

## Building for Production

Build the application:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deploying to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup Instructions:

1. Go to your GitHub repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push your code to the `main` branch
5. The GitHub Action will automatically build and deploy your site

### Manual Deployment:

To build for GitHub Pages manually:

```bash
npm run deploy
```

This will create a production build in the `dist` folder that you can upload to GitHub Pages.

## Configuration

The Vite configuration is set up for GitHub Pages deployment with:
- Base URL: `/` (root directory)
- Build output: `dist` folder
- Server host: `0.0.0.0` (allows external connections)
- Server port: `5000`

## Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # React components
│   └── ui/         # Shadcn UI components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
├── App.tsx         # Main App component
├── main.tsx        # Application entry point
└── index.css       # Global styles
```

## Technologies

- **Vite** - Fast build tool and dev server
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Shadcn UI** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and caching

## Original Project Info

This project was originally created with Lovable.

**Original URL**: https://lovable.dev/projects/d0cffbc3-15ef-4ef9-beab-dd1617a29993
