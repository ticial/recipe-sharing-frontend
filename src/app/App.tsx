import { Routing } from "pages/Routing";
import { withProviders } from "./providers";
import "./index.scss";

const App = () => {
    return (
        <div className="app">
            <Routing />
        </div>
    );
};

export default withProviders(App);
