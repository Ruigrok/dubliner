import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      marginBottom: '1.45rem',
      background: 'rgba(255, 255, 255, 0.5)',
      position: 'absolute',
      top: 0,
      width: '100%'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        // maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        <Link
          to="/contact"
          style={{
            color: 'black',
            zIndex: 500,
            position: 'absolute',
            top: 40,
            right: 40
            // textDecoration: 'none',
          }}
        >
          Contact
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
