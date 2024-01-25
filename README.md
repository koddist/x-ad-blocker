# X Ad Blocker

X Ad Blocker is a lightweight extension designed to help Firefox users hide ads from their timeline, particularly on Twitter.

## Local Testing
To locally test the extension, follow these steps:

1. Create a `.zip` file containing the required extension files (icons, `*.js`, `LICENSE`, `manifest.json`).
2. Open the following page in Firefox: `about:debugging#/runtime/this-firefox`.
3. Click on "Load Temporary Add-on" and choose the created `.zip` file.
4. Now, you can open `twitter.com` or `x.com` and test the extension live.

## Deployment
To deploy the extension, follow these steps:

1. Log in to the [Mozilla Add-on Developer Hub](https://addons.mozilla.org/en-US/developers/).
2. Open "My Add-ons" and update the current version with the new one.
3. Don't forget to update the version number in `manifest.json`.

Ensure a smooth user experience by keeping the extension up-to-date with the latest improvements and bug fixes.