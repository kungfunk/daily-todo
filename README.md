# daily TODO app

App to track tasks in an easy way

## Commands

Update typings

```
npx supabase login
npx supabase projects list
npx supabase gen types typescript --project-id [project_id] > src/lib/database.types.ts
```

## Wishlist

[] OpenAPI definition
[] Deploy somewhere (netlify probably)
[x] Auth and data in supabase
[x] Frontend with a lightweigth build step (vite)
[] Use react-query for caching
[] Use headless ui for components
[] Add MDX support for Tasks
