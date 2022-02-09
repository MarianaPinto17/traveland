import Bali from "./views/Bali.js";
import Booking from "./views/Booking.js";
import Dubai from "./views/Dubai.js";
import Greece from "./views/Greece.js";
import Index from "./views/Index.js";
import Japan from "./views/Japan.js";
import Login from "./views/Login.js";
import London from "./views/London.js";
import Newyork from "./views/Newyork.js";
import Paris from "./views/Paris.js";
import Rome from "./views/Rome.js";

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
       { path: "/bookingbali.html", view: Bali},
       { path: "/bookinggreece.html", view: Greece},
       { path: "/bookingdubai.html", view: Dubai},
       { path: "/bookingjapan.html", view: Japan},
       { path: "/bookinglondon.html", view: London},
       { path: "/bookingny.html", view: Newyork},
       { path: "/bookingparis.html", view: Paris},
       { path: "/bookingrome.html", view: Rome},
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