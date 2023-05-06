import React, { useContext } from 'react'
import { useLocalStorage } from './useStorage'

const FriendsContext = React.createContext()
const SetFriendsContext = React.createContext()

export function useFriendsState() {
    return [useContext(FriendsContext), useContext(SetFriendsContext)]
}

export function FriendsProvider({ children }) {
    const [fList, setfList] = useLocalStorage('friends', [])
    return (
        <FriendsContext.Provider value={fList}>
            <SetFriendsContext.Provider value={setfList}>
                {children}
            </SetFriendsContext.Provider>
        </FriendsContext.Provider>
    )

}