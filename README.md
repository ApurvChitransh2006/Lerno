# Lerno

A modern full-stack web application built with Next.js, TypeScript, and Prisma. Features type-safe API endpoints with tRPC, authentication powered by Better Auth, and a responsive UI built with Tailwind CSS and Radix UI components.

## Tech Stack

- **Frontend & Framework**: [Next.js 15](https://nextjs.org) with React 19
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **API**: [tRPC](https://trpc.io) with [React Query](https://tanstack.com/query)
- **Database**: [PostgreSQL](https://www.postgresql.org) with [Prisma](https://www.prisma.io)
- **Authentication**: [Better Auth](https://better-auth.com)
- **UI Components**: [Radix UI](https://www.radix-ui.com) with [shadcn/ui](https://ui.shadcn.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Code Quality**: [Biome](https://biomejs.dev) for linting and formatting
- **Database Management**: [Prisma Studio](https://www.prisma.io/studio)

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── api/
│       ├── auth/          # Authentication endpoints
│       └── trpc/          # tRPC API routes
├── server/
│   ├── api/
│   │   ├── root.ts        # Root router
│   │   ├── trpc.ts        # tRPC setup
│   │   └── routers/       # API routers
│   ├── better-auth/       # Auth configuration
│   └── db.ts              # Database client
├── trpc/
│   ├── server.ts          # Server-side tRPC
│   ├── react.tsx          # React hooks
│   └── query-client.ts    # React Query setup
├── lib/
│   └── utils.ts           # Utility functions
└── styles/
    └── globals.css        # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 11+ (or your preferred package manager)
- PostgreSQL database

### Installation

1. **Clone the repository and install dependencies:**

```bash
npm install
```

2. **Set up environment variables:**

Create a `.env.local` file in the root directory with:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/lerno"
```

3. **Set up the database:**

```bash
npm run db:push
```

This command pushes the Prisma schema to your PostgreSQL database.

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

The dev server uses Next.js Turbo mode for faster hot reloads.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbo |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run preview` | Build and preview production locally |
| `npm run check` | Check code with Biome |
| `npm run check:write` | Fix code style issues with Biome |
| `npm run check:unsafe` | Apply unsafe code transformations |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run db:push` | Push Prisma schema to database |
| `npm run db:generate` | Create and apply database migrations |
| `npm run db:migrate` | Apply pending migrations |
| `npm run db:studio` | Open Prisma Studio UI |

## Database Setup

### Local Development Database

To start a PostgreSQL database locally (requires Docker):

```bash
bash start-database.sh
```

### Prisma Commands

- **Create migration**: `npm run db:generate` - Creates a new migration based on schema changes
- **Apply migrations**: `npm run db:migrate` - Applies all pending migrations
- **Push schema**: `npm run db:push` - Directly pushes schema to database (use for development only)
- **View/edit data**: `npm run db:studio` - Opens Prisma Studio for visual data management

## API Architecture

### tRPC Setup

The project uses tRPC for end-to-end type safety between frontend and backend:

- **Server routers**: `src/server/api/routers/`
- **Client hooks**: `src/trpc/react.tsx`
- **Query client**: `src/trpc/query-client.ts`

All API calls are type-safe with full TypeScript intellisense support.

### Authentication

Authentication is configured with Better Auth:

- **Config**: `src/server/better-auth/config.ts`
- **Client**: `src/server/better-auth/client.ts`
- **Routes**: `src/app/api/auth/[...all]/route.ts`

Supports multiple authentication providers and session management.

## Code Quality

### Biome Configuration

The project uses Biome for linting and formatting:

```bash
npm run check          # Check for issues
npm run check:write    # Fix issues automatically
```

Configuration is in `biome.jsonc`.

### Type Checking

Run TypeScript type checking:

```bash
npm run typecheck
```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/lerno"

# Better Auth (if using OAuth providers)
# Add provider-specific variables as needed
```

## Production Deployment

1. **Build the application:**

```bash
npm run build
```

2. **Start the production server:**

```bash
npm start
```

Ensure all environment variables are properly configured in your production environment.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run check:write` to format code
4. Run `npm run typecheck` to check types
5. Submit a pull request

## License

This project is private and confidential.

## Support

For issues, questions, or suggestions, please open an issue in the project repository.
