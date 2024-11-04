GitHub Actions CI/CD for Vercel.

## The problem being solved

The built-in CI/CD of Vercel must be used by Vercel team members. In this way, non-team members can also automate deployment without disrupting Vercel's built-in CI/CD(But you must have GitHub Actions permissions).

Therefore, this is a compatible deployment solution rather than a disruptive one.

## Current supported frameworks

- [Next.js](https://nextjs.org/)
- [Vite](https://vite.dev/)

## Getting Started

1. Run the command

```bash
npx @ce1ling/create-vercel-cicd
```

Or manual:

Copy the `.github/` folder from the `templates/nextjs/` folder to the root directory of your project.

2. Add the following secrets to Actions in the Settings/Secrets and variables of the project repository:

- `VERCEL_ORG_ID`: Vercel organization ID, find it in the team settings. Used to locate the team to deploy to.
- `VERCEL_PROJECT_ID`: Vercel current project ID on Vercel, find it in project settings. Used to locate the project to be deployed.
- `VERCEL_TOKEN`: Vercel account Token, add a new one in the account settings. Used to access the Vercel API.

3. Submit code/PR, and wait for deployment

## Notes

**About environment variables**

We typically use `.env.development` and `.env.production` files to differentiate environments, and manually switch environments for testing purposes. So please add environment variables in these two files (if they don't exist, create them) based on the framework:

- Next.js: `NEXT_PUBLIC_ENV=<prod | dev>`
- Vite: `VITE_ENV=<prod | dev>`

If needed, feel free to modify these variable names, but don't forget to update the `.yaml` file.

For sensitive or rarely modified environment variables, it is recommended to add them directly in the project settings on Vercel so that all team members can access them. Variables that are frequently modified should be added to the local `.env.*` files.

## Reference

- https://github.com/vercel/examples/tree/main/ci-cd/github-actions
