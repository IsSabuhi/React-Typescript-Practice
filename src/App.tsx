import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Header from './component/Header';
import CComponent from './component/CComponent';
import FComponent from './component/FComponent';

// const useStyles = makeStyles({
//   styleBlock: {
//     borderRadius: 12,
//     backgroundColor: "blue"
//   }
// });

function App() {
  // const classes = useStyles();
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <Header title='Test App'/>
        <div>
          <CComponent name='Sabuhi :)'/>
          <FComponent name='Sabuhi :D' />
        </div>
      </Box>
    </div>
  );
}

export default App;
