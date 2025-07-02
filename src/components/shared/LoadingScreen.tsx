import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaCube } from 'react-icons/fa';

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #000000 0%, #1a0033 50%, #000000 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Logo = styled(motion.div)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  text-shadow: 0 0 20px rgba(107, 1, 151, 0.5);
`;

const LoadingBlocks = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Block = styled(motion.div)`
  width: 20px;
  height: 20px;
  background: ${props => props.theme.colors.primary};
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(107, 1, 151, 0.3);
`;

const LoadingText = styled(motion.p)`
  font-family: ${props => props.theme.fonts.body};
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.1rem;
`;

const ProgressBar = styled.div`
  width: 300px;
  height: 4px;
  background: rgba(107, 1, 151, 0.2);
  border-radius: 2px;
  overflow: hidden;
  margin-top: 1rem;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #6B0197, #8B21C7);
  border-radius: 2px;
`;

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Loading world...');

  useEffect(() => {
    const texts = [
      'Loading world...',
      'Generating terrain...',
      'Spawning mobs...',
      'Building structures...',
      'Almost ready...'
    ];

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }

        // Update loading text based on progress
        const textIndex = Math.floor((newProgress / 100) * texts.length);
        setLoadingText(texts[Math.min(textIndex, texts.length - 1)]);

        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const blockVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <LoadingContainer
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <FaCube style={{ marginRight: '1rem' }} />
        YourServer
      </Logo>

      <LoadingBlocks>
        {[...Array(5)].map((_, i) => (
          <Block
            key={i}
            variants={blockVariants}
            animate="animate"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </LoadingBlocks>

      <LoadingText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {loadingText}
      </LoadingText>

      <ProgressBar>
        <Progress
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </ProgressBar>
    </LoadingContainer>
  );
};

export default LoadingScreen;