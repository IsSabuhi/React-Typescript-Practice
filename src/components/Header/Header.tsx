import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Link, Link as RouterLink} from 'react-router-dom';
import { MenuItem, Toolbar, Typography } from '@mui/material';
import { headersLink } from '../../configs/Links';

const headerTitle = {
  color: 'white',
}

const navLink = {
  display: 'flex',
}

const navLinkLabel = {
  color: 'white'
}


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
            style={headerTitle}
            >
              {props.title}
            </Typography>
            <Typography style={navLink}>
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
                <MenuItem style={navLinkLabel}>{label}</MenuItem>
              </Link>
              );
            })}
            </Typography>
          </Toolbar>
        </AppBar>
    </div>
  )
}
