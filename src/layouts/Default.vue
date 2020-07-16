<template>
	<v-app dark>
		<top-nav-bar :logo="$static.metadata.logo" />
		<v-main>
			<transition name="fade" appear>
				<v-container>
					<slot />
				</v-container>
			</transition>
		</v-main>
	</v-app>
</template>

<static-query>
query {
  metadata {
    siteName
	logo
  }
}
</static-query>

<script>
import TopNavBar from "~/components/Layout/TopNavBar.vue";

export default {
	components: {
		TopNavBar,
	},
};
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";

body {
	font-family: elianto !important;
	// text-shadow: 1px 1px 1px $shadow-color;
}

.text-shadow {
	text-shadow: 3px 3px 3px $shadow-color;
}

#logo {
	font-size: 40px;
}

.v-application a {
	color: $white !important;
	text-shadow: 1px 1px 3px $shadow-color;
	text-decoration: none;
}

.v-application a:hover {
	text-shadow: 1px 1px 10px $shadow-color;
}

.v-application code {
	all: unset;
	color: #eee;
}

.v-main {
	width: 100%;
    max-width: 760px !important;
	margin-left: auto;
	margin-right: auto;
}

.fade-enter-active {
	transition: opacity 1s;
}

.fade-enter {
	opacity: 0;
}
</style>
