import React from 'react'
import './Header.scss'

export default function Header() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="header">
              <div className="header-logo">
                Logo
              </div>
              <div className="header-nav centering">
                <div className="header-nav-item">
                  Home
                </div>
                <div className="header-nav-item">
                  About
                </div>
                <div className="header-nav-item">
                  Whitepaper
                </div>
                <div className="header-nav-item">
                  Roadmap
                </div>
              </div>
              <a href="http://google.com" className="header-view-now">
                View Now
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}
