import React from 'react'
import { Link, Outlet} from 'react-router-dom'

function Products() {
  return (
    <>
      <div>
        <input type='search' placeholder='search items' />

      </div>
      <nav>
        <Link to='featured'>Featured</Link>
        <Link to='new'>new</Link>

      </nav>
      <Outlet/>
    </>
  )
}

export default Products
