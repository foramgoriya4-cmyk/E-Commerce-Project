import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'

const Search = () => {
  const { all_product } = useContext(ShopContext)
  const params = new URLSearchParams(useLocation().search)
  const query = (params.get('q') || '').trim()
  const hasQuery = query.length > 0

  const filteredProducts = all_product.filter((item) => {
    if (!hasQuery) return false
    const q = query.toLowerCase()
    return (
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    )
  })

  return (
    <div className="min-h-screen px-16 py-10">
      <h1 className="text-3xl font-bold text-[#171717] dark:text-white">
        Search Results
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        {hasQuery ? `Showing ${filteredProducts.length} result(s) for "${query}"` : 'Type a product name in the search box'}
      </p>

      {hasQuery && filteredProducts.length > 0 ? (
        <div className="mt-8 grid grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      ) : hasQuery ? (
        <div className="mt-10 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center text-gray-600 dark:text-gray-300">
          No products found. Try another keyword.
        </div>
      ) : (
        <div className="mt-10 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center text-gray-500 dark:text-gray-300">
          Start typing in the header search bar and press Search.
        </div>
      )}
    </div>
  )
}

export default Search
