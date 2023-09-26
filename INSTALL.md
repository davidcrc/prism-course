## Setup

```bash
npm i prisma -D
```

- Init

```bash
npx prisma init
```

or

- Init with sqlite

```bash
npx prisma init --datasource-provider sqlite
```

## Migrations

```bash
npx prisma migrate dev
```

## Add typescript

```bash
npm i typescript ts-node-dev @types/node -D
```

```bash
npx tsc --init
```

```json
"scripts": {
  "dev": "ts-node-dev --respawn src/index.ts"
},
```
