import axios from "axios";

const gamesAPI = axios.create({
	baseURL: "https://aarons-nc-games.onrender.com/api",
});

export const fetchReviews = (category_name, sortBy, order) => {
	return gamesAPI.get("/reviews", {
		params:{
			category: category_name && `'${category_name}'`,
			sort_by: sortBy,
			order: order
	}}).then((res) => {
		const { data } = res;
		return data;
	});
};

export const fetchReviewsByID = (params) => {
	return gamesAPI.get(`/reviews/${params}`).then((res) => {
		const { data } = res;
		return data;
	});
};

export const fetchCommentsByID = (params) => {
	return gamesAPI.get(`/reviews/${params}/comments`).then((res) => {
		const { data } = res;
		return data;
	})
}

export const voteForReview = (params, votes) => {
	return gamesAPI
	.patch(`/reviews/${params}`, {
		inc_votes: votes
	})
	.then(({data}) => {
		return data
	})
}

export const postComment = (params, comment_data) => {
	console.log(comment_data)
	return gamesAPI
	.post(`/reviews/${params}/comments`, comment_data)
}

export const fetchCategories = () => {
	return gamesAPI
	.get('/categories').then((res) => {
		const {data} = res;
		return data
	})
}

export const deleteComment = (comment_id) => {
	return gamesAPI.delete(`/comments/${comment_id}`).then((res) => {
		return res
	})
}
