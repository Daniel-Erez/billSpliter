import React from 'react'
import { Link } from 'react-router-dom'

function NoPage() {
  return (
    <>
    <h1>ERROR 404</h1>
    <Link to="/">Return Home</Link>
    </>
  )
}

export default NoPage