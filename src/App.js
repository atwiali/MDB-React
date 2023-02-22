import { useEffect } from "react";
import { Router } from "react-router-dom";
import Routes from "./CombinedRoutes";

function App() {
	useEffect(() => {
		window.process = {
			...window.process,
		};
	}, []);

	return (
		<Router history={require("history").createBrowserHistory()}>
			<Routes />
		</Router>
	);
}



export default App;