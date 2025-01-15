import React from 'react'
import categories from './utility/data'
import CardComponents from './components/CardComponents'

function App() {
  return (
    <div
  className={`
    h-screen w-screen grid grid-rows-3 grid-cols-3
    bg-pink-900 items-center justify-center justify-items-center
  `}
>
  <CardComponents categories={categories} />
</div>
  )
}

export default App