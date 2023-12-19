import ReactDOM from "react-dom/client";
import "./globals.css";
import App from "./App.jsx";
import "@aws-amplify/ui-react/styles.css";
import {Amplify} from "aws-amplify";
import config from "./aws-exports";
import {ThemeProvider} from "@aws-amplify/ui-react";

Amplify.configure(config);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
