import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { HashRouter, Route, Routes } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/Home";
import ReactDOM from "react-dom/client";

export function App() {
  return (
    <>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route
            path="/create-rule"
            element={
              <StandardLayout>
                <CreateRulePage />
              </StandardLayout>
            }
          /> */}
        </Routes>
      </HashRouter>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
