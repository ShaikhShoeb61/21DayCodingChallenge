
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styled-components/Theme.style";
import { GlobalStyles } from "./components/styled-components/Global.style";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import OrderPlaced from "./Pages/OrderPlaced";



const App = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/product/:id" element={<ProductDetails/>}></Route>
            <Route path="/Succesfully-Order-Placed" element={<OrderPlaced/>}></Route>
          </Routes>
          </BrowserRouter>      
      </ThemeProvider>
    </>
  );
};

export default App;




