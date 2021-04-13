import Home from "./page/Home/Index";
import NotFound from "./components/NotFound/Index";
import Registered from "./page/Registered/Index";
import Login from "./page/Login/Index";
const routers = [
  {
    path: "/",
    exact: true,
    main: ({ match, history }) => <Home match={match} history={history} />,
  },
  {
    path: "/registered",
    exact: false,
    main: ({ match, history }) => <Registered match={match} history={history} />,
  },
  {
    path: "/login",
    exact: false,
    main: ({ match, history }) => <Login match={match} history={history} />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];
export default routers;
