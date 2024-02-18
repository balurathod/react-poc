import Counter from "./components/Counter/Counter";
import TextForm from "./components/TextForm/TextForm"
import Parent from "./components/ParentChild/Parent"
import AutoSearch from "./components/autoSearch/AutoSearch";
import ReactPage from "./components/WebTechnology/ReactPage";
import JavaPage from "./components/BackEndTechnology/Java";
import Welcome from "./components/Welcome";

const routes = [
  { path: '/', component: <Welcome /> },
  { path: '/counter', component: <Counter />, exact: true },
  { path: '/textForm', component: <TextForm />, exact: true }, 
  { path: '/parentChild', component: <Parent />, exact: true },
  { path: '/autoSearch', component: <AutoSearch />, exact: true },
  { path: '/react', component: <ReactPage />, exact: true },
  { path: '/java', component: <JavaPage /> },
];

export default routes;