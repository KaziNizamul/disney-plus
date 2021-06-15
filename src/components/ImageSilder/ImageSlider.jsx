import React from 'react';
import './ImageSlider.css';
import styled from 'styled-components';
/* ----------------------------- slider carousal ---------------------------- */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const ImageSlider = () => {

	let settings = {
		speed: 500,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<Carousel>
			<Slider {...settings} >
				<div>
					<div className="card">
						<div id="content-holder">
							<div className="title">Avengers: Endgame</div>
							<div className="toptitle">
								<span className="meta-data">Superhero</span>
								<span className="meta-data">2019</span>
							</div>
							<div className="description">
								After the devastating events of the Infinity
								War, the Avengers assemble once more to reverse
								Thanos’ actions and restore balance to the
								universe.
							</div>
						</div>
						<div>
							<div className="image-gradient"></div>
							<img src="https://bit.ly/3vjplrr" alt="broken" />
						</div>
					</div>
				</div>

				<div>
					<div className="card">
						<div id="content-holder">
							<div className="title">Shaadisthan</div>
							<div className="toptitle">
								<span className="meta-data">Hindi</span>
								<span className="meta-data">Musical</span>
								<span className="meta-deta">2021</span>
							</div>
							<div className="description">
								Mumbai to Ajmer, a squabbling family, a band and
								clashing values. Along the roads of friendship
								and life, this journey only gets crazier!
							</div>
						</div>
						<div>
							<div className="image-gradient"></div>
							<img src="https://bit.ly/3gi6jgD" alt="broken" />
						</div>
					</div>
				</div>

				<div>
					<div className="card">
						<div id="content-holder">
							<div className="title">Chhichhore</div>
							<div className="toptitle">
								<span className="meta-data">Hindi</span>
								<span className="meta-data">Drama</span>
								<span className="meta-deta">2019</span>
							</div>
							<div className="description">
								Divided by time, united by a tragic incident. In
								a bittersweet reunion, seven middle-aged friends
								take a walk down the memory lane at the least
								expect...
							</div>
						</div>
						<div>
							<div className="image-gradient"></div>
							<img src="https://bit.ly/3cGhJsr" alt="broken" />
						</div>
					</div>
				</div>

			</Slider>
		</Carousel>
	);
};

export default ImageSlider;

const Carousel = styled(Slider)`
	.slick-list {
		overflow: visible;
	}
	
	.slick-slide, .slick-slide * {
		outline: none !important;
	}

	.slick-prev {
		z-index: 1;
		opacity: 0;

		width: 200px;
		height: 100%;
		left: -45px;

		&:before {
			font-size: 35px;
			padding-right: 78px;
		}
		&:hover {
			opacity: 1;
		}
	}

	.slick-next {
		opacity: 0;
		z-index: 1;

		width: 200px;
		height: 100%;
		// left: -45px;

		&:before {
			padding-left: 143px;
			font-size: 35px;
		}
		&:hover {
			opacity: 1;
		}
	}

	margin: 0 50px;
	max-width: 100%;
	min-height: 350px;

	div {
		display: flex;
		margin-left: -1px;
		background-color: transparent;

		&:hover {
			opacity: 1;
		}

		img {
			// mask-image: linear-gradient(to left, #030b17, transparent 98%);
			width: 100%;
			object-fit: cover;
			height: 100%;
			border-radius: 0 5px 5px 0;
			margin-right: 20px !important;
		}
		.image-gradient {
			width: 200px;
			height: 100%;
			background: linear-gradient(to right, #030b17, rgba(0, 0, 0, 0));
			position: absolute;
			top: 0;
		}

		#content-holder {
			padding: 5%;
			padding-top: 40px;
			padding-right: 0px;
			border-radius: 5px 0 0 5px;

			margin-left: 20px !important;

			background-color: #030b17;

			max-width: 25%;
			display: flex;

			flex-direction: column;

			.title {
				margin-top: 20px;
				font-size: 28px;
				font-weight: 600;
				color: #fff;
			}

			.toptitle {
				color: rgba(255, 255, 255, 0.6);
				font-weight: 500;
				padding-top: 20px;

				.meta-data:not(:last-child) {
					&:after {
						content: '• ';
						padding: 6px;
					}
				}
			}
			.description {
				color: rgba(255, 255, 255, 0.8);
				font-size: 16;
				overflow-wrap: break-word;
				padding-top: 10px;
				line-height: 28px;
				-webkit-box-orient: vertical;
				display: -webkit-box;
				-webkit-line-clamp: 4;
				overflow: hidden;

				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
`;
