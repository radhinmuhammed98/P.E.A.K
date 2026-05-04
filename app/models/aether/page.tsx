import ModelPage from '@/components/ModelPage';
import type { ModelData } from '@/components/ModelPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'P.E.A.K Aether — Electric Grand Tourer | P.E.A.K Automotive',
  description: 'The Aether redefines electric grand touring. 500 miles of range, 850 horsepower, and zero compromises.',
};

const model: ModelData = {
  id: 'aether',
  name: 'P.E.A.K Aether',
  tagline: 'Silent Sovereignty',
  type: 'Electric Grand Tourer',
  badge: 'EV',
  color: '#1a1a2e',
  accent: '#4a9eff',
  priceFrom: '$289,000',
  description:
    'The Aether is our declaration that the electric future can be profoundly beautiful. With 500 miles of EPA-estimated range and 850 horsepower delivered silently and instantly, it consumes continents without effort.',
  longDescription:
    'Born from our Geneva skunkworks, the Aether took seven years of aerodynamic refinement to achieve a drag coefficient of just 0.19Cd — the most slippery four-seat grand tourer in history. Its battery architecture, co-developed with aerospace partners, stores energy at densities previously only seen in satellites. The hand-formed aluminium body panels are each unique: no two Aethers are identical.',
  specs: [
    { label: '0–60 mph', value: '3.2s' },
    { label: 'Top Speed', value: '205 mph' },
    { label: 'Peak Power', value: '850 hp' },
    { label: 'Peak Torque', value: '1,100 Nm' },
    { label: 'Range (EPA Est.)', value: '500 miles' },
    { label: 'Battery Capacity', value: '140 kWh' },
    { label: 'Max Charging Speed', value: '350 kW' },
    { label: '10–80% Charge Time', value: '15 min' },
    { label: 'Drag Coefficient', value: '0.19 Cd' },
    { label: 'Kerbweight', value: '2,180 kg' },
    { label: 'Drive Configuration', value: 'AWD Quad-Motor' },
    { label: 'Wheelbase', value: '3,140 mm' },
  ],
  features: [
    { title: 'Quad-Motor AWD', description: 'Four independently-controlled motors for precise torque vectoring on all four wheels.' },
    { title: '0.19Cd Aerodynamics', description: 'Active aero system with retractable underbody fins and adaptive rear spoiler.' },
    { title: '140 kWh Battery', description: 'Solid-state battery with 97% charge retention over 500,000 miles.' },
    { title: 'HoloCabin Interior', description: 'Wraparound 8K OLED display spanning the full dashboard width.' },
  ],
  gallery: [
    { label: 'Exterior · Dawn Mist', bg: 'linear-gradient(135deg, #0a0f1e 0%, #1a2a4e 50%, #0d1830 100%)' },
    { label: 'Interior · Cloud Suite', bg: 'linear-gradient(135deg, #1a2030 0%, #2a3550 100%)' },
    { label: 'Detail · Headlight', bg: 'linear-gradient(135deg, #0d1525 0%, #1a3060 100%)' },
    { label: 'Wheel · Orbital', bg: 'linear-gradient(135deg, #0a1020 0%, #152040 100%)' },
    { label: 'Rear · Quarter', bg: 'linear-gradient(135deg, #0c1328 0%, #1a2545 100%)' },
    { label: 'Charging · Architecture', bg: 'linear-gradient(135deg, #0a0f1e 0%, #1e3060 100%)' },
  ],
};

export default function AetherPage() {
  return <ModelPage model={model} />;
}
