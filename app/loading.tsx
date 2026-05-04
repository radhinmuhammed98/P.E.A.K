export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: '#0a0a0c' }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated PEAK logo */}
        <div className="relative">
          <div
            className="w-14 h-14 border-2 border-peak-gold/40 rotate-45 flex items-center justify-center"
            style={{
              background: 'rgba(198,167,105,0.06)',
              animation: 'spin 3s linear infinite',
            }}
          >
            <div className="w-3 h-3 bg-peak-gold rounded-full" />
          </div>
        </div>

        <div
          className="text-white/40 text-xs tracking-[0.4em] uppercase"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Loading...
        </div>
      </div>
    </div>
  );
}
