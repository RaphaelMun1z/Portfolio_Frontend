import { createContext, useState } from "react";

export const UserComputerDataContext = createContext()

export const UserComputerDataProvider = ({ children }) => {

    const [navigatorName, setNavigatorName] = useState(navigator.userAgent || 'Não indentificado')
    const [operationalSystem, setOperationalSystem] = useState(navigator.platform || 'Não indentificado')
    const [widthScreen, setWidthScreen] = useState(window.innerWidth || 'Não indentificado')
    const [heightScreen, setHeightScreen] = useState(window.innerHeight || 'Não indentificado')

    return (
        <UserComputerDataContext.Provider value={{ navigatorName, operationalSystem, widthScreen, heightScreen }}>
            {children}
        </UserComputerDataContext.Provider>
    )
}