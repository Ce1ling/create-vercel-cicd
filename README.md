GitHub Actions CI/CD for Vercel.

## The problem being solved

The built-in CI/CD of Vercel must be used by Vercel team members. In this way, non-team members can also automate deployment without disrupting Vercel's built-in CI/CD(But you must have GitHub Actions permissions).

Therefore, this is a compatible deployment solution rather than a disruptive one.

## Current supported frameworks

- [Next.js](https://nextjs.org/)

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

### Next.js

**About environment variables**

In Next.js CI/CD, [natterstefan/action-next-env@v1](https://github.com/marketplace/actions/next-env) is used to load local `.env.* `files.

Since we typically use `.env.development` and `.env.production` to differentiate between environments, and this plugin requires an `.env` file, we need to add an empty `.env` file.
This way, it can correctly load `.env.development` and `.env.production`.

In Next.js, we typically use the `NEXT_PUBLIC_ENV` environment variable to differentiate environments. Therefore, you need to add `NEXT_PUBLIC_ENV=dev` in `.env.development` and `NEXT_PUBLIC_ENV=prod` in `.env.production` to distinguish between environments.
If needed, feel free to modify the environment variable name, and don't forget to update `NEXT_PUBLIC_ENV` in the `.yaml` file in the workflows.

For sensitive or rarely modified environment variables, it is recommended to add them directly in the project settings on Vercel so that all team members can access them. Variables that are frequently modified should be added to the local `.env.\*` files.

## Reference

- https://github.com/vercel/examples/tree/main/ci-cd/github-actions
