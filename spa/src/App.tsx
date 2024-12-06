import { AppRoutes } from "./routes";

interface AppProps {
  toggle: any;
}

const App = (props: AppProps) => {
  return <AppRoutes toggle={props.toggle} />;
};

export default App;
