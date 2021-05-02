import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./app.css";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Theme";
import { useDarkMode } from "./components/useDarkMode";
import Toggle from "./components/Toggler";

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />;

  return (
    <Router>
      <div className="app">
        <ThemeProvider theme={themeMode}>
          <>
            <GlobalStyles />
            <Toggle
              className="toggleBtn"
              theme={theme}
              toggleTheme={themeToggler}
            />

            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/works" component={Works} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer />
          </>
        </ThemeProvider>
      </div>
    </Router>
  );
};

export default App;
