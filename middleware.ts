import { clerkMiddleware } from "@clerk/nextjs/server"

// The simplest form of clerkMiddleware protects all routes by default.
// Public routes need to be specified via environment variables
// or using the `publicRoutes` option in clerkMiddleware().
// Let's rely on environment variables for now.

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)|api/webhooks).*)",
    // Always run middleware on API routes
    "/(api|trpc)(.*)",
  ],
}
