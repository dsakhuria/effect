import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SalesItemsRow from "./components/SaleItemsRow";
import ExclusiveOffers from "./components/ExclusiveOffers";
import Categories from "./components/Categories";

function App() {
  const [cartItemsNum, setCartItemsNum] = useState(0);

  const handleCartItemsNumChange = () => {
    setCartItemsNum(cartItemsNum + 1);
  };

  return (
    <main className="bg-[#f7fafc] w-full h-screen">
      <Header cartItemsNum={cartItemsNum} />
      <div className="z-0 w-full h-auto bg-gradient-to-r from-[#dbdbdb] via-[#cccccc] to-[#dbdbdb] flex flex-col items-center justify-center">
        
        
        <ExclusiveOffers />

        <Categories />

        <SalesItemsRow
          handleCartItemsNumChange={handleCartItemsNumChange}
        />
        <SalesItemsRow
          handleCartItemsNumChange={handleCartItemsNumChange}
        />
        <SalesItemsRow
          handleCartItemsNumChange={handleCartItemsNumChange}
        />
      </div>
      <Footer />
    </main>
  );
}

export default App;
