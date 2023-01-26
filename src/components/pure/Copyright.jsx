import { Link, Typography } from '@mui/material'
import React from 'react'

// Material UI Components

const Copyright = () => {
  return (
    <div>
      <Typography variant="body2" color="GrayText" align="center">
        {'Copyright(c)'}
        <Link color="inherit" href="https://github.com/agustin-ollin">
          GitHub
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </div>
  )
}

export default Copyright
