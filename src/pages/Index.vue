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
	metaInfo: {
		title: "Nicholas Lee",
	},
	components: {
		BlogPostList,
	},
};
</script>

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
