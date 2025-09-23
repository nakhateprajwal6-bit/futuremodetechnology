# FutureMode Technology - Project Setup

## Overview
This is a React frontend application for FutureMode Technology, showcasing their robotics, AI/ML, IoT, and technology services. The application is built with React + Vite and configured to run in the Replit environment.

## Recent Changes
- 2025-09-23: Initial project import and setup
  - Installed missing dependencies (wouter, @tanstack/react-query, react-helmet-async)
  - Configured Vite to work in Replit (host: 0.0.0.0, port: 5000)
  - Set up Frontend Development Server workflow
  - Configured deployment settings for autoscale deployment

## Project Architecture
- **Frontend Framework**: React 18 with Vite
- **Routing**: Wouter (though currently using single-page layout)
- **Styling**: CSS modules with component-specific stylesheets
- **State Management**: @tanstack/react-query (available but not actively used yet)
- **Icons**: Lucide React
- **Build Tool**: Vite 7.1.6

## Current Status
- ✅ Development server running on port 5000
- ✅ All dependencies installed
- ✅ Replit environment configuration complete
- ✅ Deployment settings configured
- 📱 Single-page application with sections: Hero, About, Vision, Programs, Gallery, Contact

## Architecture Details
- Single-page application layout in App.jsx
- Component-based structure in src/components/
- Individual CSS files for styling
- Asset images stored in src/assets/
- Router.jsx exists but not currently used (contains setup for wouter routing)