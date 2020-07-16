<template>
	<v-container>
		<v-row>
			<v-col class="col-12" v-for="post in posts" :key="post.node.id">
				<v-card>
					<v-card-title>
						<g-link :to="post.node.path">
							{{ post.node.title }}
						</g-link>
					</v-card-title>

					<v-card-subtitle>
						<span>Published on: {{ post.node.date }}</span>
					</v-card-subtitle>

					<v-card-text>{{ post.node.description }}</v-card-text>

					<v-card-actions>
						<v-btn text>
							<g-link :to="post.node.path">Read</g-link>
						</v-btn>
					</v-card-actions>

					<v-divider></v-divider>

					<g-link
						:to="tag.path"
						v-for="tag in post.node.tags"
						:key="tag.id"
					>
						<v-chip
							class="ma-2"
							:color="tag.id.toLowerCase()"
							label
						>
							{{ "#" + tag.id }}
						</v-chip>
					</g-link>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	props: ["posts"],
};
</script>
