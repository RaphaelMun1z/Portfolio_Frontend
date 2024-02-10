import { useContext } from "react";
import { UserComputerDataContext } from "../context/UserComputerDataContext";

export const useUserComputerDataContext = () => {
    const context = useContext(UserComputerDataContext)

    if (!context) {
        console.log("Contexto não encontrado!")
    }

    return context
}