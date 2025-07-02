import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  type: ToastType;
  message: string;
  duration?: number;
  onClose: () => void;
}

const toastColors = {
  success: '#4caf50',
  error: '#f44336',
  info: '#2196f3',
};

const ToastContainer = styled(motion.div)<{ type: ToastType }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${props => toastColors[props.type]};
  color: white;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  min-width: 300px;
  max-width: 400px;
`;

const Message = styled.p`
  margin: 0;
  flex-grow: 1;
  font-family: ${props => props.theme.fonts.body};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const Toast: React.FC<ToastProps> = ({
  type,
  message,
  duration = 5000,
  onClose,
}) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheckCircle />;
      case 'error':
        return <FaExclamationCircle />;
      case 'info':
        return <FaInfoCircle />;
    }
  };

  return (
    <AnimatePresence>
      <ToastContainer
        type={type}
        initial={{ opacity: 0, y: 50, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
      >
        <IconContainer>{getIcon()}</IconContainer>
        <Message>{message}</Message>
        <CloseButton onClick={onClose} aria-label="Close notification">
          <FaTimes />
        </CloseButton>
      </ToastContainer>
    </AnimatePresence>
  );
};

export default Toast;