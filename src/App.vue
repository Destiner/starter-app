<template>
	<div id="app">
		<div>
			<router-link :to="'/'">
				Home
			</router-link>
			<router-link :to="'/about'">
				About
			</router-link>
		</div>
		<router-view />
	</div>
</template>

<style>
body {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

/* Reset */

*,
*::before,
*::after {
	box-sizing: border-box;
}

html,
body {
	height: 100%;
}

img,
picture,
video,
canvas,
svg {
	display: block;
	max-width: 100%;
}

input,
button,
textarea,
select {
	font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
	overflow-wrap: break-word;
}

#app {
	isolation: isolate;
}
</style>
