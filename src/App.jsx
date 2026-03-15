import Navbar from "./Components/Navbar/Navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Search from "./Pages/Search"
import Footer from "./Components/Footer/Footer"
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"
import { ThemeProvider, useTheme } from "./Context/ThemeContext"

function ThemedApp() {
  const { isDark } = useTheme()
  return (
    <div className={`${isDark ? 'dark' : ''} min-h-screen bg-white dark:bg-[#121212] transition-colors duration-300`}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp/>
    </ThemeProvider>
  )
}

export default App
