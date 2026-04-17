import { createContext, useContext } from 'react'

export type AppSettings = {
  buildLabel: string
  availableForWork: boolean
}

export const AppSettingsContext = createContext<AppSettings | null>(null)

export function useAppSettings() {
  const value = useContext(AppSettingsContext)

  if (!value) {
    throw new Error('useAppSettings must be used inside AppProviders')
  }

  return value
}
