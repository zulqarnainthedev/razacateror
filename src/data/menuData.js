const photo = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

export const images = {
  hero: photo('28674660'), chickenBiryani: photo('9609860'), muttonBiryani: photo('9609856'), rice: photo('12669168'),
  curry: photo('40262818'), curry2: photo('40262819'), tandoori: photo('9646846'), samosa: photo('29037266'),
  platter: photo('24206917'), kebab: photo('20422195'), buffet: photo('36766850'), catering: photo('37976941'),
};

export const categories = [
  { id: 'biryani', en: 'Biryani', gu: 'બિરયાની' },
  { id: 'specialties', en: 'Chicken & Mutton', gu: 'ચિકન અને મટન' },
  { id: 'starters', en: 'Starters & Snacks', gu: 'સ્ટાર્ટર્સ અને નાસ્તા' },
];

export const menu = [
  ['Special Chicken Tandoori Biryani', 'સ્પેશિયલ ચિકન તંદૂરી બિરયાની', 'biryani', images.hero],
  ['Mutton Biryani', 'મટન બિરયાની', 'biryani', images.muttonBiryani],
  ['Shahi Biryani', 'શાહી બિરયાની', 'biryani', images.chickenBiryani],
  ['Chicken Biryani', 'ચિકન બિરયાની', 'biryani', images.chickenBiryani],
  ['Veg Biryani', 'વેજ બિરયાની', 'biryani', images.rice],
  ['Paneer Biryani', 'પનીર બિરયાની', 'biryani', images.rice],
  ['Chicken Masala', 'ચિકન મસાલા', 'specialties', images.curry2],
  ['Mutton Masala', 'મટન મસાલા', 'specialties', images.curry],
  ['Malai Chicken', 'મલાઈ ચિકન', 'specialties', images.curry2],
  ['Butter Chicken', 'બટર ચિકન', 'specialties', images.curry],
  ['Chicken Angara', 'ચિકન અંગારા', 'specialties', images.tandoori],
  ['Chicken Green Masala', 'ચિકન ગ્રીન મસાલા', 'specialties', images.curry2],
  ['Chicken Lababdar', 'ચિકન લબાબદાર', 'specialties', images.curry],
  ['Golden Chicken', 'ગોલ્ડન ચિકન', 'specialties', images.tandoori],
  ['Chicken Dana', 'ચિકન દાણા', 'specialties', images.curry2],
  ['Chicken Roll', 'ચિકન રોલ', 'specialties', images.kebab],
  ['Russian Cutlet', 'રશિયન કટલેટ', 'starters', images.platter],
  ['Hara Bhara Kebab', 'હરા ભરા કબાબ', 'starters', images.kebab],
  ['Samosa', 'સમોસા', 'starters', images.samosa],
  ['Patties', 'પેટીસ', 'starters', images.catering],
  ['Kebab', 'કબાબ', 'starters', images.kebab],
  ['Hangama Kebab', 'હંગામા કબાબ', 'starters', images.tandoori],
].map(([en, gu, category, image]) => ({ en, gu, category, image }));
