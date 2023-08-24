import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/orders">Order History</Link>
      {/* &nbsp No break spacing creates a space that cannot be pushed onto another line by word wrap */}
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
    </nav>
  )
}

export default Navbar
