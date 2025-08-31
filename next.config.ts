import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  // Enable static export if needed
  // output: 'export'
  // trailingSlash: true
};

export default withNextIntl(nextConfig);
