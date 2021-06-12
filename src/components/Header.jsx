/* eslint-disable jsx-a11y/anchor-is-valid */
/* ------------------------------ react things ------------------------------ */
import React from 'react';
import styled from 'styled-components';

/* --------------------------------- images --------------------------------- */
// import logo from '../../publicFile/images/logo.svg';
import homeIcon from '../../publicFile/images/home-icon.svg';

const Header = () => {
	return (
		<Nav>
			<Logo />
			<NavMenu>
				<a>
					<img src={homeIcon} alt="broken" />
				</a>
				<div>
					
				</div>
			</NavMenu>
		</Nav>
	);
};

export default Header;

const Nav = styled.nav`
	background-color: #090b13;
	color: white;

	height: 70px;

	padding: 0 36px;

	display: flex;
	align-items: centre;
`;

const Logo = styled.img`
	width: 80px;
	background-image: url(../../publicFile/images/logo.svg);
`;

const NavMenu = styled.div`
	color: white;
	background-image: url(https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=160&d=retro&r=pg);
`;
