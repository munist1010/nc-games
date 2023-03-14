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
	return gamesAPI.get(`/reviews?review_id=${params}`).then((res) => {
		const { data } = res;
		return data.reviews;
	});
};

export const postReview = (newReview) => {
	return gamesAPI.post(`/reviews/`, newReview).then((data) => {
		return data.reviews;
	});
};
