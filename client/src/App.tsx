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
import Dashboard from "./pages/dashboard";
import BunkerBrandBook from "./pages/bunker-brand-book";
import ForjaBrandBook from "./pages/forja-brand-book";
import MvpBrandBook from "./pages/mvp-brand-book";
import Tools from "./pages/tools";
import Solucoes from "./pages/solucoes";
import BunkerLP from "./pages/bunker";
import AuthGate from "./components/shared/AuthGate";

function ProtectedDashboard() {
  return (
    <AuthGate>
      <Dashboard />
    </AuthGate>
  );
}

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
      <Route path={"/bunker"} component={BunkerLP} />
      <Route path={"/bunker-brand-book/:section?"} component={BunkerBrandBook} />
      <Route path={"/forja-brand-book/:section?"} component={ForjaBrandBook} />
      <Route path={"/mvp-brand-book/:section?"} component={MvpBrandBook} />
      <Route path={"/tools"} component={Tools} />
      <Route path={"/solucoes"} component={Solucoes} />
      <Route path={"/dashboard"} component={ProtectedDashboard} />
      <Route path={"/dashboard/:view"} component={ProtectedDashboard} />
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-[#00C96E] focus:text-black focus:rounded-md focus:text-sm">
          Pular para o conteúdo
        </a>
        <TooltipProvider>
          <Toaster />
          <main id="main-content">
            <Router />
          </main>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
