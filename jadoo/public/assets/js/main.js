import Booking from "./views/Booking.js";
import Index from "./views/Index.js";
import Login from "./views/Login.js";

const navigateTo = url => {
    history.pushState(null,null, url);
    router();
};

const router = async () => {
    const routes = [
       { path: "/", view: Index },
       { path: "/index.html", view: Index},
       { path: "/booking.html", view: Booking},
       { path: "/login.html", view: Login},
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    //if(!match){
    //    match = {
    //        route: routes[0],
    //        isMatch: true
    //    };
    //}

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    //console.log(match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});