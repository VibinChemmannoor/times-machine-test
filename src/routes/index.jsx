import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const routes = [
    {
        path : "/",
        element : <LoginPage />
    },
    {
        path : "/home",
        element : <HomePage />
    }
];

export default routes;