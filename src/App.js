
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
import AllListing from './Pages/AllListing/AllListing';
import Contact from './Pages/Contact/Contact';
import FindSearchListing from './Pages/Listings/FindSearchListing/FindSearchListing';
import Footer from './Pages/Sharded/Footer/Footer';
import Header from './Pages/Sharded/Header/Header';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Industry from './Pages/Industry/Industry';
import IndustryDetails from './Pages/Industry/IndustryDetails/IndustryDetails';
import CategoryDetail from './Pages/CategoryDetail/CategoryDetail';
import ByInvestment from './Pages/ByInvestment/ByInvestment';
import ByInvestmentDetails from './Pages/ByInvestmentDetails/ByInvestmentDetails';
import SearchDetails from './Pages/SearchDetails/SearchDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="industry" element={<Industry />} />
          <Route path="byInvestment" element={<ByInvestment />} />
          <Route path="contact" element={<Contact />} />
          <Route path="addListing" element={<AddListing />} />
          <Route path="allListing" element={<AllListing />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="listingDetails/:listingId" element={<ListingDetails />} />
          <Route path="categoryDetail/:brandTitle" element={<CategoryDetail />} />
          <Route path="industryDetails/:industryName" element={<IndustryDetails />} />
          <Route path="investmentDetails/:level" element={<ByInvestmentDetails />} />
          <Route path="findSearchListing/:category/:investment" element={<FindSearchListing />} />
          <Route path="searchDetails/:category/:investment/:searchValue" element={<SearchDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
