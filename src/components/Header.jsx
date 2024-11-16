import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div style={{width: '100%', height: '100px', backgroundColor: 'teal', display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div style={{display: "flex", gap: "520px", flexDirection: 'row', justifyContent: "space-between"}}>
            <Link to="/first">
            <div>
                first screen
            </div>
            </Link>
            <Link to="/second">
            <div>
                second screen
            </div>
            </Link>
            <Link to="/third">
            <div>
                third screen
            </div>
            </Link>
        </div>
    </div>
  )
}
