import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Public from "./public/Public";
import Private from "./private/Private";
import {createContext, useContext, useState} from "react";
import RequireAuth from "./private/RequireAuth";
import NoneAuth from "./private/NoneAuth";

export const AuthContext = createContext();

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Public title={'Public pages'}/>}/>
                    <Route path="sign-in" element={
                        <NoneAuth>
                            <SignIn/>
                        </NoneAuth>
                    }/>
                    <Route path="sign-up" element={
                        <NoneAuth>
                            <SignUp/>
                        </NoneAuth>
                    }/>
                    <Route path="/p/*" element={
                        <RequireAuth>
                            <Private/>
                        </RequireAuth>
                    }/>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

function AuthProvider({children}) {
    let [user, setUser] = useState(null);

    let signIn = (newUser, callback) => {
        // return fakeAuthProvider.signin(() => {
        //   setUser(newUser);
        //   callback();
        // });
        setUser(newUser);
        callback();
    };

    let signOut = (callback) => {
        // return fakeAuthProvider.signout(() => {
        //   setUser(null);
        //   callback();
        // });
        setUser(null);
        callback();
    };

    let value = {user, signIn, signOut};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export default App;
