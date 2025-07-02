import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaCopy, FaCheck, FaServer, FaUsers, FaGem, FaShieldAlt } from 'react-icons/fa';
import { useToast } from '../../contexts/ToastContext';
import { SERVER } from '../../constants';
import { fadeIn, scale } from '../../animations';

const Container = styled.section`
  padding: 4rem 2rem;
  color: ${props => props.theme.colors.text};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(45, 1, 87, 0.05);
    z-index: 0;
    pointer-events: none;
  }
`;

const Content = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  position: relative;
  z-index: 1;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const Description = styled(motion.div)`
  h2 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.primary};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  p {
    font-family: ${props => props.theme.fonts.body};
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.textSecondary};
  }
`;

const Features = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const FeatureItem = styled(motion.li)`
  font-family: ${props => props.theme.fonts.body};
  padding: 1rem;
  background: rgba(107, 1, 151, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all ${props => props.theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
    background: rgba(107, 1, 151, 0.2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
  }
`;

const ServerIP = styled(motion.div)`
  background: rgba(107, 1, 151, 0.2);
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  h3 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.primary};
  }
`;

const IPBox = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
  padding: 1.2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  border: 1px solid rgba(107, 1, 151, 0.3);
  
  span {
    font-family: ${props => props.theme.fonts.heading};
    font-size: 1.4rem;
    letter-spacing: 1px;
  }
`;

const CopyButton = styled(motion.button)`
  background: ${props => props.theme.colors.primary};
  border: none;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  padding: 0.8rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${props => props.theme.transitions.default};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${props => props.theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const VersionInfo = styled(motion.div)`
  margin-top: 2rem;
  font-family: ${props => props.theme.fonts.body};
  font-size: 1rem;
  color: ${props => props.theme.colors.textSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const features = [
  { icon: <FaServer />, text: 'High-performance servers' },
  { icon: <FaUsers />, text: 'Active community' },
  { icon: <FaGem />, text: 'Custom features' },
  { icon: <FaShieldAlt />, text: 'Anti-grief protection' },
];

const ServerInfo = () => {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SERVER.IP);
      setCopied(true);
      showToast('success', 'Server IP copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      showToast('error', 'Failed to copy server IP');
      console.error('Error copying to clipboard:', err);
    }
  };

  return (
    <Container>
      <Content {...fadeIn}>
        <Description {...fadeIn}>
          <h2>Welcome to {SERVER.NAME}</h2>
          <p>
            Experience the world's largest Minecraft server network featuring unique games,
            competitive tournaments, and a thriving community of millions of players.
            Join the ultimate Minecraft gaming experience with custom games and endless entertainment.
          </p>
          <Features>
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {feature.icon}
                <span>{feature.text}</span>
              </FeatureItem>
            ))}
          </Features>
        </Description>
        <ServerIP {...scale}>
          <h3>Join Our Server</h3>
          <IPBox
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <span>{SERVER.IP}</span>
            <CopyButton
              onClick={handleCopy}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {copied ? <FaCheck /> : <FaCopy />}
            </CopyButton>
          </IPBox>
          <VersionInfo
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <FaServer />
            Compatible with Minecraft Java Edition {SERVER.VERSION}
          </VersionInfo>
        </ServerIP>
      </Content>
    </Container>
  );
};

export default ServerInfo;