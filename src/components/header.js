import React from 'react'
import { Link, navigate } from 'gatsby'

const Header = ({ siteTitle, path }) => (
  <div
    style={{
      marginBottom: '1.45rem',
      background: path.includes('contact') ? '#f2f2f2' : 'rgba(255, 255, 255, 0.5)',
      position: path.includes('contact') ? 'absolute' : 'fixed',
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
        {path === '/' &&
          <button
            className='btn nav-btn'
            onClick={() => navigate('/contact/')}
          >
            Contact
            </button>
        } 

        {path.includes('contact') &&
          <button className='btn nav-btn' onClick={() => navigate('/')}>
            Return Home
            </button>
        }
        
      </div>
      
    </div>
  </div>
)

export default Header
