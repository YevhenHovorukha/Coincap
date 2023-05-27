import React, { useEffect } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import { getCoinData } from "./Redux/reducers/coinDataSlice";
import { useDispatch } from "react-redux/es/exports";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import CurrentCurrency from "./pages/CurrentCurrency";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getCoinData());
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderComponent />}>
          <Route index element={<Main />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
          <Route path=":id" element={<CurrentCurrency />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
