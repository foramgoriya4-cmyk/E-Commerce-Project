import React, { useState, useContext, useEffect, useMemo } from 'react'
import logo from "../../assets/logo.webp"
import cart_icon from "../../assets/cart_icon.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { useTheme } from '../../Context/ThemeContext'

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [showSuggestions, setShowSuggestions] = useState(false)
    const { getTotalCartItems, all_product } = useContext(ShopContext)
    const { isDark, toggleTheme } = useTheme()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/search") {
            const params = new URLSearchParams(location.search)
            setSearchTerm(params.get("q") || "")
        }
    }, [location.pathname, location.search])

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        const q = searchTerm.trim()
        setShowSuggestions(false)
        navigate(`/search?q=${encodeURIComponent(q)}`)
    }

    const suggestions = useMemo(() => {
        const q = searchTerm.trim().toLowerCase()
        if (!q) return []
        return all_product
            .filter((item) => item.name.toLowerCase().includes(q))
            .slice(0, 5)
    }, [searchTerm, all_product])

    const goToProduct = (id) => {
        setShowSuggestions(false)
        setSearchTerm("")
        navigate(`/product/${id}`)
    }

    const activeMenu = location.pathname === "/" ? "home"
        : location.pathname.startsWith("/mens") ? "mens"
        : location.pathname.startsWith("/womens") ? "womens"
        : location.pathname.startsWith("/kids") ? "kids"
        : ""

  return (
    <div className='sticky top-0 z-50 border-b border-gray-200 bg-white/95 dark:bg-[#1e1e1e]/95 dark:border-gray-700 backdrop-blur transition-colors duration-300'>
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
            <p className="text-[#171717] dark:text-white text-3xl font-semibold leading-none">Shopify</p>
        </Link>

        {/* Nav Links */}
        <ul className='hidden md:flex items-center list-none gap-5 lg:gap-8 text-base font-medium'>
            <li className="flex flex-col items-center gap-1">
                <Link className="no-underline text-[#626262] dark:text-gray-300 hover:text-[#ff4141]" to="/">Home</Link>
                {activeMenu==="home" && <span className="block h-[3px] w-full rounded-full bg-[#ff4141]"></span>}
            </li>
            <li className="flex flex-col items-center gap-1">
                <Link className="no-underline text-[#626262] dark:text-gray-300 hover:text-[#ff4141]" to="/mens">Men</Link>
                {activeMenu==="mens" && <span className="block h-[3px] w-full rounded-full bg-[#ff4141]"></span>}
            </li>
            <li className="flex flex-col items-center gap-1">
                <Link className="no-underline text-[#626262] dark:text-gray-300 hover:text-[#ff4141]" to="/womens">Women</Link>
                {activeMenu==="womens" && <span className="block h-[3px] w-full rounded-full bg-[#ff4141]"></span>}
            </li>
            <li className="flex flex-col items-center gap-1">
                <Link className="no-underline text-[#626262] dark:text-gray-300 hover:text-[#ff4141]" to="/kids">Kids</Link>
                {activeMenu==="kids" && <span className="block h-[3px] w-full rounded-full bg-[#ff4141]"></span>}
            </li>
        </ul>

        {/* Search + Login + Dark Toggle + Cart */}
        <div className="flex items-center gap-3 lg:gap-4 shrink-0">
            <div className="relative">
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                            setShowSuggestions(true)
                        }}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 120)}
                        placeholder="Search products..."
                        className="h-9 w-32 lg:w-44 px-3 rounded-l-full border border-r-0 border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a2a2a] text-sm text-gray-700 dark:text-gray-200 outline-none"
                    />
                    <button
                        type="submit"
                        className="h-9 px-3 rounded-r-full border border-[#ff4141] bg-[#ff4141] text-white text-sm font-medium hover:bg-[#e23636] transition"
                    >
                        Search
                    </button>
                </form>

                {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute top-11 left-0 w-full bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg z-50 overflow-hidden">
                        {suggestions.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onMouseDown={() => goToProduct(item.id)}
                                className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#3a3a3a]"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <Link to="/login" className="hidden sm:block">
                <button className="h-9 px-5 border border-[#7a7a7a] dark:border-gray-500 rounded-full text-[#515151] dark:text-gray-300 text-sm font-medium bg-white dark:bg-[#2a2a2a] cursor-pointer hover:bg-[#f3f3f3] dark:hover:bg-[#3a3a3a] transition">Login</button>
            </Link>

            {/* Dark / Light Toggle */}
            <button
                onClick={toggleTheme}
                className="relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none cursor-pointer"
                style={{ background: isDark ? '#ff4141' : '#d1d5db' }}
                title={isDark ? 'Switch to Light' : 'Switch to Dark'}
            >
                <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-[10px] transition-transform duration-300 ${isDark ? 'translate-x-6' : 'translate-x-0'}`}>
                    {isDark ? '🌙' : '☀️'}
                </span>
            </button>

            <div className="relative">
                <Link to="/cart">
                    <img src={cart_icon} alt="cart" className="h-8 w-8 object-contain" />
                </Link>
                <div className="absolute -top-2 -right-2 w-5 h-5 flex justify-center items-center rounded-full text-xs font-bold bg-red-500 text-white">
                    {getTotalCartItems()}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar