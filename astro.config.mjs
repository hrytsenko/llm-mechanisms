// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const repo = 'https://github.com/hrytsenko/llm-mechanisms';

/**
 * A sidebar group listing the terms in one directory.
 * Terms are ordered by `sidebar.order` in their frontmatter.
 * @param {string} label
 * @param {string} directory
 */
const group = (label, directory) => ({ label, items: [{ autogenerate: { directory } }] });

// https://astro.build/config
export default defineConfig({
	site: 'https://hrytsenko.github.io',
	base: '/llm-mechanisms',
	integrations: [
		starlight({
			title: 'LLM Mechanisms',
			description:
				'Fundamental mechanisms for building with LLMs and agents, compared across Anthropic, OpenAI, and Google.',
			social: [{ icon: 'github', label: 'GitHub', href: repo }],
			components: { PageTitle: './src/components/PageTitle.astro' },
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'LLMs',
					items: [
						{ label: 'Overview', slug: 'llms' },
						group('Prompting', 'llms/prompting'),
						group('Generation', 'llms/generation'),
						group('Grounding', 'llms/grounding'),
						group('Extension', 'llms/extension'),
						group('Execution', 'llms/execution'),
					],
				},
				{
					label: 'Agents',
					items: [
						{ label: 'Overview', slug: 'agents' },
						group('Core', 'agents/core'),
						group('Capability', 'agents/capability'),
						group('State', 'agents/state'),
						group('Control', 'agents/control'),
						group('Runtime', 'agents/runtime'),
						group('Insight', 'agents/insight'),
					],
				},
			],
		}),
	],
});
