import { Check } from "lucide-react";

const F_SANS = "var(--font-sans), Open Sans, sans-serif";
const GOLD = "var(--color-gold, #C9A96E)";
const PRIMARY = "var(--color-primary, #3A2A0E)";

const units = [
  {
    type: "2 BHK Residences",
    size: "On Request",
    price: "₹ 2.62 Cr*",
    oldPrice: null,
    btnText: "Get Details",
    features: [
      "Super Built-up: On Request",
      "Premium Specifications",
      "Luxury Finishes",
    ],
  },
  {
    type: "3 BHK Residences",
    size: "On Request",
    price: "On Request",
    oldPrice: null,
    btnText: "Get Details",
    features: [
      "Super Built-up: On Request",
      "Premium Specifications",
      "Luxury Finishes",
    ],
  },
];

const BottomCurvedCorners = ({ bg = 'var(--color-bg-muted)', color = '#D5C2A8' }) => {
  const corners = [
    { bottom: '-1px', left: '-1px', borderRight: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopLeftRadius: '18px' },
  ]
  return corners.map((c, i) => (
    <span key={i} style={{ position: 'absolute', ...c, width: '22px', height: '22px', background: bg, display: 'block', zIndex: 20 }} />
  ))
}

const Pricing = ({ setIsOpen }) => {
  return (
    <section
      id="pricing"
      className="py-10 sm:py-14 px-4 md:px-8 relative overflow-hidden"
      style={{ background: "var(--color-bg-muted)" }}
    >
      <div
        className="absolute top-0 right-0 w-1/3 h-1/3 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)`,
          filter: "blur(40px)"
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* NEW HEADING STYLE */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }} data-aos="fade-up">
          <h2 style={{
            fontFamily: "var(--font-jost), Montserrat, sans-serif", fontWeight: '700', fontSize: '17px',
            color: '#684C1B', letterSpacing: '0.1em',
            textTransform: 'uppercase', margin: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            Configurations &amp; Pricing
          </h2>
        </div>

        {/* COMBINED PRICING BLOCK */}
        <div 
          className="relative bg-white rounded-t-lg border border-[#D5C2A8] shadow-lg max-w-3xl mx-auto overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Top accent line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
            background: `linear-gradient(90deg, ${GOLD}, #F9E08A)`,
            zIndex: 10,
          }} />

          {/* Grid Container for 2 Units */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full mx-auto divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {units.map((unit, idx) => (
              <div key={idx} className="p-6 md:p-8 relative flex flex-col justify-between">
                <div>
                  {/* Title & Size */}
                  <h3
                    className="text-xl lg:text-2xl font-bold mb-2 whitespace-nowrap"
                    style={{ fontFamily: F_SANS, color: PRIMARY, letterSpacing: "0.02em" }}
                  >
                    {unit.type}
                  </h3>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold" style={{ fontFamily: F_SANS }}>Size:</span>
                    <p className="text-sm font-semibold" style={{ fontFamily: F_SANS, color: PRIMARY }}>
                      {unit.size}
                    </p>
                  </div>

                  {/* Price Section */}
                  <div className="mb-8">
                    <span className="text-[10px] text-gray-400 uppercase tracking-[0.15em] font-medium block mb-1" style={{ fontFamily: F_SANS }}>Starting At</span>
                    <div className="flex items-baseline gap-3">
                      {unit.oldPrice && (
                        <span className="text-sm md:text-base line-through font-medium opacity-60" style={{ fontFamily: F_SANS, color: GOLD }}>
                          {unit.oldPrice}
                        </span>
                      )}
                      <p className="text-xl md:text-2xl font-extrabold" style={{ fontFamily: F_SANS, color: GOLD }}>
                        {unit.price}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {unit.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-amber-50">
                          <Check size={12} strokeWidth={3} style={{ color: GOLD }} />
                        </div>
                        <span className="text-gray-700 font-medium text-[14px]" style={{ fontFamily: F_SANS }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="btn-gold w-full py-3.5 text-sm tracking-widest uppercase transition-all duration-300 font-bold"
                  style={{ borderRadius: "8px" }}
                >
                  {unit.btnText}
                </button>
              </div>
            ))}
          </div>

          {/* Curved Corners Cutout at Bottom */}
          <BottomCurvedCorners />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
