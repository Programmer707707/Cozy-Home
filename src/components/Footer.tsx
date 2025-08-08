import React from 'react'

const Footer = () => {
  return (
    <footer className="max-w-7xl m-auto font-bold py-10 px-6 mt-10">
        <div className=''>
          <ul className="grid grid-cols-5 gap-5 ml-auto items-center cursor-pointer">
            <li>About Us</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      <div className="mt-6 ml-auto text-center text-sm text-gray-400">
        © 2025 Cozy Home. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer