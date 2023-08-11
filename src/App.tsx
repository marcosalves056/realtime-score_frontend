import { Home } from "./pages/Home";
import AppContextProvider from "./services/context";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Tournament } from "./pages/Tournament";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <BrowserRouter basename="/">
        <Header />
        <AppContextProvider>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={"/torneio"} element={<Tournament />} />
            <Route
              path={"/torneio/resultados"}
              element={<Tournament isResult />}
            />
          </Routes>
        </AppContextProvider>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
