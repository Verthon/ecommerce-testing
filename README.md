This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Stack

* [Next.js](https://nextjs.org/)
* [Hypgraph CMS](https://hygraph.com/)
* [GrahpQL](https://graphql.org/)
* [Tailwind](https://tailwindcss.com/)
* [Storybook](https://storybook.js.org/)

## Adding new queries

1. Go to your Hypgraph account and generate the **query** in api playground
2. Copy and paste generated query to `app/api/graphql/queries.graphql`
3. Run `npm run generate-graphql` to generate code (types, handlers, hooks) for you automagically

## Adding new mutations

1. Go to your Hypgraph account and generate the **mutation** in api playground
2. Copy and paste generated query to `app/api/graphql/mutations.graphql`
3. Run `npm run generate-graphql` to generate code (types, handlers, hooks) for you automagically

## Getting Started

Install packages with proper Node.js version:

```bash
nvm use && npm i
```

Copy required envs for local developement:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
