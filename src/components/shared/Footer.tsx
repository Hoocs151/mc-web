import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaDiscord, FaTwitter, FaYoutube, FaGithub, FaServer } from 'react-icons/fa';
import { SERVER } from '../../constants/index';
import { usePlayerCount } from '../../hooks/usePlayerCount';
import { formatNumber } from '../../utils/time';

const FooterContainer = styled.footer`
  color: ${props => props.theme.colors.text};
  padding: 3rem 2rem 1.5rem;
  border-top: 1px solid rgba(107, 1, 151, 0.3);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(16, 16, 16, 0.6);
    z-index: 0;
    pointer-events: none;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  position: relative;
  z-index: 1;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Section = styled(motion.div)`
  h3 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  p {
    font-family: ${props => props.theme.fonts.body};
    line-height: 1.6;
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(107, 1, 151, 0.2);
  border-radius: 12px;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(107, 1, 151, 0.3);
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const ServerStats = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled.div<{ $loading?: boolean }>`
  background: rgba(107, 1, 151, 0.1);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid rgba(107, 1, 151, 0.2);
  opacity: ${props => props.$loading ? 0.6 : 1};
  
  .label {
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: 0.5rem;
  }
  
  .value {
    font-family: ${props => props.theme.fonts.heading};
    font-size: 1.1rem;
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const QuickLink = styled(motion.a)`
  color: ${props => props.theme.colors.textSecondary};
  text-decoration: none;
  font-family: ${props => props.theme.fonts.body};
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    transform: translateX(5px);
  }
`;

const BottomBar = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(107, 1, 151, 0.2);
  text-align: center;
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.textSecondary};
  position: relative;
  z-index: 1;
  
  .made-with-love {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
    
    svg {
      color: #ff6b6b;
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
  }
`;

const socialLinks = [
  { icon: <FaDiscord />, url: 'https://discord.gg/yourserver', label: 'Discord' },
  { icon: <FaTwitter />, url: 'https://twitter.com/yourserver', label: 'Twitter' },
  { icon: <FaYoutube />, url: 'https://youtube.com/yourserver', label: 'YouTube' },
  { icon: <FaGithub />, url: 'https://github.com/yourserver', label: 'GitHub' },
];

const quickLinks = [
  { label: 'Server Rules', href: '#rules' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Vote for Us', href: '#voting' },
  { label: 'Server Info', href: '#server-info' },
  { label: 'Join Discord', href: 'https://discord.gg/yourserver' },
];

const Footer = () => {
  const { serverStatus, loading } = usePlayerCount();

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <FooterContainer>
      <Content>
        <Section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>
            <FaServer />
            {SERVER.NAME}
          </h3>
          <p>
            Experience the largest Minecraft server network with unique games,
            active community, and endless entertainment. Join millions of players worldwide!
          </p>
          <SocialLinks>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={link.label}
              >
                {link.icon}
              </SocialLink>
            ))}
          </SocialLinks>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3>Quick Links</h3>
          <QuickLinks>
            {quickLinks.map((link, index) => (
              <QuickLink
                key={index}
                onClick={() => scrollToSection(link.href)}
                whileHover={{ x: 5 }}
              >
                {link.label}
              </QuickLink>
            ))}
          </QuickLinks>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Live Server Stats</h3>
          <ServerStats>
            <StatItem>
              <div className="label">Server IP</div>
              <div className="value">{SERVER.IP}</div>
            </StatItem>
            <StatItem>
              <div className="label">Version</div>
              <div className="value">
                {serverStatus?.version || SERVER.VERSION}
              </div>
            </StatItem>
            <StatItem $loading={loading}>
              <div className="label">Status</div>
              <div className="value">
                {loading ? '...' : serverStatus?.online ? 'Online' : 'Offline'}
              </div>
            </StatItem>
            <StatItem $loading={loading}>
              <div className="label">Players Online</div>
              <div className="value">
                {loading ? '...' : formatNumber(serverStatus?.players.online || 0)}
                {serverStatus?.players.max ? `/${formatNumber(serverStatus.players.max)}` : ''}
              </div>
            </StatItem>
          </ServerStats>
        </Section>
      </Content>

      <BottomBar>
        <p>&copy; 2025 {SERVER.NAME}. All rights reserved.</p>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;