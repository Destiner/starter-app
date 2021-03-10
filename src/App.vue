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
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', Helvetica, Arial, sans-serif;
}
</style>
