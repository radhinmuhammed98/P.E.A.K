import ModelPage from '@/components/ModelPage';
import type { ModelData } from '@/components/ModelPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'P.E.A.K Vertex — Hypercar | P.E.A.K Automotive',
  description: 'One thousand two hundred and fifty horsepower. The Vertex is the pinnacle of human automotive engineering.',
};

const model: ModelData = {
  id: 'vertex',
  name: 'P.E.A.K Vertex',
  tagline: 'Beyond the Possible',
  type: 'Hypercar',
  badge: 'HYPER',
  color: '#0a0a0a',
  accent: '#c6a769',
  priceFrom: '$1,200,000',
  description:
    'The Vertex is not a product. It is a proof of concept — that the laws of physics can be rewritten with sufficient obsession. 1,250 horsepower. A carbon-titanium monocoque weighing 92 kg. A hybrid drivetrain that thinks faster than you can react.',
  longDescription:
    'Only 99 will ever be made. Each is assembled by a single master technician over 14 weeks in our atelier. The monocoque is milled from a single billet of aerospace-grade carbon-titanium — a process that takes 38 hours per chassis and produces 600 kg of swarf. The result weighs 92 kilograms and is stronger than the roll cage of a Le Mans prototype. The Vertex has been tested to 240 mph at Ehra-Lessien and has lapped the Nürburgring in a time we are not yet permitted to officially disclose.',
  specs: [
    { label: '0–60 mph', value: '2.4s' },
    { label: '0–124 mph', value: '4.9s' },
    { label: 'Top Speed', value: '240+ mph' },
    { label: 'Peak Power', value: '1,250 hp' },
    { label: 'Peak Torque', value: '1,600 Nm' },
    { label: 'Drivetrain', value: 'Hybrid V10 + 3× E-Motor' },
    { label: 'Monocoque Weight', value: '92 kg' },
    { label: 'Total Kerbweight', value: '1,190 kg' },
    { label: 'Power-to-Weight', value: '1,050 hp/tonne' },
    { label: 'Max Downforce', value: '1,800 kg' },
    { label: 'Production Number', value: '99 units' },
    { label: 'Build Time', value: '14 weeks' },
  ],
  features: [
    { title: 'Carbon-Titanium Mono', description: 'Single-billet monocoque milled from aerospace alloy. 92 kg. Stronger than Le Mans.' },
    { title: '1,250 hp Hybrid V10', description: 'A naturally-aspirated 5.8L V10 augmented by three electric motors. No turbo lag.' },
    { title: '1,800 kg Downforce', description: 'Full active aerodynamics with 24 independently-controlled surfaces.' },
    { title: '99 Units Only', description: 'Each built by a single master technician. Build number engraved into the monocoque.' },
  ],
  gallery: [
    { label: 'Exterior · Obsidian Black', bg: 'linear-gradient(135deg, #0a0a0a 0%, #1a1510 50%, #0d0c0a 100%)' },
    { label: 'Interior · Alcantara Gold', bg: 'linear-gradient(135deg, #0d0c0a 0%, #1a1510 100%)' },
    { label: 'Detail · Active Aero', bg: 'linear-gradient(135deg, #080808 0%, #151208 100%)' },
    { label: 'Wheel · Forged Magnesium', bg: 'linear-gradient(135deg, #0c0b08 0%, #181510 100%)' },
    { label: 'Engine · V10 Atmo', bg: 'linear-gradient(135deg, #0a0a08 0%, #171410 100%)' },
    { label: 'Monocoque · Detail', bg: 'linear-gradient(135deg, #090908 0%, #16130e 100%)' },
  ],
};

export default function VertexPage() {
  return <ModelPage model={model} />;
}
