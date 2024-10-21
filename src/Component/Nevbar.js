import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Nevbar() {
  return (
    <>
    <Link to="/">A1</Link>
    <Link to="/A2">A2</Link>
    <Link to="/A3">A3</Link>
    <Link to="/A4">A4</Link>
    <Link to="/A5">A5</Link>
    <div>
        <Outlet/>
    </div>
    </>
  ) 
}
