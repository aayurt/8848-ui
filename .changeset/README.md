# Changesets

This repo uses [Changesets](https://github.com/changesets/changesets) to version
`@aayurt/8848-ui-*` packages and publish to npm.

## Adding a changeset

```sh
pnpm changeset
```

Pick the bump type (`patch` / `minor` / `major`) for each changed package and
describe the change. Commit the generated markdown file under `.changeset/`.

## Releasing

```sh
pnpm release   # build + changeset publish (CI needs NPM_TOKEN)
```

Docs (`@aayurt/8848-ui-docs`) is `private` and ignored for versioning.
