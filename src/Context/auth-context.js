// import React, { createContext, useState, useEffect, useContext } from "react";

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// // const AuthContext = createContext({});

// // const AuthProvider = (props) => {
// //   const login = () => {
// //     sleep(2000).then(() => setLoggedIn(true));
// //   };

// //   const logout = () => {
// //     sleep(2000).then(() => setLoggedIn(false));
// //   };

// //   const authContextValue = {
// //     login,
// //     loggedIn,
// //     logout,
// //   };

// //   return <AuthContext.Provider value={authContextValue} {...props} />;
// // };

// // const useAuth = () => useContext(AuthContext);

// // export { AuthProvider, useAuth };








// const initState = {
//   activeStation: {},
//   admin: false,
//   loggedIn: false,
//   logIn: () => {
//     sleep(2000).then(() => setLoggedIn(true));
//   },
//   logout: () => {
//     sleep(2000).then(() => setLoggedIn(false));
//   },
// };



// export const Context = createContext(initState);
// export default function Store({ children }) {
//   const [loggedIn, setLoggedIn] = useState(false);
//   useEffect(() => {
//     // Pull saved login state from localStorage / AsyncStorage
//   }, []);

//   const [state, setState] = useState(initState);

//   return <Context.Provider value={{ ...state }}>{children}</Context.Provider>;
// }





import React, { useState, createContext } from "react";


const initState = {
  activeStation: {},
  admin: false,
  loggedIn: false,
};


export const Context = createContext(initState);
export default function Store({ children }) {
  const [state, setState] = useState(initState);
  return (
    <Context.Provider value={{...state}}>{children}</Context.Provider>
  );
}
