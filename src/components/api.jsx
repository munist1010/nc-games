import axios from "axios";

const gamesAPI = axios.create({
	baseURL: "",
});

export const fetchReviews = () => {
	return gamesAPI.get("/items").then((res) => {
		const { data } = res;
		return data.items;
	});
};

export const fetchReviewsByID = (params) => {
	return gamesAPI.get(`/items?category_name=${params}`).then((res) => {
		const { data } = res;
		return data.items;
	});
};

export const postReview = (newItem) => {
	return gamesAPI.post(`/items/`, newItem).then((data) => {
		return data.item;
	});
};
