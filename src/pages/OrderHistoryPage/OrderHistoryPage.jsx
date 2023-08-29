import React from 'react'

function OrderHistoryPage() {

  const handleCheckToken = async () =>{
    alert("Clicked")
  }
  return (
    <>
      <h1>Order History page</h1>
      <button onClick={handleCheckToken}>Check when my login expires</button>
    </>
  )
}

export default OrderHistoryPage
