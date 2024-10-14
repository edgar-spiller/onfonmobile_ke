import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import PhosphorIconInit from "./helper/PhosphorIconInit";
import HomePageTwo from "./pages/HomePageTwo";
import ShopPage from "./pages/ShopPage";
import InfinixPage from "../src/products/infinix/infinixPage";
import ItelPage from "../src/products/itel/itelPage";
import VivoPage from "../src/products/vivo/vivoPage";
import VivoDetails from "./products/vivo/vivoDetails";
import SamsungPage from "../src/products/samsung/samsungPage";
import SamsungDetailsPage from "./products/samsung/samsungDetailsPage";
import NeonPage from "../src/products/neon/neonPage";
import TecnoPage from "../src/products/tecno/tecnoPage";
import NokiaPage from "../src/products/nokia/nokiaPage";
import RealmePage from "../src/products/realme/realmePage";
import OppoPage from "../src/products/oppo/oppoPage";
import TruphonePage from "../src/products/truphone/truphonePage";
import ProductDetailsPageOne from "./pages/ProductDetailsPageOne";
import ProductDetailsPageTwo from "./pages/ProductDetailsPageTwo";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AccountPage from "./pages/AccountPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <PhosphorIconInit />

      <Routes>
        <Route exact path="/" element={<HomePageTwo />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/infinix" element={<InfinixPage />} />
        <Route exact path="/itel" element={<ItelPage />} />
        <Route exact path="/vivo" element={<VivoPage />} />
        <Route exact path="/vivo-details" element={<VivoDetails />} />
        <Route exact path="/samsung" element={<SamsungPage />} />
        <Route exact path="/samsung-details" element={<SamsungDetailsPage />} />
        <Route exact path="/neon" element={<NeonPage />} />
        <Route exact path="/tecno" element={<TecnoPage />} />
        <Route exact path="/nokia" element={<NokiaPage />} />
        <Route exact path="/realme" element={<RealmePage />} />
        <Route exact path="/oppo" element={<OppoPage />} />
        <Route exact path="/truphone" element={<TruphonePage />} />
        <Route exact path="/product-details" element={<ProductDetailsPageOne />} />
        <Route exact path="/product-details-two" element={<ProductDetailsPageTwo />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route exact path="/account" element={<AccountPage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/blog-details" element={<BlogDetailsPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
