import { memo } from 'react';
import styled from '@emotion/styled';
import { FaVoteYea } from 'react-icons/fa';
import VoteCard from './VoteCard';
import { VOTING } from '../../constants/index';
import type { Theme } from '@emotion/react';

interface StyledProps {
  theme: Theme;
}

const Container = styled.section`
  padding: 3rem 2rem;
  color: ${props => props.theme.colors.text};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(107, 1, 151, 0.02);
    z-index: 0;
    pointer-events: none;
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-family: ${(props: StyledProps) => props.theme.fonts.heading};
  font-size: clamp(1.8rem, 4vw, 2rem);
  margin-bottom: 1rem;
  color: ${(props: StyledProps) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  svg {
    font-size: clamp(1.6rem, 3.5vw, 1.8rem);
  }
`;

const Description = styled.p`
  font-family: ${(props: StyledProps) => props.theme.fonts.body};
  font-size: clamp(1rem, 2vw, 1.1rem);
  margin-bottom: 2rem;
  color: ${(props: StyledProps) => props.theme.colors.textSecondary};
`;

const VotingSitesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const Voting = () => {
  return (
    <Container id="voting">
      <Content>
        <Title>
          <FaVoteYea aria-hidden="true" />
          Vote for YourServer
        </Title>
        <Description>
          Support our server by voting daily! Each vote helps us grow.
        </Description>

        <VotingSitesGrid>
          {VOTING.SITES.map((site) => (
            <VoteCard
              key={site.url}
              name={site.name}
              url={site.url}
            />
          ))}
        </VotingSitesGrid>
      </Content>
    </Container>
  );
};

export default memo(Voting);