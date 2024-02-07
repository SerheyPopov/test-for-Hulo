import { FC, useEffect, useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Virtual } from "swiper/modules";
import ReactPlayer from "react-player";
import "swiper/css";

import "./Main.css";
import { processSlidesData } from "../slidesData";
import { fetchVideoInfo } from "../API/API";

export type Slide = {
	id: number;
	value: string;
	videoLink: string;
	title: string;
};

const Main: FC = () => {
	const swiperRef = useRef<SwiperType>();

	const [isOpen, setOpen] = useState<boolean>(false);
	const [videoSlide, setVideoSlide] = useState<Slide[]>([]);
	const [selectedSlideId, setSelectedSlideId] = useState<number | null>(null);

	useEffect(() => {
		fetchVideoInfo().then((respons) => {
			const fetchedSlides = processSlidesData(respons);
			setVideoSlide(fetchedSlides);
		});
	}, []);

	const openModal = (id: number) => {
		setSelectedSlideId(id);
	};

	const closeModal = (e: React.SyntheticEvent<EventTarget>) => {
		let target = e.target as HTMLElement;
		if (target.tagName !== "DIV") {
			return;
		}
		setOpen(false);
	};

	const currentSlide = videoSlide.find((slide) => slide.id === selectedSlideId);

	return (
		<div className="container">
			<div>
				<div className="button-container">
					<button type="button" onClick={() => swiperRef.current?.slidePrev()}>
						right
					</button>
					<button type="button" onClick={() => swiperRef.current?.slideNext()}>
						left
					</button>
				</div>
				<div className="slider-container">
					<Swiper
						slidesPerView={4}
						loop={false}
						modules={[Navigation, Virtual]}
						onBeforeInit={(swiper: SwiperType) => {
							swiperRef.current = swiper;
						}}
						virtual
					>
						<ul>
							{videoSlide.map((item) => (
								<SwiperSlide key={item.id}>
									<div
										className="slider-item-container "
										onClick={() => {
											openModal(item.id);
											setOpen(true);
										}}
									>
										<img src={item.title} alt="title" />
										<p>{item.value}</p>
									</div>
								</SwiperSlide>
							))}
						</ul>
					</Swiper>
				</div>
				{isOpen && (
					<div className="modal-video-wrapper" onClick={closeModal}>
						<div className="modal-video-overlay">
							<p>{currentSlide?.value}</p>
							<ReactPlayer
								url={currentSlide?.videoLink}
								playing={true}
								controls={true}
								volume={0.5}
								width="100%"
								height="100%"
								playsinline={true}
							/>
						</div>
						<ul className="pagination-list">
							{videoSlide.map((item) => (
								<li key={item.id} className="pagination-item">
									<button
										type="button"
										className={`pagination-button ${item.id === currentSlide?.id ? "active" : ""}`}
										onClick={() => {
											openModal(item.id);
										}}
									></button>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Main;
