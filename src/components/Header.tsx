import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Link, Link as RouterLink, useHref} from 'react-router-dom';
import { MenuItem, Toolbar, Typography } from '@mui/material';
import { headersLink } from '../configs/Links';

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
            align='left'
            flexGrow={1}
            >
              {props.title}
            </Typography>
            <Typography>
            {headersLink.map(({ label, href, id}) => {
          return (
            <Link
              {...{
                component: RouterLink,
                to: href,
                color: 'inherit',
                style: { textDecoration: 'none' },
                key: label,
              }}
            >
              <MenuItem>{label}</MenuItem>
            </Link>
          );
        })}

            </Typography>
          </Toolbar>
        </AppBar>
    </div>
  )
}
