import React, { useContext, useState, type ReactNode, createContext } from "react";

interface UserProfile {
  name: string,
  registration: string,
  course: string,
  cpf: string,
}

interface UserContextType {
  profile: UserProfile,
  setProfile: React.Dispatch<React.SetStateAction<UserProfile>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({children}: {children: ReactNode}) {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Fulano',
    registration: '1523458',
    course: 'ADS',
    cpf: '123.456.789-10'
  })

  return (
    <UserContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider.')
  }

  return context
}