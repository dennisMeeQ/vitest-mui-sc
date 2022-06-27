import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/themes/ThemeProvider";
import { Foo } from "./Foo";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Foo />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
