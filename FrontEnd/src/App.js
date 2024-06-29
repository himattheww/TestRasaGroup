import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MasterBuku from "./pages/MasterBuku";
import MasterMahasiswa from "./pages/MasterMahasiswa";
import RakInventory from "./pages/RakInventory";
import TransaksiPeminjaman from "./pages/TransaksiPeminjaman";
import HistoryPeminjaman from "./pages/HistoryPeminjaman";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" name="Home Page" element={<Home />} />
          <Route exact path="/master-buku" name="Master Buku" element={<MasterBuku />} />
          <Route
            exact
            path="/master-mahasiswa"
            name="Master Mahasiswa Page"
            element={<MasterMahasiswa />}
          />
          <Route exact path="/rak-inventory" name="Inventory Page" element={<RakInventory />} />
          <Route
            exact
            path="/transaksi-peminjaman"
            name="Loan Page"
            element={<TransaksiPeminjaman />}
          />
          <Route
            exact
            path="/history-peminjaman"
            name="History Page"
            element={<HistoryPeminjaman />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
