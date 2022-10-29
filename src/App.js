import './App.css';
import Routes from './routes';

import { createContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import {
  BrowserRouter as Router,
  
} from "react-router-dom";
import React , {useReducer} from 'react';
import { initialState ,reducer } from './reducer/useReducer';
export const UserContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value = {{state,dispatch}}>
    <Router>
      <ThemeProvider theme={theme}>

      <Routes />


      </ThemeProvider>
         
    </Router>

    </UserContext.Provider>
   
       
  );
}



// import { Fragment } from 'react';
// import Head from 'next/head';
// import { CacheProvider } from '@emotion/react';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { CssBaseline } from '@mui/material';
// import { ThemeProvider } from '@mui/material/styles';
// import { AuthConsumer, AuthProvider } from './contexts/auth-context';
// import { createEmotionCache } from './utils/create-emotion-cache';
// // import { registerChartJs } from '../utils/register-chart-js';
// import { theme } from './theme';
// import Page from "./pages/index"
// // registerChartJs();

// const clientSideEmotionCache = createEmotionCache();

// const App = (props) => {

//   // console.log(props);
//   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

//   const getLayout = Page.getLayout ?? ((page) => page);

//   return (
//     <CacheProvider value={emotionCache}>
//       <Head>
//         <title>
//           Material Kit Pro
//         </title>
//         <meta
//           name="viewport"
//           content="initial-scale=1, width=device-width"
//         />
//       </Head>
//       <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           <AuthProvider>
//             <AuthConsumer>
//               {/* {
//                 (auth) => auth.isLoading
//                   ? <Fragment />
//                   : getLayout(<Component {...pageProps} />)
//               } */}

//               {
//                  getLayout(<Component {...pageProps} />)
//               }

            
//             </AuthConsumer>
            

//           </AuthProvider>
//         </ThemeProvider>
//       </LocalizationProvider>
//     </CacheProvider>
//   );
// };

// export default App;
