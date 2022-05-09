import React from 'react'
import { Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';

interface Title {
  title: string;
}

export default function Header(props: Title) {
  return (
    <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              {props.title}
            </Typography>
          </Toolbar>
        </AppBar>
    </div>
  )
}
