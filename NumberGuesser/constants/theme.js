const s = `50%`;
const l = `60%`;

export default {
	color: {
		primary: `hsl(210, ${s}, ${l})`,
		secondary: `hsl(15, ${s}, ${l})`,
		tertiary: `hsl(150, ${s}, ${l})`,

		dark: `hsl(0, 0%, 10%)`,
		light: `hsl(0, 0%, 90%)`,
		white: `hsl(0, 0%, 100%)`,
		inactive: `hsl(0, 0%, 25%)`,
		gray: `hsl(0, 0%, 50%)`,

		success: `hsl(120, ${s}, ${l})`,
		info: `hsl(180, ${s}, ${l})`,
		alert: `hsl(30, ${s}, ${l})`,
		warning: `hsl(60, ${s}, ${l})`,
		disabled: `hsl(0, 0%, 33%)`,

		text: `hsl(0, 0%, 90%)`,

		headerBg: `hsl(0, 0%, 10%)`,
		sceneBg: `hsl(0, 0%, 15%)`,
		cardBg: `hsl(0, 0%, 20%)`,
	}
};