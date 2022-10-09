<template>
	<section :class="`${is_expanded ? 'is-expanded' : ''}`">
		<aside >
			<div class="logo">
				<img :src="logoURL" alt="Vue" /> 
			</div>

			<div class="menu-toggle-wrap">
				<button class="menu-toggle" @click="ToggleMenu">
					<span class="material-icons">keyboard_double_arrow_right</span>
				</button>
			</div>
			<h3>Menu</h3>
			<div class="menu">
				<router-link to="/" class="button">
					<span class="material-icons">home</span>
					<span class="text">Home</span>
				</router-link>
				<router-link to="/constructions" class="button">
					<span class="material-icons">description</span>
					<span class="text">工法</span>
				</router-link>
				<router-link to="/designProcess" class="button">
					<span class="material-icons">description</span>
					<span class="text">設計流程</span>
				</router-link>
				<router-link to="/drawingSystem" class="button">
					<span class="material-icons">description</span>
					<span class="text">施工圖系統</span>
				</router-link>
				<router-link to="/venderInfo" class="button">
					<span class="material-icons">description</span>
					<span class="text">廠商資訊</span>
				</router-link>
				<router-link to="/materials" class="button">
					<span class="material-icons">description</span>
					<span class="text">建材材料</span>
				</router-link>
				<router-link to="/equipment" class="button">
					<span class="material-icons">description</span>
					<span class="text">設備表格</span>
				</router-link>
				<router-link to="/lampsList" class="button">
					<span class="material-icons">description</span>
					<span class="text">燈具表格</span>
				</router-link>
				<router-link to="/designBasics" class="button">
					<span class="material-icons">description</span>
					<span class="text">設計基礎知識</span>
				</router-link>
				<router-link to="/backend" class="button">
					<span class="material-icons">description</span>
					<span class="text">後台架構</span>
				</router-link>
				<router-link to="/backup" class="button">
					<span class="material-icons">description</span>
					<span class="text">歷史專案資料歸檔</span>
				</router-link>
			</div>
		</aside>
		<div class="contain">
			<router-view></router-view>
		</div>
	</section>

</template>

<script setup>
import { ref } from 'vue'
import logoURL from '@/assets/logo.png'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
const ToggleMenu = () => {
	is_expanded.value = !is_expanded.value
	localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<style lang="scss" scoped>

aside {
	position: fixed;
	display: flex;
	flex-direction: column;
	background-color: var(--dark);
	color: var(--light);
	width: calc(2rem + 32px);
	overflow: hidden;
	min-height: 100vh;
	padding: 1rem;
	transition: 0.2s ease-in-out;
	.flex {
		flex: 1 1 0%;
	}
	.logo {
		margin-bottom: 1rem;
		img {
			width: 2rem;
		}
	}
	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;
		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;
		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}
	h3, .button .text {
		opacity: 0;
		display: none;
		transition: opacity 0.3s ease-in-out;
	}
	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}
	.menu {
		margin: 0 -1rem;
		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			&:hover {
				background-color: var(--dark-alt);
				.material-icons, .text {
					color: var(--primary);
				}
			}
			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);
				.material-icons, .text {
					color: var(--primary);
				}
			}
		}
	}
	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}
	
	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}

.contain{
	margin-left: 60px;
	width: calc(100% - 60px);
	transition: 0.2s ease-in-out;
}
section{
	&.is-expanded {
		aside{
			width: var(--sidebar-width);
		}
		.contain{
			width: calc(100% - var(--sidebar-width));
			margin-left: var(--sidebar-width);
		}
		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}
		h3, .button .text {
			opacity: 1;
			display: block;
		}
		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}
		.footer {
			opacity: 0;
		}
	}
}
</style>