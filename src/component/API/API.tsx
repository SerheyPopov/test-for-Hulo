import axios from "axios";
import config from "../../config.json";

export const fetchVideoInfo = async () => {
	try {
		const response = await axios.get(`https://api.vimeo.com/videos/824804225`, {
			headers: {
				Authorization: `Bearer ${config.vimeoApiToken}`,
				"Content-Type": "application/json",
				Accept: "application/vnd.vimeo.*+json;version=3.4",
			},
		});

		return response.data;
	} catch (error) {
		console.error("Error fetching video info:", error);
		return null;
	}
};
