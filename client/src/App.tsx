import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Animals from "./pages/Animals";
import VirtualAdoption from "./pages/VirtualAdoption";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import CryptoDonation from "./pages/CryptoDonation";
import Privacy from "./pages/Privacy";

function AppRouter() {
  // make sure to consider if you need authentication for certain routes
  return (
    <>
      <Navigation />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/animals"} component={Animals} />
        <Route path={"/virtual-adoption"} component={VirtualAdoption} />
        <Route path={"/events"} component={Events} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/crypto-donation"} component={CryptoDonation} />
        <Route path={"/privacy"} component={Privacy} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider
          defaultTheme="light"
          // switchable
        >
          <TooltipProvider>
            <Toaster />
            <Router base="/nechmerust-react/">
              <AppRouter />
            </Router>
          </TooltipProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
