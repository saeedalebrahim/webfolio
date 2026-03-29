import {
	ContactSection,
	EducationSection,
	ExperienceSection,
	HeroSection,
	ProjectsSection,
	SkillsSection,
	usePortfolioData,
} from '../../features/portfolio'
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
			<ExperienceSection experience={data.experience} />
			<SkillsSection skillGroups={data.skillGroups} />
			<ProjectsSection projects={data.projects} />
			<EducationSection education={data.education} languages={data.languages} />
			<ContactSection links={data.links} />
		</>
	)
}
