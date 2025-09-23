# FutureMode Technology - Project Setup

## Overview
This is a React + Vite frontend application for FutureMode Technology, successfully imported from GitHub and configured for the Replit environment.

## Project Architecture
- **Frontend**: React 18 + Vite 7.1.6
- **Routing**: Single-page application (Router.jsx exists but unused)
- **Styling**: CSS modules with dark/light theme support
- **UI Components**: Custom components with Lucide React icons
- **Build System**: Vite with React plugin

## Replit Configuration
- **Development Server**: Configured to run on 0.0.0.0:5000 with allowedHosts: "all"
- **Workflow**: "Frontend Development Server" running `npm run dev`
- **Deployment**: Autoscale deployment with `npm run build` and `npm run start`

## Dependencies Installed
- Core: React 18, React DOM
- Routing: wouter, @tanstack/react-query, react-helmet-async
- UI: lucide-react icons, @radix-ui/react-slot, class-variance-authority
- Dev Tools: Vite, ESLint, TypeScript types

## Recent Changes (2025-09-23)
- Added missing dependencies for routing and UI components
- Configured Vite server with host: "0.0.0.0", port: 5000, allowedHosts: "all"
- Set up development workflow for port 5000
- Added production start script: "vite preview --host 0.0.0.0 --port ${PORT:-5000}"
- Configured autoscale deployment with build and start commands
- Fixed Replit host proxy issues

## Application Structure
- Single-page layout with multiple sections: Navbar, Hero, About, Vision, Programs, Gallery, Contact, Footer
- Theme switching functionality (dark/light mode)
- Smooth scrolling navigation
- Responsive design with CSS modules

## Status
✅ Successfully imported and running in Replit environment
✅ Development server working on port 5000
✅ Deployment configuration complete
✅ All dependencies resolved