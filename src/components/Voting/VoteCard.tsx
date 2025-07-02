import { memo } from 'react';
import styled from '@emotion/styled';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface VoteSiteProps {
  name: string;
  url: string;
}

const Card = styled.a`
  background: rgba(107, 1, 151, 0.1);
  padding: 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  transition: all 0.3s ease;
  border: 1px solid rgba(107, 1, 151, 0.2);
  
  &:hover {
    background: rgba(107, 1, 151, 0.2);
    transform: translateY(-2px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

const VoteButton = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  
  svg {
    font-size: 0.9rem;
  }
`;

const VoteCard = ({ name, url }: VoteSiteProps) => {
  return (
    <Card
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Vote on ${name} (opens in new tab)`}
    >
      <VoteButton>
        {name}
        <FaExternalLinkAlt aria-hidden="true" />
      </VoteButton>
    </Card>
  );
};

export default memo(VoteCard);