export const PEAK_MODELS = [
  {
    id: 'aether',
    name: 'P.E.A.K Aether',
    tagline: 'Silent Sovereignty',
    type: 'Electric Grand Tourer',
    badge: 'EV',
    color: '#1a1a2e',
    accent: '#4a9eff',
    priceFrom: '$289,000',
    bg: 'linear-gradient(135deg, #0a0f1e 0%, #1a2a4e 100%)',
    specs: [
      { label: '0-60', value: '3.2s' },
      { label: 'Range', value: '500mi' },
      { label: 'Power', value: '850hp' },
    ],
  },
  {
    id: 'stratos',
    name: 'P.E.A.K Stratos',
    tagline: 'Born at the Apex',
    type: 'Sport Coupé',
    badge: 'SPORT',
    color: '#1a0a0a',
    accent: '#ff4444',
    priceFrom: '$349,000',
    bg: 'linear-gradient(135deg, #1a0808 0%, #2a1010 100%)',
    specs: [
      { label: '0-60', value: '2.8s' },
      { label: 'Top Speed', value: '210mph' },
      { label: 'Power', value: '980hp' },
    ],
  },
  {
    id: 'vertex',
    name: 'P.E.A.K Vertex',
    tagline: 'Beyond the Possible',
    type: 'Hypercar',
    badge: 'HYPER',
    color: '#0a0a0a',
    accent: '#c6a769',
    priceFrom: '$1,200,000',
    bg: 'linear-gradient(135deg, #0a0a0a 0%, #1a1510 100%)',
    specs: [
      { label: '0-60', value: '2.4s' },
      { label: 'Top Speed', value: '240mph' },
      { label: 'Power', value: '1250hp' },
    ],
  },
] as const;

export type ModelId = 'aether' | 'stratos' | 'vertex';
