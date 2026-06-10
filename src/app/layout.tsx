import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Danar Priyo Utomo | Portfolio',
  description: 'Portfolio of Danar Priyo Utomo, Computer Science Student at Universitas Negeri Jakarta and Aspiring Developer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
