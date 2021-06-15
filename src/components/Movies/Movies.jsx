import React from 'react';
import styled from 'styled-components';

const Movies = () => {

    return (
        <Container>
            <Content>
                <Wrap>
                    Recommended For You 
                </Wrap>
           </Content>
        </Container>
    )
}

export default Movies;

const Container = styled.div`
    margin-inline: calc(3.5vw + 13px);
`;

const Content = styled.div`

`;

const Wrap = styled.div`
    
`;