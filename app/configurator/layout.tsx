import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Configure Your P.E.A.K | Build Studio',
  description: 'Design your perfect P.E.A.K. Choose your model, exterior colour, wheel style, interior theme, and performance mode.',
};

export default function ConfiguratorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
