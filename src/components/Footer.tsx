import { Link } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';
import { contact, navLinks } from '@/data/site';

const serviceLinks = [
  'زجاج وألمنيوم',
  'واجهات وCurtain Wall',
  'تكييف وتبريد',
];

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.84 9.84 0 0 0-8.45 14.86L2.05 22l5.27-1.5A9.94 9.94 0 1 0 12.04 2Zm0 17.98a8.05 8.05 0 0 1-4.1-1.12l-.3-.18-3.13.89.84-3.05-.2-.31a7.86 7.86 0 0 1-1.22-4.22 8.1 8.1 0 1 1 8.11 7.99Zm4.44-6.07c-.24-.12-1.44-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21a7.29 7.29 0 0 1-1.35-1.68c-.14-.24-.02-.37.1-.49.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.75-1.82-.2-.47-.4-.41-.55-.42h-.47c-.16 0-.42.06-.65.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function whatsappHref(phone: string) {
  const digits = phone.replace(/\D/g, '').replace(/^0/, '');
  return `https://wa.me/966${digits}`;
}

function ContactRow({ phone, label }: { phone: string; label: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-[#a7a37d]/30 pb-3">
      <div className="min-w-0">
        <p className="font-body text-[11px] text-[#a7a37d] mb-1">{label}</p>
        <span className="font-body text-[14px] text-[#d1cfb9]" dir="ltr">{phone}</span>
      </div>
      <div className="flex items-center gap-2 shrink-0" dir="ltr">
        <a href={`tel:${phone}`} className="w-9 h-9 inline-flex items-center justify-center border border-[#a7a37d]/45 text-[#a7a37d] hover:bg-[#e4e2c5] hover:text-[#30302d] transition-colors" aria-label={`اتصال ${label}`}>
          <Phone size={17} />
        </a>
        <a href={whatsappHref(phone)} target="_blank" rel="noreferrer" className="w-9 h-9 inline-flex items-center justify-center border border-[#a7a37d]/45 text-[#a7a37d] hover:bg-[#e4e2c5] hover:border-[#e4e2c5] hover:text-[#30302d] transition-colors" aria-label={`واتساب ${label}`}>
          <WhatsAppIcon size={18} />
        </a>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#30302d] py-20 px-[7vw]" dir="rtl">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 mb-16">
          <div className="md:col-span-2">
            <img src="/images/brand/sianatak-logo-light.png" alt="صيانتك" className="h-12 w-auto mb-6" />
            <p className="font-body text-[1.125rem] font-normal text-[#a7a37d] mb-6 max-w-md leading-[1.7]">
              حلول متكاملة للزجاج والألمنيوم والتكييف والخدمات الفنية بتنفيذ احترافي للمباني والمنشآت.
            </p>
            <Link to="/contact" className="group inline-flex items-center gap-3 border-b border-[#a7a37d]/45 pb-2 text-[#d1cfb9] hover:text-[#d1cfb9] transition-colors">
              <span className="font-body text-sm">تواصل معنا</span>
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>

          <div>
            <p className="font-body text-[14px] font-normal uppercase tracking-[0.08em] text-[#a7a37d] mb-4">الصفحات</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="font-body text-[14px] font-normal text-[#a7a37d] hover:text-[#d1cfb9] transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[14px] font-normal uppercase tracking-[0.08em] text-[#a7a37d] mb-4">خدماتنا</p>
            <ul className="space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link to="/services" className="font-body text-[14px] font-normal text-[#a7a37d] hover:text-[#d1cfb9] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-[14px] font-normal uppercase tracking-[0.08em] text-[#a7a37d] mb-4">تواصل</p>
            <div className="space-y-4">
              <ContactRow phone={contact.coolingPhone} label="التكييف والتبريد" />
              <ContactRow phone={contact.glassPhone} label="الزجاج والألمنيوم" />
              <p className="font-body text-[14px] text-[#a7a37d]">{contact.address}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#a7a37d]/30">
          <p className="font-body text-[12px] font-light text-[#a7a37d]">© 2026 صيانتك. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <Link to="/works" className="font-body text-[12px] font-light text-[#a7a37d] hover:text-[#d1cfb9] transition-colors">أعمالنا</Link>
            <Link to="/contact" className="font-body text-[12px] font-light text-[#a7a37d] hover:text-[#d1cfb9] transition-colors">تواصل معنا</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
