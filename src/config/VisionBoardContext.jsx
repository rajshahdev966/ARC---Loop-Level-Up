import { Children, createContext } from "react";

export const VisionBoardContext = createContext();

export const VisionBoardContextProvider = ({children})=>{
    return <VisionBoardContext.Provider>
        {children}
    </VisionBoardContext.Provider>
}