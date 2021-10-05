import { Redirect, Route } from "react-router";
import useAuth from "../../auth/useAuth";

export default function PrivateRouters({ component: Component, ...rest }) {
const auth = useAuth();
    return (
        <Route {...rest}>
            {auth.isLogged() ?<Component />:<Redirect to="/login" />}
        </Route>
    )
}
