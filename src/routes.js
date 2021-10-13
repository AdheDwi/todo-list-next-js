const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("index", "/");
routes.add("detail", "/detail/:id");
routes.add("wishlist", "/wishlist");
routes.add("cart", "/cart");
routes.add("login", "/login");
