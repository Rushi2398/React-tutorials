import React from 'react'
import Card from './components/Card'

export const App = () => {
  return (
    <div className='parent'>
      <Card name='Sayali Jalvi' age={22} image='https://images.unsplash.com/photo-1775133117908-99043faa40b0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D'/>
      <Card name='Rushikesh Jalvi' age={27} image='https://images.unsplash.com/photo-1774575902298-564503f168a7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card name='Madhavi Jalvi' age={56} image='https://images.unsplash.com/photo-1774521044355-508615f287ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}
