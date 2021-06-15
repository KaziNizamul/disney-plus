import React from 'react';
import styled from 'styled-components';

const Movies = () => {

    return (
        <Container>
            <Content>
                <div className="title">
                    Recommended For You 
                </div>
                <Wrap>
                    <img src="" alt="" />
                </Wrap>
           </Content>
        </Container>
    )
}

export default Movies;

const Container = styled.div`
`;

const Content = styled.div`

`;

const Wrap = styled.div`
	margin: calc(3.5vw + 13px);
    margin-top:20px;
`;