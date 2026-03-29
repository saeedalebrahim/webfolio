import { createContext, useContext, useMemo, type PropsWithChildren } from 'react'

type AppSettings = {
	buildLabel: string
	availableForWork: boolean
}

const AppSettingsContext = createContext<AppSettings | null>(null)

export function AppProviders({ children }: PropsWithChildren) {
	const settings = useMemo<AppSettings>(
		() => ({
			buildLabel: `Built ${new Date().getFullYear()} with React + TypeScript`,
			availableForWork: true,
		}),
		[],
	)

	return <AppSettingsContext.Provider value={settings}>{children}</AppSettingsContext.Provider>
}

export function useAppSettings() {
	const value = useContext(AppSettingsContext)

	if (!value) {
		throw new Error('useAppSettings must be used inside AppProviders')
	}

	return value
}
