# React-Redux-Isomorphic-Starter

## Introduction
This is a repository that I made to be used as a starting point for any React
application. Feel free to clone or fork the repo.
To view the starting point, go to the following directory:

src/client/components/homepage

This is the location of the text you will see once you start up the app.

## Getting Started
Follow these instructions to get set up:

- npm i
- Open up three seperate terminal windows
- npm run build
- npm run webpack
- npm run start:dev

If you leave these processes running, webpack and babel will compile a new version
of your application and you can see the changes you've made without having to run
these commands again.

## Technologies
This project includes the following technologies that you can take advantage of:

- Axios
- Express
- Postcss
- React
- Redux
- React-Redux
- React-Router
- Redux-Logger

## How everything works
If you want some more information about how this app starts up and where to begin,
this is the section for you.

### Isomorphic Rendering
This application is using a technique known as isomorphic rendering. In isomorphic
rendering, the code that your server sends to any user who makes a request to your
app is nearly identical to the code that is being bundled together by Webpack.

If you look in src/server/routes/index.js, you can see how express is handling any
requests to this application. I won't go into great detail about what is going, but
the short story is that express is responding to any requests with a html string that
is being constructed on lines 15 - 34. On line 36, a method called renderToNodeStream
is taking the React application from the src/client/components/app/index.jsx file and
converting it into an html string. This string can then be sent as a stream to the
client's browser.

For more details, you can view the documentation on renderToNodeStream [here](https://reactjs.org/docs/react-dom-server.html).

On line 46, the html string is being closed off, and a bundle.js file is being sent
over as a script tag. This bundle file is being created by Webpack, and is the
result of Webpack creating one file from the client directory.

The code that is in bundle.js is nearly identical to the html string that was sent
over by express, with the one difference being that the App component is wrapped
in a BrowserRouter component rather than a StaticRouter component.

### Webpack and Babel
Again, I won't go into much detail about the configuration, if you want to understand
what is happening in the Webpack or Babel configuration, I would refer to the documentation;
it is well written and can go into more detail than I ever could.

I do want to mention that Webpack and Babel have been configured to allow for
you to import css files into your components, and Webpack will bundle all of your
css into one stylesheet, just like it bundles all your JavaScript into one file.
For an example, you can look in src/client/components/app/index.jsx. This will
allow for you to create your styles for each component separately, which will be
nice as your application grows ever larger.

### React Router
If you look in src/client/components/app/index.jsx, you can see how the application
how React Router is set up. If you want to add new routes to your application, you
can add more Routes within the Switch statement. Depending on the path of the url,
the Switch will render a different component. For more details and everything you
can do, I recommend reading the React Router documentation.
