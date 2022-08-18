import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./routes/Shop";
import Index from "./routes/Index";
import Admin from "./routes/Admin";
import Cart from "./routes/Cart";
import NoMatch from "./routes/NoMatch";
import Layout from "./components/Layout";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
        <Route path="admin" element={<Admin />} />
        <Route path="admin/products" element={<Admin />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Layout>
  );
}

export default App;
