import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0F12] text-white relative pt-20 pb-10 overflow-hidden rounded-t-[40px]">

      {/* background world map */}
      <div className="absolute inset-0 bg-[url('/assets/footer-map.png')] bg-cover bg-center opacity-90"></div>

      {/* dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"></div>

      <div className="relative z-10 container-max">

        {/* top logo */}
        <img src="/assets/logo1.png" className="h-7 mb-10" alt="PragetX" />

        {/* Office Locations */}
        <div className="grid md:grid-cols-3 gap-12 text-sm">

          {/* India */}
          <div>
            <div className="flex items-center gap-2 font-semibold mb-3">
              🇮🇳 <span>India (HQ)</span>
            </div>
            <p className="opacity-80 leading-relaxed">
              D-509 & D-510, Swati Clover, Shilaj Circle,<br/>
              SP Ring Road, Thaltej, Ahmedabad - 380054
            </p>
          </div>

          {/* US */}
          <div>
            <div className="flex items-center gap-2 font-semibold mb-3">
              🇺🇸 <span>US Office</span>
            </div>
            <p className="opacity-80 leading-relaxed">
              PO Box 531, Centerville, Atlanta GA 31028
            </p>
          </div>

          {/* Brazil */}
          <div>
            <div className="flex items-center gap-2 font-semibold mb-3">
              🇧🇷 <span>Brazil Office</span>
            </div>
            <p className="opacity-80 leading-relaxed">
              Rua Castilho 239 (no de Iguaçu Parana),<br/>
              Mz. Marco Antonlo.<br/>
              +55 48 98802-5573
            </p>
          </div>

        </div>

        {/* Contact Bar */}
        <div className="mt-10 flex flex-wrap gap-4 text-sm opacity-90 justify-center">
          <div className="px-4 py-2 bg-white/10 rounded-full">PragetX</div>
          <div className="px-4 py-2 bg-white/10 rounded-full">+91-8487990773</div>
          <div className="px-4 py-2 bg-white/10 rounded-full">hello@pragetx.com</div>
        </div>

        {/* Footer Nav */}
        <div className="flex flex-wrap gap-6 text-sm mt-10 opacity-80 justify-center">
          <span>About Us</span>
          <span>Portfolio</span>
          <span>Careers</span>
          <span>How We Work</span>
          <span>Referral Programs</span>
          <span>Become A Partner</span>
          <span>Blogs</span>
          <span>Contact Us</span>
        </div>

        {/* Bottom small links */}
        <div className="mt-10 flex flex-wrap gap-6 text-[13px] opacity-60">
          <span>Cookies</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-[13px] opacity-60">
          © {new Date().getFullYear()} PragetX. All rights reserved.
        </div>

      </div>

      {/* BIG WATERMARK */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-12 opacity-[0.05] font-black text-[220px] leading-none tracking-widest text-white whitespace-nowrap select-none">
        PRAGETX
      </div>

    </footer>
  );
}
