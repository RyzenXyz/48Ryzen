# Project Overview

## Overview

This is a full-stack web application showcasing "The 48 Laws of Power" by Robert Greene. The application provides an interactive way to explore and learn about each of the 48 laws through a modern, visually appealing interface. Users can browse all laws, search through them, filter by categories, and view detailed information about each law including historical examples and key principles.

## User Preferences

Preferred communication style: Simple, everyday language.
Design approach: Mobile-first design
UI preferences: Removed "Get the Book" and "Author's Other Works" buttons as requested

## System Architecture

### Frontend Architecture

The frontend is built using **React with TypeScript** and follows a modern component-based architecture:

- **Routing**: Uses Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management with local React state for UI
- **Styling**: Tailwind CSS with a custom design system featuring dark themes and sophisticated color palettes
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **Animation**: Framer Motion for smooth transitions and interactive animations
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture

The backend follows a **RESTful API design** with Express.js:

- **Framework**: Express.js with TypeScript for type safety
- **Data Storage**: In-memory storage using a Map-based implementation (MemStorage class)
- **API Design**: RESTful endpoints for CRUD operations on laws data
- **Data Validation**: Zod schemas for runtime type validation
- **Development**: Hot module reloading with Vite integration in development mode

### Database Schema

Currently uses **Drizzle ORM** with PostgreSQL schema definitions but implements in-memory storage:

- **Laws Table**: Contains id, title, descriptions, principles, examples, key points, category, and icon
- **Schema Validation**: Drizzle-Zod integration for type-safe database operations
- **Migration Ready**: Configured for PostgreSQL with migration support via Drizzle Kit

### API Structure

RESTful API endpoints:
- `GET /api/laws` - Retrieve all laws
- `GET /api/laws/:id` - Get specific law by ID
- `GET /api/laws/search/:query` - Search laws by text
- `GET /api/laws/category/:category` - Filter laws by category

### Component Organization

- **Pages**: Route-level components (Landing, Laws, LawDetail, NotFound)
  - Landing: Mobile-first landing page with hero section, features, and about content
  - Laws: Dedicated page for browsing all laws with search and filtering
  - LawDetail: Individual law pages with mobile-optimized layout
- **Components**: Reusable UI components (LawCard, SearchFilter)
- **UI Components**: Shared design system components from shadcn/ui
- **Shared**: Type definitions and schemas shared between client and server

### Development Workflow

- **TypeScript**: Strict type checking across the entire codebase
- **ESBuild**: Fast production builds for the server
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Development Server**: Integrated Vite dev server with Express API

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with modern hooks and concurrent features
- **Express.js**: Backend web framework for Node.js
- **TypeScript**: Type safety across the entire application
- **Vite**: Build tool and development server

### Database and ORM
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **Drizzle Kit**: Database migration and introspection tool

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible, unstyled UI primitives
- **shadcn/ui**: Pre-built component library based on Radix UI
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library

### State Management and Data Fetching
- **TanStack React Query**: Server state management and caching
- **Wouter**: Lightweight routing library for React

### Development Tools
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer
- **Replit Plugins**: Development environment integration tools

### Form and Validation
- **React Hook Form**: Performant forms with minimal re-renders
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Validation resolver for React Hook Form

The application is designed to be easily deployable on Replit with potential for database integration when moving from development to production.