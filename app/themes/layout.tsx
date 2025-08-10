import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Themes - ThemeCN',
  description: 'Explore and customize a wide variety of themes for your Next.js projects. Use our AI theme generator to create your own unique theme.',
};

export default function ThemesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
