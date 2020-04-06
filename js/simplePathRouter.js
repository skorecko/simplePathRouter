/*
 * Created by Stefan Korecko, 2020
 */

//an array, defining the routes
const routes = [
  {
    hash: "main", //the part after '#' in the url (so-called anchor)
    target: "router-view", //id of the target html element
    content: "<h1>Main Content</h1>" //the content to be rendered to the target html element
  },

  {
    hash: "about",
    target: "router-view",
    content: "<h1>About page</h1>"
  }
];

/**
 * Does the routing as defined by the routes array
 * @param routes - the routes array, an array of objects with the properties hash, target and content
 */
function doRouting(routes) {
  let hash = window.location.hash;

  if (hash) {
    hash = hash[0] === "#" ? hash.substr(1) : hash;
    const matchingRoute = routes.find(route => route.hash === hash);

    if (matchingRoute) {
      document.getElementById(matchingRoute.target).innerHTML =
        matchingRoute.content;
    }

    /*
      here we do nothing if the matching route is not found.
      This allows other fragments that we do not want to be  processed by the router to work as usual.
      Otherwise ()
     */
  }
}

function onRouteChanged() {
  doRouting(routes);
}

window.addEventListener("hashchange", onRouteChanged);
