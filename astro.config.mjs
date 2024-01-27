import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Coding",
			favicon: "/favicon.svg",
			logo: {
				src: "./src/assets/logo.webp",
				light: "./src/assets/logo.webp",
				dark: "./src/assets/logo.webp",
			},
			social: {
				github: "https://github.com/yersonargote/my-blog",
			},
			sidebar: [
				{
					label: "Terminales",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Windows", link: "/terminals/windows" },
						{ label: "Ubuntu/Linux", link: "/terminals/linux" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
			locales: {
				root: {
					label: "Español",
					lang: "es",
				},
			},
		}),
	],
});
