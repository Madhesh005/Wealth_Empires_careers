# Overview

This is a full-stack web application built with React and Express that appears to be a corporate website for doola (a business services company). The project uses a modern tech stack with TypeScript, Vite for frontend bundling, and shadcn/ui for component design. The application currently features a static homepage showcasing company values and services, with infrastructure set up for user authentication and database operations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Animation**: Framer Motion for interactive animations

## Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Storage Pattern**: Abstracted storage interface with in-memory implementation (MemStorage) for development
- **Session Management**: Prepared for PostgreSQL-based sessions using connect-pg-simple
- **API Design**: RESTful API structure with /api prefix routing

## Database Design
- **Schema**: Centralized in `shared/schema.ts` for type sharing between client and server
- **User Model**: Basic user table with id, username, and password fields
- **Validation**: Zod schemas for runtime validation integrated with Drizzle
- **Migrations**: Drizzle Kit for schema migrations to `./migrations` directory

## Development Workflow
- **Build System**: Vite for frontend, esbuild for backend production builds
- **Development**: Hot reload with Vite dev server and tsx for backend
- **Type Safety**: Shared types between frontend and backend via `shared/` directory
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)

## Authentication & Security
- **Prepared Infrastructure**: User storage interface and schema ready for implementation
- **Session Storage**: PostgreSQL session store configuration in place
- **Password Security**: Schema includes password field (hashing implementation pending)

The architecture follows a monorepo pattern with clear separation between client, server, and shared code, making it easy to maintain type safety across the full stack while allowing for independent deployment of frontend and backend components.

# External Dependencies

## Database
- **PostgreSQL**: Primary database using Neon Database serverless driver
- **Drizzle ORM**: Type-safe database operations and migrations
- **Environment**: Requires `DATABASE_URL` environment variable

## UI & Styling
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **Framer Motion**: Animation library for interactive user experiences

## Development Tools
- **Vite**: Frontend build tool and development server
- **TypeScript**: Type safety across the entire application
- **Replit Integration**: Runtime error overlay and cartographer for development in Replit environment

## Server Infrastructure
- **Express**: Web application framework for Node.js
- **Session Management**: PostgreSQL-based session storage ready for implementation
- **TanStack Query**: Client-side data fetching and caching

## Form & Validation
- **React Hook Form**: Form state management with validation
- **Zod**: Runtime type validation and schema definition
- **Hookform Resolvers**: Integration between React Hook Form and Zod