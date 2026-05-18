import { useState } from 'react'

function App() {
  return <button className='btn btn-primary'>{import.meta.env.VITE_test_value}</button>;
}

export default App
