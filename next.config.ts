import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/urunlerimiz',
        destination: '/olusumlarimiz/nos-canda-shop/urunlerimiz',
        permanent: true,
      },
      {
        source: '/urunlerimiz/:path*',
        destination: '/olusumlarimiz/nos-canda-shop/urunlerimiz/:path*',
        permanent: true,
      },
      {
        source: '/e-katalog',
        destination: '/olusumlarimiz/nos-canda-shop/e-katalog',
        permanent: true,
      },
      {
        source: '/e-katalog/:path*',
        destination: '/olusumlarimiz/nos-canda-shop/e-katalog/:path*',
        permanent: true,
      },
      {
        source: '/dmo-katalogu',
        destination: '/is-modellerimiz/b2g',
        permanent: true,
      },
      {
        source: '/felsefe',
        destination: '/kurumsal-bilgiler/felsefe',
        permanent: true,
      },
      {
        source: '/hakkimizda/vakif',
        destination: '/olusumlarimiz/nos-canda-one/vakif',
        permanent: true,
      },
      {
        source: '/vakif',
        destination: '/olusumlarimiz/nos-canda-one/vakif',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

