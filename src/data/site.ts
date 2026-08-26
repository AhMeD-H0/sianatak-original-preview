export type WorkItem = {
  image: string;
  title: string;
  category: 'glass' | 'technical';
  alt: string;
};

export const workItems: WorkItem[] = [
  { image: '/images/works/work-01.jpg', title: 'قواطع زجاجية للمكاتب', category: 'glass', alt: 'قواطع زجاجية داخلية منفذة للمكاتب' },
  { image: '/images/works/work-02.jpg', title: 'أعمال تشطيبات وخدمات فنية', category: 'technical', alt: 'فريق أثناء تنفيذ أعمال فنية وتشطيبات داخلية' },
  { image: '/images/works/work-03.jpg', title: 'درابزين زجاجي للسلالم', category: 'glass', alt: 'درابزين زجاجي داخلي للسلالم' },
  { image: '/images/works/work-04.jpg', title: 'تركيب زجاج خارجي', category: 'glass', alt: 'فنيون أثناء تركيب ألواح زجاج خارجية' },
  { image: '/images/works/work-05.jpg', title: 'درابزين زجاجي بتصميم عصري', category: 'glass', alt: 'درابزين زجاجي شفاف لسلم داخلي' },
  { image: '/images/works/work-06.jpg', title: 'واجهات وزجاج فلل', category: 'glass', alt: 'واجهة فيلا بأعمال زجاج وألمنيوم' },
  { image: '/images/works/work-07.jpg', title: 'تنفيذ واجهات تجارية', category: 'glass', alt: 'فريق ينفذ واجهة زجاجية تجارية' },
  { image: '/images/works/work-08.jpg', title: 'نوافذ ألمنيوم وزجاج', category: 'glass', alt: 'نافذة ألمنيوم وزجاج بإطار داكن' },
  { image: '/images/works/work-09.jpg', title: 'Curtain Wall', category: 'glass', alt: 'واجهة مبنى بنظام كيرتن وول زجاجي' },
  { image: '/images/works/work-10.jpg', title: 'واجهة زجاج سكريت', category: 'glass', alt: 'واجهة محل تجاري من زجاج السكريت' },
  { image: '/images/works/work-11.jpg', title: 'قواطع وأبواب ألمنيوم', category: 'glass', alt: 'أبواب وقواطع ألمنيوم وزجاج داخلية' },
  { image: '/images/works/work-12.jpg', title: 'شبابيك ألمنيوم مخصصة', category: 'glass', alt: 'شباك ألمنيوم بتفاصيل مخصصة' },
  { image: '/images/works/work-13.jpg', title: 'غرفة زجاجية مستقلة', category: 'glass', alt: 'غرفة زجاجية خارجية بإضاءة محيطية' },
  { image: '/images/works/work-14.jpg', title: 'نافذة ألمنيوم وزجاج داخلية', category: 'glass', alt: 'نافذة ألمنيوم وزجاج كبيرة بإطار داكن' },
];

export const navLinks = [
  { label: 'الرئيسية', href: '/' },
  { label: 'من نحن', href: '/about' },
  { label: 'خدماتنا', href: '/services' },
  { label: 'أعمالنا', href: '/works' },
  { label: 'تواصل معنا', href: '/contact' },
];

export const contact = {
  coolingPhone: '0536213276',
  glassPhone: '0547856474',
  address: 'الرياض - حي الفيصلية',
};
