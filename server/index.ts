import express from "express";
import { registerRoutes } from "./routes.js";
import { setupVite, serveStatic, log } from "./vite.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ===== Logging Middleware =====
app.use((req, res, next) => {
  const start = Date.now();
  let capturedJsonResponse: any = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (req.path.startsWith("/api")) {
      let logLine = `${req.method} ${req.path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      if (logLine.length > 80) logLine = logLine.slice(0, 79) + "…";
      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  // ===== Error Handler =====
  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // ===== Vite in Dev / Static in Prod =====
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ===== Server Config =====
  const port = parseInt(process.env.PORT || "5000", 10);
  const host = process.env.HOST || "0.0.0.0";

  server.listen({ port, host }, () => log(`🚀 Server running on http://${host}:${port}`));
})();
