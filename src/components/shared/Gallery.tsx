import { useState, memo } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaImages } from 'react-icons/fa';
import LazyImage from './LazyImage';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface GalleryProps {
  images?: GalleryItem[];
  title?: string;
  description?: string;
}

// Mock data - replace with actual server screenshots
const defaultImages: GalleryItem[] = [
  {
    id: 1,
    src: '/images/logo.png',
    alt: 'Server Spawn Area',
    title: 'Spawn Area',
    description: 'Beautiful spawn area with custom builds'
  },
  {
    id: 2,
    src: '/images/logo.png',
    alt: 'Medieval Castle',
    title: 'Medieval Castle',
    description: 'Player-built medieval castle'
  },
  {
    id: 3,
    src: '/images/logo.png',
    alt: 'Modern City',
    title: 'Modern City',
    description: 'Thriving city built by our community'
  },
  {
    id: 4,
    src: '/images/logo.png',
    alt: 'Beautiful Landscape',
    title: 'Natural Landscape',
    description: 'Stunning natural terrain generation'
  },
  {
    id: 5,
    src: '/images/logo.png',
    alt: 'Trading Market',
    title: 'Trading Market',
    description: 'Bustling marketplace for player trading'
  },
  {
    id: 6,
    src: '/images/logo.png',
    alt: 'PvP Arena',
    title: 'PvP Arena',
    description: 'Epic battles in our custom arena'
  }
];

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
    background: rgba(45, 1, 87, 0.03);
    z-index: 0;
    pointer-events: none;
  }
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

const Description = styled.p`
  font-family: ${props => props.theme.fonts.body};
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: ${props => props.theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GalleryCard = styled(motion.div)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid ${props => props.theme.colors.primary}20;
  cursor: pointer;
  aspect-ratio: 16/10;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary}60;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 1.5rem;
  color: white;
  
  h3 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.primary};
  }
  
  p {
    font-family: ${props => props.theme.fonts.body};
    font-size: 0.9rem;
    opacity: 0.9;
    margin: 0;
  }
`;

// Lightbox Styles
const LightboxOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const LightboxContent = styled(motion.div)`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 12px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const LightboxControls = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
`;

const LightboxButton = styled(motion.button)`
  background: rgba(0, 0, 0, 0.7);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`;

const NavigationButton = styled(LightboxButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  
  &.prev {
    left: 1rem;
  }
  
  &.next {
    right: 1rem;
  }
`;

const Gallery = ({ 
  images = defaultImages, 
  title = "Server Gallery",
  description = "Explore our amazing builds and landscapes created by our talented community."
}: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <>
      <Container id="gallery">
        <Content>
          <Header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Title>
              <FaImages aria-hidden="true" />
              {title}
            </Title>
            <Description>{description}</Description>
          </Header>

          <GalleryGrid>
            {images.map((image, index) => (
              <GalleryCard
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => openLightbox(index)}
              >
                <ImageWrapper>
                  <LazyImage
                    src={image.src}
                    alt={image.alt}
                    placeholder="Loading image..."
                  />
                  <Overlay>
                    {image.title && <h3>{image.title}</h3>}
                    {image.description && <p>{image.description}</p>}
                  </Overlay>
                </ImageWrapper>
              </GalleryCard>
            ))}
          </GalleryGrid>
        </Content>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <LightboxOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <LightboxContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
              />
              
              <LightboxControls>
                <LightboxButton
                  onClick={closeLightbox}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </LightboxButton>
              </LightboxControls>

              {images.length > 1 && (
                <>
                  <NavigationButton
                    className="prev"
                    onClick={prevImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaChevronLeft />
                  </NavigationButton>
                  
                  <NavigationButton
                    className="next"
                    onClick={nextImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaChevronRight />
                  </NavigationButton>
                </>
              )}
            </LightboxContent>
          </LightboxOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Gallery); 