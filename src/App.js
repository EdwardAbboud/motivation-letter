import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" exact element={<FrontPage />} />
          {/* <Route path="/coins/:id" element={<CoinPage />} />
              <Route path="/watch-list" element={<WatchListPage />} />
              <Route path="/trending" element={<TopSevenPage />} />
              <Route path="/converter" element={<ConverterPage />} /> */}
        </Routes>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
