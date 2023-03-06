import React from 'react'
import { UserProvider } from './UserContext'
import { IDefaultProviderProps } from './UserContext/@types'

export const Providers = ({children}: IDefaultProviderProps) => (
  <UserProvider>
    {children}
  </UserProvider>
)
