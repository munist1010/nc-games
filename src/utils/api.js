import axios from "axios";

const gamesAPI = axios.create({
	baseURL: "https://aarons-nc-games.onrender.com/api",
});

export const fetchReviews = () => {
	return gamesAPI.get("reviews").then((res) => {
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

// export const postReview = (newReview) => {
// 	return gamesAPI.post(`/reviews/`, newReview).then((data) => {
// 		return data.reviews;
// 	});
// };
