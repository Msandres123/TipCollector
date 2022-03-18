import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h3>404 Error: Page Not Found</h3>
        <p>This Page Does Not Seem To Exist</p>
        <Link to="/">
        <Button>Go Back to Home Page</Button>
        </Link>
    </div>
  )
}
