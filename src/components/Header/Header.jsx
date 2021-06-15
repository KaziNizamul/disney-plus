/* eslint-disable jsx-a11y/anchor-is-valid */
/* ------------------------------ react things ------------------------------ */
import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return (
		<Nav>
			<Logo src="https://bit.ly/2TpENoq" />
			<NavMenu>
				<a>
					{/* <img src="https://bit.ly/3zlIM5Y" alt="broken" /> */}
					<span>TV</span>
				</a>
				<a>
					{/* <img src="https://bit.ly/3xfhGvr" alt="broken" /> */}
					<span>Movies</span>
				</a>
				<a>
					{/* <img src="https://bit.ly/3cBJ2UQ" alt="broken" /> */}
					<span>Sports</span>
				</a>
				<a>
					{/* <img src="https://bit.ly/3pKTFtP" alt="broken" /> */}
					<span>News</span>
				</a>
				<a>
					{/* <img src="https://bit.ly/3vm9bxo" alt="broken" /> */}
					<span>Premium</span>
				</a>
				<a>
					<div id="DisneyParent">
						{/* <img src="https://bit.ly/3xe1R8o" alt="broken" /> */}
						<span>Disney+</span>
						<div id="DisneyPlusNew">NEW</div>
					</div>
				</a>
				<a>
					<img
						src="https://bit.ly/3gxSyJX"
						alt="broken"
						id="KidsLogo"
					/>
				</a>
			</NavMenu>

			<SearchContainer>
				<input
					type="text"
					name="name"
					id="searchInput"
					placeholder="Search"
				/>
				<img src="https://bit.ly/2U3nnys" alt="broken" />
			</SearchContainer>

			<UserImg src="https://bit.ly/2U5p9iJ" />
		</Nav>
	);
};

export default Header;

const Nav = styled.nav`
	background-image: linear-gradient(0deg, #141b29, #0c111b 300px);
	color: rgba(255, 255, 255, 0.8);

	height: 80px;
	width: 95%;
	padding: 0 36px;

	display: flex;
	align-items: centre;
	position:fixed;
	z-index:10;
`;

const Logo = styled.img`
	cursor: pointer;
	padding-bottom: 10px;
	margin:16px 0 16px 16px;
	padding-left:5px;
`;

const NavMenu = styled.div`
	display: flex;
	flex: 1; // put this navMenu as imp. And make space till right;
	align-items: center;

	margin-left: 25px;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		cursor: pointer;

		img {
			height: 20px;
		}

		span {
			font-size: 16px;
			letter-spacing: 0.3px;
			position: relative;
			font-weight: 400;
			text-rendering: auto;
			font-smoothing: grayscale;
		}

		#DisneyParent {
			padding-top: 10px;
		}
		#DisneyPlusNew {
			font-size: 0.5rem;
			padding-bottom: -3px;
			color: #1f80e0;
			text-align: center;
			font-weight: 700;
		}

		#KidsLogo {
			width: 40px;
			height: 15px;
		}
	}
`;

const UserImg = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 50px;
	margin: auto;
	cursor: pointer;
`;

const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	background-image: linear-gradient(0deg, #141b29, #0c111b 300px);
	margin: 0 20px;

	img {
		height: 20px;
		width: 20px;
		color: rgba(255, 255, 255, 0.8);
		margin-left: -20px;
	}
	input {
		caret-color: #1f80e0;
		background-color: transparent;
		min-width: 240px;
		padding: 0 28px 0 0;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.8);
		height: 32px;

		/* --------------------------- bottom color only : -------------------------- */
		outline: 0;
		border-width: 0 0 1px 0;
		border-color: rgba(255, 255, 255, 0.8);

		&:placeholder {
			font-size: 16px;
			padding: 3px;
		}
		
		&:focus {
			border-color: #1f80e0;
			min-width: 360px;
			transition: 0.1s;
			transform: scaleX(1);
			transform-origin: left center;
		}
	}

	#searchInput {
	}
`;
