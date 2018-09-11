import React from 'react'
import { Link, navigate } from 'gatsby'

const Header = ({ siteTitle, location }) => (
  <div
    style={{
      marginBottom: '1.45rem',
      background: location.includes('contact') ? '#f2f2f2' : 'rgba(255, 255, 255, 0.5)',
      position: location.includes('contact') ? 'absolute' : 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <h1 style={{margin: 0}}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <div className='btn-container'>
        {location === '/' &&
          <button
            className='btn nav-btn'
            onClick={() => navigate('/contact/')}
          // style={{ position: 'absolute', top: 30, right: 30}}
          >
            Contact
            </button>
        }

        {location.includes('contact') &&
          <button className='btn nav-btn' onClick={() => navigate('/')}>
            Return Home
            </button>
        }
      </div>
    </div>
  </div>
)

export default Header
