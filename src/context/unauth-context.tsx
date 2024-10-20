import { createContext, useState } from "react"

export const AuthContext: any = createContext({
    isSkipped: false,
    isSkippedHandler: (isIntro: any) => { },
})

const AuthContextProvider = ({ children }: any) => {
    const [isSkipped, setIsSkipped] = useState<any>();

    const isSkippedHandler = (isIntro: any) => {
        setIsSkipped(isIntro)
        localStorage.setItem('skipIntro', isIntro);
    }

    const value = {
        isSkipped: isSkipped,
        isSkippedHandler: isSkippedHandler,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;