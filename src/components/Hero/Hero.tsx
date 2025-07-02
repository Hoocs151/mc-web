import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { usePlayerCount } from '../../hooks/usePlayerCount';
import { useToast } from '../../contexts/ToastContext';
import { SERVER } from '../../constants/index';
import { formatNumber } from '../../utils/time';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  text-align: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    z-index: -1;
  }
`;

const Title = styled(motion.h1)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 4rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const Tagline = styled(motion.p)`
  font-family: ${props => props.theme.fonts.body};
  font-size: 1.5rem;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const JoinButton = styled(motion.button)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.default};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: ${props => props.theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const ServerStatus = styled(motion.div)`
  margin-top: 2rem;
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.textSecondary};
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem 1.5rem;
  border-radius: 20px;
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

const StatusIndicator = styled.div<{ online: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.online ? '#4caf50' : '#f44336'};
    box-shadow: 0 0 10px ${props => props.online ? '#4caf50' : '#f44336'};
  }
`;

const PlayerInfo = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;

const LoadingText = styled.span`
  opacity: 0.7;
`;

const ErrorText = styled.span`
  color: #ff6b6b;
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Hero = () => {
  const { playerCount, loading, error, serverStatus } = usePlayerCount();
  const { showToast } = useToast();

  const handleJoinClick = async () => {
    try {
      await navigator.clipboard.writeText(SERVER.IP);
      showToast('success', 'Server IP copied to clipboard!');
    } catch (err) {
      showToast('error', 'Failed to copy server IP');
      console.error('Error copying to clipboard:', err);
    }
  };

  return (
    <HeroContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {SERVER.NAME}
      </Title>
      <Tagline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        The world's largest Minecraft server network
      </Tagline>
      <JoinButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        onClick={handleJoinClick}
      >
        Join Now
      </JoinButton>
      <ServerStatus
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {loading ? (
          <LoadingContainer>
            <LoadingSpinner size="20px" />
            <LoadingText>Checking server status...</LoadingText>
          </LoadingContainer>
        ) : error ? (
          <ErrorText>{error}</ErrorText>
        ) : (
          <>
            <StatusIndicator online={serverStatus?.online || false}>
              {serverStatus?.online ? 'Server Online' : 'Server Offline'}
            </StatusIndicator>
            <PlayerInfo>
              {formatNumber(playerCount)}
              {serverStatus?.players.max > 0 && `/${formatNumber(serverStatus.players.max)}`}
              {' '}Players Online
            </PlayerInfo>
            {serverStatus?.version && (
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                Version: {serverStatus.version}
              </div>
            )}
          </>
        )}
      </ServerStatus>
    </HeroContainer>
  );
};

export default Hero;