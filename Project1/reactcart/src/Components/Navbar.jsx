import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
      <>
          <nav className="container mx-auto">
              <div>
                  <Link to="/">
                      <img src="/images/download.jpg" alt="" />
                  </Link>
              </div>
              
          </nav>
    </>
  )
}
