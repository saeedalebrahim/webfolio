import { ContactSection, HeroSection, ProjectsSection, usePortfolioData } from '../../features/portfolio'
import { Section } from '../../shared/ui/Section/Section'

export function AppRoutes() {
	const { data, loading, error } = usePortfolioData()

	if (loading) {
		return (
			<Section id="loading" eyebrow="Status" title="Loading portfolio" subtitle="Preparing profile and project data.">
				<p>Please wait a moment.</p>
			</Section>
		)
	}

	if (error || !data) {
		return (
			<Section
				id="error"
				eyebrow="Status"
				title="Portfolio unavailable"
				subtitle={error ?? 'Unexpected issue while loading portfolio data.'}
			>
				<p>Refresh the page to retry.</p>
			</Section>
		)
	}

	return (
		<>
			<HeroSection profile={data.profile} />
			<ProjectsSection projects={data.projects} />
			<ContactSection links={data.links} />
		</>
	)
}
