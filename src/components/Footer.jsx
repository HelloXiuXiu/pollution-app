import { memo } from 'react'
import Input from './Input.jsx'
import './Footer.css'

const Footer = memo(function Footer ({ location, onSetLocation, onGetAirData }) {
  return (
    <footer>
        <div className="location">
          <Input location={location} onSetLocation={onSetLocation} onGetAirData={onGetAirData}/>
          <br />
          <span>location</span>
        </div>
    </footer>
  )
})

export default Footer
