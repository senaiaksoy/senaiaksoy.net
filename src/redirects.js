/**
 * Legal language redirect configuration
 *
 * All language-specific routes must redirect to draksoyivf.com domain
 * per health ministry, TTB, and trade regulations
 *
 * This configuration ensures:
 * - Main Turkish content remains at senaiaksoy.net
 * - Language-specific redirects go to draksoyivf.com
 * - Legal compliance for multilingual health content
 * - Strict control over content modification rights
 */
export default [
  {
    source: '/en',
    destination: 'https://draksoyivf.com/',
    statusCode: 301
  },
  {
    source: '/fr',
    destination: 'https://draksoyivf.com/fr',
    statusCode: 301
  },
  {
    source: '/ar',
    destination: 'https://draksoyivf.com/ar',
    statusCode: 301
  }
];