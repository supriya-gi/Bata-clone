import { Routes, Route } from "react-router-dom";

/* Components */
import Header from "./Components/Header";
import Footer from "./Components/Footer";

/* Pages */
import Home from "./pages/Home";
import Sneaker from "./pages/Sneaker";
import New from "./pages/New";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Sale from "./pages/Sale";
import Brands from "./pages/Brands";
import Sproduct from "./pages/Sproduct";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sneaker-studio" element={<Sneaker />} />
        <Route path="/new" element={<New />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="*" element={<Error />} />
        <Route path="/product-details" element={<Sproduct />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
