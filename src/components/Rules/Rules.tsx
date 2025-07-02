import { useState, useCallback, memo } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaInfoCircle } from 'react-icons/fa';
import { RULES_DATA, type Rule } from './rules-data';

interface RuleCardProps {
  rule: Rule;
  index: number;
  isExpanded: boolean;
  onToggle: (id: number) => void;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const Container = styled.section`
  padding: 4rem 2rem;
  color: ${props => props.theme.colors.text};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(107, 1, 151, 0.03);
    z-index: 0;
    pointer-events: none;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(107, 1, 151, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(107, 1, 151, 0.1) 0%, transparent 50%);
  z-index: 0;
  pointer-events: none;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Header = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  
  svg {
    font-size: clamp(1.8rem, 4vw, 2rem);
  }
`;

const Subtitle = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: ${props => props.theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
`;

const RulesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardWrapper = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.primary}20;
  backdrop-filter: blur(10px);
  isolation: isolate;
  will-change: transform;
`;

const RuleButton = styled.button<{ $isExpanded: boolean }>`
  width: 100%;
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid ${props => props.$isExpanded ? props.theme.colors.primary : 'transparent'};
  will-change: background-color;

  &:hover {
    background: rgba(107, 1, 151, 0.1);
  }

  &:focus-visible {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: -2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const RuleTitle = styled.span`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.3rem;
  flex-grow: 1;
  color: ${props => props.theme.colors.text};
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  
  svg {
    font-size: 1.8rem;
  }
`;

const ChevronIcon = styled(motion.span)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  will-change: transform;
`;

// Optimized content container using scaleY instead of height
const RuleContentWrapper = styled.div`
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
  transform-origin: top;
  will-change: transform, opacity;
`;

const RuleContent = styled(motion.div)`
  transform-origin: top;
  will-change: transform, opacity;
`;

const RuleList = styled.div`
  padding: 1.5rem 2rem;
  font-family: ${props => props.theme.fonts.body};
  line-height: 1.6;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
    color: ${props => props.theme.colors.textSecondary};
    transition: color 0.2s ease, transform 0.2s ease;
    
    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: ${props => props.theme.colors.primary};
      font-weight: bold;
      font-size: 1.2rem;
    }
    
    &:hover {
      color: ${props => props.theme.colors.text};
      transform: translateX(5px);
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
      &:hover {
        transform: none;
      }
    }
  }
`;

const RuleCard = memo(({ rule, index, isExpanded, onToggle }: RuleCardProps) => {
  const Icon = rule.icon;

  const handleClick = useCallback(() => {
    onToggle(rule.id);
  }, [onToggle, rule.id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] // Smoother easing
      }}
    >
      <CardWrapper>
        <RuleButton
          type="button"
          onClick={handleClick}
          $isExpanded={isExpanded}
          aria-expanded={isExpanded}
          aria-controls={`rule-content-${rule.id}`}
        >
          <IconWrapper>
            <Icon />
          </IconWrapper>
          <RuleTitle>{rule.title}</RuleTitle>
          <ChevronIcon
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ 
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <FaChevronDown aria-hidden="true" />
          </ChevronIcon>
        </RuleButton>

        <RuleContentWrapper>
          <AnimatePresence initial={false}>
            {isExpanded && (
              <RuleContent
                key={`content-${rule.id}`}
                id={`rule-content-${rule.id}`}
                initial={{ 
                  scaleY: 0, 
                  opacity: 0,
                  transformOrigin: "top"
                }}
                animate={{ 
                  scaleY: 1, 
                  opacity: 1,
                  transformOrigin: "top"
                }}
                exit={{ 
                  scaleY: 0, 
                  opacity: 0,
                  transformOrigin: "top"
                }}
                transition={{ 
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1],
                  opacity: { duration: 0.15 }
                }}
              >
                <RuleList>
                  <ul>
                    {rule.content.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </RuleList>
              </RuleContent>
            )}
          </AnimatePresence>
        </RuleContentWrapper>
      </CardWrapper>
    </motion.div>
  );
});

RuleCard.displayName = 'RuleCard';

const Rules = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = useCallback((id: number) => {
    setExpandedId(prevId => prevId === id ? null : id);
  }, []);

  return (
    <Container id="rules">
      <BackgroundPattern aria-hidden="true" />
      <Content>
        <Header
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Title>
            <FaInfoCircle aria-hidden="true" />
            Server Rules
          </Title>
          <Subtitle>
            Please read and follow these rules to ensure a fun and fair experience for everyone.
          </Subtitle>
        </Header>

        <RulesGrid>
          {RULES_DATA.map((rule, index) => (
            <RuleCard
              key={rule.id}
              rule={rule}
              index={index}
              isExpanded={expandedId === rule.id}
              onToggle={handleToggle}
            />
          ))}
        </RulesGrid>
      </Content>
    </Container>
  );
};

export default memo(Rules);