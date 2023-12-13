This is a sample project highlighting how can preview environments be implemented using GitHub Actions, Neon & Vercel.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setup

1. Create GitHub repository
1. Create Vercel Project
1. Create a project in Neon
1. Copy values to .env.local
  - DATABASE_URL
1. Copy values to GitHub
  - DATABASE_URL
  - DIRECT_DATABASE_URL
  - PG_USERNAME
  - PG_PASSWORD
  - NEON_API_KEY
  - NEON_PROJECT_ID
  - VERCEL_TOKEN
1. Copy values to Vercel's environment
  - DATABASE_URL
1. Update Vercel > Settings > Git > Ignored build step > Don't build anything
1. Create a branch `dev-sam` for local development
  1. Copy values to .env.local

When you've set all of this up, let's seed the database by running `npm run db:reset`
