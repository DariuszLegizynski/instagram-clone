import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// tools
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { rrfProps } from "./config/firebase";

// components
import App from "./components/app/App";
import ScrollToTop from "./ScrollToTop";
import store from "./store/store";

// styles
import "./index.css";

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<React.StrictMode>
					<ScrollToTop />
					<App />
				</React.StrictMode>
			</ReactReduxFirebaseProvider>
		</Provider>
	</BrowserRouter>,
	document.querySelector("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
