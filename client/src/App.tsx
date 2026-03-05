import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/shared/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import PortfolioScrollTest from "./pages/portfolio/PortfolioScrollTest";
import LP2 from "./pages/vibe-coding-pro";
import Mentoria100X from "./pages/mentoria100x";
import MVPAcademy from "./pages/mvp-academy";
import MVPAcademyV1 from "./pages/mvp-academy-v1";
import MVPAcademyV2 from "./pages/mvp-academy-v2";
import MVPAcademyV3 from "./pages/mvp-academy-v3";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/portfolio"} component={Portfolio} />
      <Route path={"/portfolio-scroll-test"} component={PortfolioScrollTest} />
      <Route path={"/vibe-coding-pro"} component={LP2} />
      <Route path={"/mentoria100x"} component={Mentoria100X} />
      <Route path={"/mvp-academy"} component={MVPAcademy} />
      <Route path={"/mvp-academy-v1"} component={MVPAcademyV1} />
      <Route path={"/mvp-academy-v2"} component={MVPAcademyV2} />
      <Route path={"/mvp-academy-v3"} component={MVPAcademyV3} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
