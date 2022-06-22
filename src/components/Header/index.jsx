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
                  Introduction
                </div>
                <div className="header-nav-item">
                  Story
                </div>
                <div className="header-nav-item">
                  Tokenomic
                </div>
                <div className="header-nav-item">
                  Whitepaper
                </div>
              </div>
              <a href="http://google.com" className="header-view-now">
                Connect
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}
