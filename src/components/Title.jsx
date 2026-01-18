import React from 'react'
import '../assets/css/Title.css'


export default function Title({ text }) {
  return (
    <div className="app-title">
      <h2>{text}</h2>
    </div>
  )
}
