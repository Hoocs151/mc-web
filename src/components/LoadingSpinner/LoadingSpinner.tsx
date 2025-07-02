import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div<{ size?: string }>`
  display: inline-block;
  position: relative;
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
`;

const SpinnerOuter = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${props => props.theme.colors.primary} transparent transparent transparent;
  opacity: 0.7;
`;

const SpinnerInner = styled(SpinnerOuter)`
  animation-delay: -0.45s;
  width: 75%;
  height: 75%;
  top: 12.5%;
  left: 12.5%;
  opacity: 0.5;
`;

interface LoadingSpinnerProps {
  size?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size, className }) => {
  return (
    <SpinnerContainer size={size} className={className}>
      <SpinnerOuter />
      <SpinnerInner />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;