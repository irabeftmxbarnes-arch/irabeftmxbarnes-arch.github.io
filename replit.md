# RetailHub E-commerce Platform

## Overview

RetailHub is a modern e-commerce website built as a single-page application (SPA) using React, TypeScript, Vite, and Shadcn UI. The application provides a complete online shopping experience with product browsing, categorization, cart management, and informational pages. It's designed to be deployed as a static site to GitHub Pages with Google AdSense integration for monetization.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Build System & Framework**
- **Vite** is used as the build tool and development server, chosen for its fast Hot Module Replacement (HMR) and optimized production builds
- **React 18.3** with TypeScript provides the component-based UI framework
- **React Router** (BrowserRouter) handles client-side routing for navigation between pages
- The application runs on port 5000 in development mode

**UI Component System**
- **Shadcn UI** provides the design system foundation with pre-built, accessible components built on Radix UI primitives
- **Tailwind CSS** handles styling with a utility-first approach and custom CSS variables for theming
- **Class Variance Authority (CVA)** manages component variants
- Components follow the Shadcn pattern: stored in `src/components/ui/` with aliases configured via `@/` path mapping

**State Management**
- **React Context API** manages global application state:
  - **CartContext** (`src/contexts/CartContext.tsx`) handles shopping cart state with add/remove/update operations
  - Cart state is persisted to localStorage for session continuity
  - Cart count badge in header updates in real-time
- **TanStack Query (React Query)** provides server state management capabilities (though not actively used for data fetching in current implementation)

**Styling Approach**
- HSL color system defined via CSS variables in `src/index.css` for consistent theming
- Design tokens include primary/secondary colors, gradients, shadows, and transitions
- Theme supports light mode (dark mode infrastructure exists via `next-themes` but not actively implemented)
- Responsive design using Tailwind's breakpoint system

### Application Structure

**Routing Architecture**
The application uses client-side routing with the following pages:
- **Home (/)**: Hero section, featured products with "Add to Cart", category overview
- **Shop (/shop)**: Complete product catalog with filters and "Add to Cart" buttons
- **Categories (/categories)**: Category browsing with real product images as backgrounds
- **Product Detail (/product/:id)**: Individual product pages with full descriptions, features, specifications, and "Add to Cart"
- **Cart (/cart)**: Shopping cart with quantity adjustment, item removal, and checkout flow
- **About (/about)**: Company information
- **Contact (/contact)**: Contact form and information
- **404 (*)**: Catch-all route for non-existent pages

The catch-all route (`*`) is intentionally placed last to ensure custom routes are matched first.

**Layout System**
- Persistent `Layout` component wraps all pages with header navigation
- Header includes logo, navigation menu, search bar, user icon, and cart icon with badge
- Mobile-responsive navigation using Sheet component (slide-out menu)

**Data Management**
- **Centralized Product Data** in `src/lib/products.ts`:
  - 12 products across 4 categories (Electronics, Fashion, Home, Sports)
  - Complete product metadata: name, price, originalPrice, category, images, descriptions, ratings, reviews, features, and specifications
  - Helper functions: `getProductById()` and `getProductsByCategory()`
  - TypeScript interfaces ensure type safety across the application
- **Shopping Cart Functionality**:
  - Full CRUD operations: add, remove, update quantity
  - Real-time cart count badge in header
  - Toast notifications for cart actions
  - Empty cart state with call-to-action
  - Order summary with subtotal, tax, and total calculations
  - Product images and details displayed in cart

### External Dependencies

**UI & Component Libraries**
- **Radix UI**: Headless UI primitives for accessibility and keyboard navigation (@radix-ui/* packages)
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel/slider functionality
- **date-fns**: Date manipulation utilities
- **react-day-picker**: Calendar/date picker component
- **cmdk**: Command palette component
- **input-otp**: OTP input component
- **vaul**: Drawer component

**Form Management**
- **React Hook Form** with **@hookform/resolvers** for form validation
- **Zod** (implied via resolvers) for schema validation

**Utilities**
- **clsx** and **tailwind-merge**: Class name merging utilities
- **class-variance-authority**: Component variant management

**Developer Experience**
- **TypeScript**: Type safety with relaxed compiler settings (strict mode disabled)
- **ESLint**: Code linting with TypeScript support
- **PostCSS & Autoprefixer**: CSS processing
- **lovable-tagger**: Development-only component tagging plugin

**External Services**
- **Google AdSense**: Monetization via ad placements (client ID: ca-pub-8741441060689041)
- Configured in `index.html` and `public/ads.txt`
- **GitHub Pages**: Static site hosting with automated deployment via GitHub Actions

**SEO & Social**
- Open Graph meta tags for social media sharing
- Twitter card integration
- Robots.txt configured for search engine crawling
- Semantic HTML and meta descriptions

**Deployment Configuration**
- Base URL configured for root deployment (`/`)
- Build outputs to `dist/` directory
- Separate development and production build modes
- GitHub Actions workflow (`.github/workflows/deploy.yml`) for automated deployment to GitHub Pages
- Server configured to run on `0.0.0.0:5000` for compatibility with Replit environment

## Recent Changes (October 31, 2025)

### Shopping Cart Implementation
- Created `CartContext` with React Context API for global cart state management
- Implemented add to cart, remove from cart, and update quantity functionality
- Added localStorage persistence for cart data
- Integrated cart functionality across all pages (Home, Shop, ProductDetail, Cart)
- Added real-time cart count badge in header navigation
- Implemented toast notifications for cart actions

### Product Data Enhancement
- Centralized all product data in `src/lib/products.ts`
- Added comprehensive product descriptions (100+ words per product)
- Included product features and specifications for all 12 products
- Created helper functions for data access

### UI/UX Improvements
- Updated Categories page to display real product images instead of emoji icons
- Product images now serve as background overlays with gradient effects
- All "Add to Cart" buttons are now functional across the application
- Improved cart page with proper quantity controls and item removal
- Added empty cart state with call-to-action

### GitHub Pages Configuration
- Updated Vite config for GitHub Pages deployment with base URL `/`
- Created GitHub Actions workflow for automated deployment
- Added `.nojekyll` file for proper GitHub Pages routing