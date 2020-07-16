<template>
	<Layout>
		<article>
			<header class="text-center">
				<h1>{{ $page.post.title }}</h1>
				<p class="post-date">Published on {{ $page.post.date }}</p>
				<ShareNetwork
					network="facebook"
					:url="`https://nicholaskhang.github.io/my-blog/${$page.post.path}`"
					:title="$page.post.title"
					:description="$page.post.description"
					quote="The hot reload is so fast it\'s near instant. - Evan You"
				>
					Share on Facebook
				</ShareNetwork>
				<g-link
					:href="tag.path"
					v-for="tag in $page.post.tags"
					:key="tag.id"
				>
					<v-chip :color="tag.id.toLowerCase()" label class="ma-2">
						{{ "#" + tag.id }}
					</v-chip>
				</g-link>
			</header>

			<main class="content" v-html="$page.post.content"></main>

			<footer class="mt-12">
				<v-row>
					<v-col class="col-12 col-md-6">
						<v-card>
							<v-list-item>
								<v-list-item-avatar size="64px">
									<img
										src="../assets/images/profile-picture.jpg"
										alt="profile-picture"
									/>
								</v-list-item-avatar>
								<v-list-item-content>
									<v-list-item-title>
										Author: {{ $static.metadata.author }}
									</v-list-item-title>
									<v-list-item-subtitle>
										Published on: {{ $page.post.date }}
									</v-list-item-subtitle>
									<v-list-item-subtitle>
										Updated on: {{ $page.post.last_update }}
									</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
						</v-card>
					</v-col>
				</v-row>
			</footer>
		</article>
	</Layout>
</template>

<script>
export default {
	metaInfo() {
		return {
			title: this.$page.post.title,
		};
	},
};
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";

header {
	h1 {
		font-size: 36px;
		text-shadow: 1px 1px 10px $shadow-color;
	}

	.post-date {
		color: $dark6;
	}
}

.content {
	h1 {
		font-size: 36px;
		text-shadow: 1px 1px 5px $shadow-color;
		margin-top: 12px;
		padding-top: 12px;
		padding-bottom: 12px;
		text-decoration: underline;
	}

	h2 {
		font-size: 30px;
		text-shadow: 1px 1px 5px $shadow-color;
		margin-top: 12px;
		padding-top: 12px;
		padding-bottom: 12px;
		text-decoration: underline;
	}

	h3 {
		font-size: 24px;
		text-shadow: 1px 1px 5px $shadow-color;
		margin-top: 12px;
		padding-top: 12px;
		padding-bottom: 12px;
		text-decoration: underline;
	}

	h4,
	h5 {
		font-size: 20px;
		text-shadow: 1px 1px 5px $shadow-color;
		margin-top: 12px;
		padding-top: 12px;
		padding-bottom: 12px;
	}

	blockquote {
		padding: 16px 0 8px 24px;
		margin-bottom: 16px;
		border-left: 4px solid $shadow-color;
		background-color: $dark3;
	}

	a {
		color: $link-color !important;
	}

	strong {
		text-shadow: 1px 1px 1px $shadow-color;
	}

	ul,
	ol {
		padding: 12px 0 12px 24px;

		li {
			padding: 6px 0;
		}
	}

	img {
		max-width: 100% !important;
	}

	pre {
		margin-top: 16px;
		margin-bottom: 16px;
	}
}

.gridsome-highlight-code-line {
	background-color: #3d4148; //for solarized theme
	display: block;
	margin-right: -1em;
	margin-left: -1em;
	padding-right: 1em;
	padding-left: 0.75em;
	border-left: 0.25em solid #99d8ff;
}
</style>

<static-query>
query {
	metadata {
		author
	}
}
</static-query>

<page-query>
query Post ($path: String!) {
	post: blogPost (path: $path) {
		id
		title
		date (format: "MMMM D, YYYY h:mma")
		last_update (format: "MMMM D, YYYY h:mma")
		tags {
			id
			path
		}
		content
	}
}
</page-query>
