<template>
	<Layout>
		<v-container class="text-center">
			<v-row>
				<v-col class="pa-0">
					<v-avatar size="128px">
						<img
							src="../assets/images/profile-picture.jpg"
							alt="profile-picture"
						/>
					</v-avatar>
				</v-col>
			</v-row>
			<v-row>
				<v-col class="pa-0">
					<h1 class="font-exan">Nicholas Lee</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col class="pa-0">
					<h2 class="font-exan">Web Developer Blog</h2>
				</v-col>
			</v-row>
		</v-container>

		<BlogPostList :posts="$page.posts.edges" />
	</Layout>
</template>

<script>
import BlogPostList from "~/components/BlogPostList.vue";

export default {
	metaInfo() {
		return {
			title: "Nicholas Lee",
			meta: [
				{
					property: "og:url", 
					name: "og:url", 
					content: this.$static.metadata.siteUrl + this.$static.metadata.pathPrefix
				},
				{
					property: "og:type",
					name: "og:type",
					content: "blog"
				},
				{
					property: "og:title",
					name: "og:title",
					content: "Nicholas Lee | My Blog"
				},
				{
					property: "og:description",
					name: "og:description",
					content: "Nicholas Lee | Web Developer Blog"
				},
				{
					property: "og:image",
					name: "og:image",
					content: this.$static.metadata.siteUrl + this.$static.metadata.pathPrefix + "/images/share/home.png"
				}
			]
		}
	},
	components: {
		BlogPostList,
	},
};
</script>

<static-query>
query {
	metadata {
		siteUrl
		pathPrefix
	}
}
</static-query>

<page-query>
query {
	posts: allBlogPost {
		edges {
			node {
				id
				title
				date (format: "MMMM D, YYYY")
				path
				tags {
					id
					path
				}
				description
			}
		}
	}
}
</page-query>
