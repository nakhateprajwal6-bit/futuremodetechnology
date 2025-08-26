# Overview

Future Mode Technology is a modern educational technology platform that showcases educational programs through an interactive web application. The platform serves as a marketing and information site for an educational institution, featuring program listings, contact forms, a chat interface, and comprehensive information about the organization's vision and offerings.

## Recent Changes (August 26, 2025)
- Successfully imported and customized the Future Mode Technology website from GitHub repository
- Built comprehensive educational technology website with modern React/TypeScript architecture
- Implemented 6 core sections: Hero, About, Vision/Mission, Programs, Gallery, Contact, Footer
- Added interactive chatbot with backend integration for student inquiries
- Fixed React Helmet provider integration and duplicate key warnings
- Customized professional blue/purple color scheme with responsive design

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using React with TypeScript, leveraging modern development practices and a component-based architecture. The application uses Vite as the build tool and development server, providing fast hot module replacement and optimized builds.

**Key Frontend Decisions:**
- **React Router**: Uses Wouter for lightweight client-side routing
- **UI Framework**: Implements shadcn/ui component library with Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

The frontend follows a modular component structure with reusable UI components, page-level components, and utility functions organized in separate directories.

## Backend Architecture
The backend uses Express.js with TypeScript in a minimalist REST API architecture. The server handles contact form submissions, chat message storage, and serves static assets.

**Key Backend Decisions:**
- **Framework**: Express.js for lightweight HTTP server functionality
- **Data Layer**: In-memory storage implementation with interface abstraction for future database integration
- **API Design**: RESTful endpoints for contacts and chat functionality
- **Development Setup**: Hot reloading with tsx for TypeScript execution

The storage layer uses an interface-based design pattern, allowing easy switching from in-memory storage to a database solution without changing business logic.

## Database Schema
The application defines three main data entities using Drizzle ORM:

**Tables:**
- **users**: User authentication with username/password
- **contacts**: Contact form submissions with personal information and program interests
- **chat_messages**: Chat system messages with bot/user identification

The schema uses PostgreSQL-compatible types and includes automatic UUID generation for primary keys and timestamp fields for data tracking.

## Authentication & Authorization
Currently implements a basic user schema foundation but authentication middleware is not yet active in the codebase. The system is prepared for future authentication implementation with user tables and password storage capabilities.

## Design System
The application implements a comprehensive design system using:
- **Component Library**: shadcn/ui for consistent, accessible components
- **Theming**: CSS custom properties for light/dark mode support
- **Typography**: Custom font stack with Inter, Georgia, and Menlo
- **Color System**: Semantic color tokens for primary, secondary, and accent colors
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

# External Dependencies

## Core Framework Dependencies
- **React 18**: Frontend framework with modern hooks and concurrent features
- **Express.js**: Backend web framework for Node.js
- **TypeScript**: Type safety across frontend and backend
- **Vite**: Build tool and development server with HMR

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library for consistent iconography

## Data Management
- **Drizzle ORM**: Type-safe PostgreSQL ORM
- **Neon Database**: Serverless PostgreSQL database service
- **TanStack Query**: Server state management and caching
- **Zod**: Schema validation and type inference

## Development Tools
- **Replit**: Cloud development environment integration
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer

## Database Integration
The application is configured to use PostgreSQL through Neon's serverless platform, with Drizzle providing the ORM layer and migration management. Connection is established via DATABASE_URL environment variable.

## Third-Party Services
- **Unsplash**: Image hosting for gallery and hero sections
- **Google Fonts**: Web font delivery for typography
- **Replit Services**: Development environment and deployment platform integration