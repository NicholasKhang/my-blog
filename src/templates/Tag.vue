<template>
	<Layout>
		<v-container class="text-center">
			<v-row>
				<v-col class="pa-0">
					<h1 class="font-exan">Posts About</h1>
				</v-col>
			</v-row>
			<v-row>
				<v-col class="pa-0">
					<h1 class="font-exan">{{ "#" + $page.posts.id }}</h1>
				</v-col>
			</v-row>
		</v-container>

		<BlogPostList :posts="$page.posts.belongsTo.edges" />
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
query Tag ($id: ID!) {
	posts: tag(id: $id) {
		id
		belongsTo {
			edges {
				node {
					... on BlogPost {
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
	}
}
</page-query>
