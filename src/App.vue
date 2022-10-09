<template>
	<div class="app-wrapper">
	<div class="container-wrapper ">
		<Sidebar />
	</div>
</div>
</template>

<script>
  import Sidebar from '@/layout/components/Sidebar.vue'
  import AppMain from '@/layout/components/AppMain.vue'
	export default {
		components: {
			Sidebar,
			AppMain
		}
	}
</script>

<style lang="scss">
.app-wrapper {
	position: relative;
	height: 100%;
	width: 100%;
}
.main{
display:flex
}

:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}
body {
	background: var(--light);
}
.contain{
	width: 100%;
	padding: 4px 12px;
}
button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}
.app {
	display: flex;
	main {
		flex: 1 1 0;
		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}

</style>
