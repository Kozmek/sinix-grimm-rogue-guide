# Deploy a separate Rogue guide to GitHub Pages

Publication requires the owner’s approval. This package has not been published. Do not replace the existing `kozmek-warrior-guide` repository.

1. Create a separate repository, for example **sinix-grimm-rogue-guide**, after approval. Choose public visibility only with the owner’s consent.
2. Upload the contents of this package to the new repository’s root: `index.html`, `assets`, `.nojekyll` and the supporting instructions/source/tests. Do not nest the whole package inside an additional directory.
3. Commit to `main`.
4. In Settings → Pages, choose Deploy from a branch, `main`, `/ (root)`, then save.
5. Open the URL GitHub reports after its Pages deployment completes. All app routes use a hash, so project-path hosting does not require URL rewrites.
6. Check the logo, Rogue image, search, one build edit, one saved note, and JSON backup/restore on the deployed address.
7. Import your exported progress backup on the new address. Browser-local progress does not automatically follow a different origin.

For updates, export a backup, edit and verify locally, review the research snapshot and upload only to the separate Rogue repository. Keep the recovered original v1 ZIP as a rollback artifact. Downloading this ZIP does not itself publish a website.

The package uses relative asset links and has no runtime secrets, network API dependencies, framework installation or server component. A custom domain is optional and not configured here.
