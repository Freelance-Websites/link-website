This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running the site locally

```bash
npm run dev:all
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running the CMS locally

1. If it's not there, add `local-backend: true` to the `public/config.yml` file: See instructions [here](https://decapcms.org/docs/working-with-a-local-git-repository/);
2. Run `npx decap-server` in a separate tab, along with `npm run dev:all` if it's not already running;
3. The admin interface can be found in `http://localhost:3000/admin`.
