import { Helmet } from 'react-helmet-async';
import { SERVER } from '../../constants/index';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead = ({
  title = `${SERVER.NAME} - Best Minecraft Survival Server`,
  description = `Join ${SERVER.NAME}, the ultimate Minecraft survival multiplayer server. Experience custom features, active community, and regular events. Server IP: ${SERVER.IP}`,
  keywords = 'minecraft, server, survival, multiplayer, gaming, community, java edition, pvp, builds',
  image = '/images/og-image.jpg',
  url = window.location.href
}: SEOHeadProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SERVER.NAME} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SERVER.NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#6B0197" />
      <meta name="msapplication-TileColor" content="#6B0197" />
      <meta name="application-name" content={SERVER.NAME} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": SERVER.NAME,
          "description": description,
          "url": url,
          "logo": image,
          "sameAs": [
            "https://discord.gg/yourserver",
            "https://twitter.com/yourserver",
            "https://youtube.com/yourserver"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": "English"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;