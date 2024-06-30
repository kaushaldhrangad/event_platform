import { ClerkMiddlewareAuth, ClerkMiddlewareOptions, authMiddleware, clerkMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing',
  ]
} as ClerkMiddlewareOptions);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};