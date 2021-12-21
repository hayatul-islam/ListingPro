
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ListingDetails from './Pages/ListingDetails/ListingDetails';
import AddListing from './Pages/AddListing/AddListing';
import BrandDetail from './Pages/BrandDetail/BrandDetail';
import AllListing from './Pages/AllListing/AllListing';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="listingDetails/:listingId" element={<ListingDetails />} />
          <Route path="addListing" element={<AddListing />} />
          <Route path="brandDetail/:brandTitle" element={<BrandDetail />} />
          <Route path="allListing" element={<AllListing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
