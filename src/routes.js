import ReactPage from "./components/WebTechnology/ReactPage";
import JavaPage from "./components/BackEndTechnology/Java";
import Welcome from "./components/Welcome";

const routes = [
  { path: '/', component: <Welcome /> },
  { path: '/react', component: <ReactPage />, exact: true },
  { path: '/java', component: <JavaPage /> },
];

export default routes;