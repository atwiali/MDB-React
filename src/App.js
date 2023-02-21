import Routes from "./CombinedRoutes";
import { Router } from "react-router-dom";
import { useTranslation } from "react-i18next/";

function App() {

	

	return (
		<Router history={require("history").createBrowserHistory()}>
			<Routes />
		</Router>
	);
}



export default App;