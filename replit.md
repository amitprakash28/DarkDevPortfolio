# replit.md

## Overview

This is a full-stack web application built with a modern tech stack featuring a React frontend and Express.js backend. The project appears to be a personal portfolio website showcasing professional experience, skills, and contact information. It follows a monorepo structure with separate client and server directories, shared schemas, and a comprehensive UI component library.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Data Storage
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with schema-first approach
- **Migrations**: Drizzle Kit for database migrations
- **Development Storage**: In-memory storage implementation for rapid development

### Project Structure
- **Monorepo Layout**: Separate `client/`, `server/`, and `shared/` directories
- **Shared Schema**: Common TypeScript types and Zod schemas in `shared/schema.ts`
- **Component Organization**: UI components in `client/src/components/ui/` with business components in `client/src/components/`
- **Asset Management**: Separate alias for attached assets

### Development Environment
- **Hot Reload**: Vite HMR with Replit-specific plugins
- **Type Safety**: Strict TypeScript configuration across all packages
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`)
- **Error Handling**: Runtime error overlay in development

## External Dependencies

### Database & Storage
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **connect-pg-simple**: PostgreSQL session store for Express

### UI & Design System
- **@radix-ui/***: Comprehensive collection of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for component styling
- **lucide-react**: Icon library

### Development & Build Tools
- **drizzle-kit**: Database migration and introspection tool
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds

### Form & Validation
- **react-hook-form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **zod**: TypeScript-first schema validation

### State Management & Data Fetching
- **@tanstack/react-query**: Powerful data synchronization for React
- **wouter**: Minimalist routing library

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development environment enhancements