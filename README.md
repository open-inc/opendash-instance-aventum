## Installing and Building

You will need Node (^18), npm (>=7) and pnpm (^8)

```
node --version
npm --version
npm i -g pnpm
```

and run the npm install for CI command:

```
pnpm i
```

To start a development web server which listens on port 8080 and listens for code changes to rebuild the website run the command

```
pnpm run start
```

To create a production deployment, which will end up in the ./dist folder, run the command.

```
pnpm run build
```

Put the content of the `./dist` folder on a web server, make sure to have a not-found fallback on `index.html` to allow client side routing.
