import { Redirect, Route } from "react-router";
import useAuth from "../../auth/useAuth";

export default function PublicRouters({ component: Component, ...rest }) {
const auth = useAuth();
    return (
        <Route {...rest}>
            {!auth.isLogged() ?<Component />:<Redirect to="/dashboard" />}
        </Route>
    )
}
