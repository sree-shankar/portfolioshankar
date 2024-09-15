import './App.css';
import './styles/responsive.css'
import CombineNew from './combine/Combine';
import { GlobalStyles, useTheme } from '@mui/material';


function App() {
const theme = useTheme()

  return (
    <>
    <GlobalStyles styles={{
          html: {
            backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : '#000000',
          },
        }}/>
    <div  style={{background: theme?.palette?.mode === "light" ? "#FFFFFF" : "#000000" }}>
   <CombineNew/>
    </div>
    </>
  );
}

export default App;
