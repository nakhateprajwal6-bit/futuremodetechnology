#!/usr/bin/env node
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
import('./server/index.js');