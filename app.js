const http = require("http");
const path = require("path");
const {
    mainRouteController,
    gameRouteController,
    defaultRouteController,
    voteRouteController,
} = require("./controllers");

const PORT = 3005;

const server = http.createServer((req, res) => {
    const url= req.url;
switch (url) {
    case "/":
        mainRouteController(res, "/index.html", ".html");
    break;
    case "game":
        gameRouteController(res, "/index.html", ".html");
    break;
    case "vote":
        voteRouteController(res, "/index.html", ".html");
    break;
    default:
        defaultRouteController(res, url);
        break;
    }
});

server.listen(PORT);