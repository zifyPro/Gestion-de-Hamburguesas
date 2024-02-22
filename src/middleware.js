import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/"],
  ignoredRoutes: [
    "/api/usuarios",
    "/api/usuarios/:id",
    "/api/Productos/:id",
    "/api/Ventas",
    "/api/Productos",
    "/api/mercadoPago",
    "/api/webhook",
    "http:localhost:3001/create_preference",
  ],
  requireAdminRoutes: ["/panelAdmin"], // Rutas que requieren ser administrador
  onUnauthorized: (req, res) => {
    res.status(401).send("No estás autorizado para acceder a esta ruta");
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
