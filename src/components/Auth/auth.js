import React, { createContext, useContext, useState } from "react";
const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 1000); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 1000);
    },
};

const AuthContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = (cb) => {
        return fakeAuth.signin(() => {
            setUser("Minh");
            cb();
        });
    };

    const signout = (cb) => {
        return fakeAuth.signout(() => {
            setUser(null);
            cb();
        });
    };
    return {
        user,
        signin,
        signout,
    };
}
