const siteUrl = 'https://itda-edu.vercel.app';

type BreadcrumbJsonLdProps = {
  name: string;
  path: string;
};

export default function BreadcrumbJsonLd({ name, path }: BreadcrumbJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': siteUrl,
          name: '잇다과외 1:1 맞춤 과외',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@id': `${siteUrl}${path}`,
          name,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
