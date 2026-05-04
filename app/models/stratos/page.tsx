import ModelPage from '@/components/ModelPage';
import type { ModelData } from '@/components/ModelPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'P.E.A.K Stratos — Sport Coupé | P.E.A.K Automotive',
  description: 'Track-tuned for the road. The Stratos delivers 980 horsepower and a 2.8-second 0-60 in a driver-focused sport coupé.',
};

const model: ModelData = {
  id: 'stratos',
  name: 'P.E.A.K Stratos',
  tagline: 'Born at the Apex',
  type: 'Sport Coupé',
  badge: 'SPORT',
  color: '#1a0a0a',
  accent: '#ff4444',
  priceFrom: '$349,000',
  description:
    'The Stratos is the raw nerve ending of the P.E.A.K lineup. A twin-turbocharged flat-plane V8 screaming to 9,200 rpm, mated to a 7-speed dual-clutch transaxle. Track-developed. Road-legal. Absolutely alive.',
  longDescription:
    'Three years on the Nürburgring. Thousands of data-acquisition laps. Every aerodynamic surface sculpted in CFD and validated in our Stuttgart wind tunnel. The Stratos carries lessons learned from three motorsport championships into a machine you can drive to the grocery store — and then immediately regret the mundanity of that errand. Its carbon-ceramic brakes generate enough heat to glow amber in hard stops. That is not a flaw. That is theatre.',
  specs: [
    { label: '0–60 mph', value: '2.8s' },
    { label: 'Top Speed', value: '210 mph' },
    { label: 'Peak Power', value: '980 hp' },
    { label: 'Peak Torque', value: '890 Nm' },
    { label: 'Engine', value: '4.0L Twin-Turbo V8' },
    { label: 'Rev Limit', value: '9,200 rpm' },
    { label: 'Transmission', value: '7-Speed DCT' },
    { label: 'Drive Configuration', value: 'RWD / AWD (switchable)' },
    { label: 'Downforce at 200 mph', value: '850 kg' },
    { label: 'Kerbweight', value: '1,480 kg' },
    { label: 'Brakes', value: 'Carbon-Ceramic 6-piston' },
    { label: 'Nürburgring Lap', value: '6:42.1' },
  ],
  features: [
    { title: 'Flat-Plane V8', description: 'A 4.0-litre twin-turbo unit with a 9,200 rpm redline and individual throttle bodies.' },
    { title: 'Active Aero Package', description: '850 kg of downforce at 200 mph via deployable front splitter and active rear wing.' },
    { title: 'Carbon-Ceramic Brakes', description: '6-piston monobloc calipers with 420mm rotors front, 390mm rear.' },
    { title: 'Race-Mode Suspension', description: 'Electronically-controlled triple-mode dampers with Nürburgring-tuned Sport profile.' },
  ],
  gallery: [
    { label: 'Exterior · Stratos Red', bg: 'linear-gradient(135deg, #1a0808 0%, #3a1010 50%, #200a0a 100%)' },
    { label: 'Interior · Racing Bucket', bg: 'linear-gradient(135deg, #180808 0%, #2a1010 100%)' },
    { label: 'Detail · Exhaust', bg: 'linear-gradient(135deg, #120606 0%, #251010 100%)' },
    { label: 'Wheel · Motorsport Forged', bg: 'linear-gradient(135deg, #0e0404 0%, #1e0c0c 100%)' },
    { label: 'Rear Diffuser', bg: 'linear-gradient(135deg, #150707 0%, #221010 100%)' },
    { label: 'Engine Bay', bg: 'linear-gradient(135deg, #100505 0%, #200e0e 100%)' },
  ],
};

export default function StratosPage() {
  return <ModelPage model={model} />;
}
