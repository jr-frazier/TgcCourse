import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./routes/Shop";
import Index from "./routes/Index";
import Admin from "./routes/Admin";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="shop" element={<Shop />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </Layout>
  );
}

export default App;
