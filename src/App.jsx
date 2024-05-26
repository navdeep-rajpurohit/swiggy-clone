import Body from "./components/Body";
import "./App.css";
import Header from "./components/Header";
import RestaurantPage from "./components/RestaurantPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./components/Cart";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/restaurant/:_id" element={<RestaurantPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}
