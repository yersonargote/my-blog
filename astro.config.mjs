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
						{ label: "Windows", link: "/terminals/windows" },
						{ label: "Ubuntu/Linux", link: "/terminals/linux" },
					],
				},
				{
					label: "Shells",
					items: [
						{ label: "Zsh", link: "/shells/zsh" },
					],
				},
				{
					label: "Lenguajes",
					items: [
						{ label: "Node.js", link: "/languages/node" },
						{ label: "Python", link: "/languages/py" },
						{ label: "Rust", link: "/languages/rs" },
						{ label: "Java", link: "/languages/java" },
						{ label: "Go", link: "/languages/go" },
					]
				}
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
