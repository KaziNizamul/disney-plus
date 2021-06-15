import React from 'react';
import styled from 'styled-components';
/* ------------------------------- components ------------------------------- */
import ImageSlider from '../ImageSilder/ImageSlider';
import Movies from '../Movies/Movies';

const Home = () => {

    return (
        <div>
            <Container>
				<ImageSlider />
				<Movies />
                {/* Home and home */}
            </Container>
        </div>
    )
}


export default Home;

// const Container = styled.main`
// 	min-height: calc(100vh - 80px);
// 	// padding: 80px 0 calc(3.5vw + 5px);
// 	// position: absolute;
//     padding-top:80px;
//     background: linear-gradient(to bottom,  #141b29, #0c111b 440px );

// 	&:before {
// 		content: '';
// 		position: relative;
// 		inset: 0;
// 		z-index: -1;
// 	}
// `;

const Container = styled.main`
	color:white;
	min-height: calc(100vh - 80px);
	padding: 80px 0; //calc(3.5vw + 5px);
	position: relative;
	overflow-x: hidden;
	&:before {
		background-image: linear-gradient(to bottom, #141d2d, #0c111b 600px);
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -99;
	}
`;