import { Component, ErrorInfo, ReactNode } from 'react';
import styled from '@emotion/styled';

const ErrorContainer = styled.div`
  padding: 2rem;
  margin: 2rem;
  background: rgba(255, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

const ErrorTitle = styled.h2`
  color: #ff6b6b;
  font-family: ${props => props.theme.fonts.heading};
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  font-family: ${props => props.theme.fonts.body};
  margin-bottom: 1rem;
`;

const RetryButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background ${props => props.theme.transitions.default};

  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>Oops! Something went wrong</ErrorTitle>
          <ErrorMessage>
            {this.state.error?.message || 'An unexpected error occurred'}
          </ErrorMessage>
          <RetryButton onClick={this.handleRetry}>
            Try Again
          </RetryButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;