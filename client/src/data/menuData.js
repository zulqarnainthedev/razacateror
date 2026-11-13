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

const dishes = [
  ['Special Chicken Tandoori Biryani', 'સ્પેશિયલ ચિકન તંદૂરી બિરયાની', 'biryani', '9646846'],
  ['Mutton Biryani', 'મટન બિરયાની', 'biryani', '9609856'],
  ['Shahi Biryani', 'શાહી બિરયાની', 'biryani', '12669168'],
  ['Chicken Biryani', 'ચિકન બિરયાની', 'biryani', '4224311'],
  ['Veg Biryani', 'વેજ બિરયાની', 'biryani', '7593230'],
  ['Paneer Biryani', 'પનીર બિરયાની', 'biryani', '9609859'],
  ['Chicken Masala', 'ચિકન મસાલા', 'specialties', '10508207'],
  ['Mutton Masala', 'મટન મસાલા', 'specialties', '38324444'],
  ['Malai Chicken', 'મલાઈ ચિકન', 'specialties', '8992836'],
  ['Butter Chicken', 'બટર ચિકન', 'specialties', '40262819'],
  ['Chicken Angara', 'ચિકન અંગારા', 'specialties', '36097084'],
  ['Chicken Green Masala', 'ચિકન ગ્રીન મસાલા', 'specialties', '38400477'],
  ['Chicken Lababdar', 'ચિકન લબાબદાર', 'specialties', '20408442'],
  ['Golden Chicken', 'ગોલ્ડન ચિકન', 'specialties', '5474676'],
  ['Chicken Dana', 'ચિકન દાણા', 'specialties', '35532821'],
  ['Chicken Roll', 'ચિકન રોલ', 'specialties', '33430554'],
  ['Russian Cutlet', 'રશિયન કટલેટ', 'starters', '5708088'],
  ['Hara Bhara Kebab', 'હરા ભરા કબાબ', 'starters', '29173123'],
  ['Samosa', 'સમોસા', 'starters', '9027521'],
  ['Patties', 'પેટીસ', 'starters', '441486'],
  ['Kebab', 'કબાબ', 'starters', '6522658'],
  ['Hangama Kebab', 'હંગામા કબાબ', 'starters', '39059254'],
];

export const menu = dishes.map(([en, gu, category, imageId]) => ({
  en,
  gu,
  category,
  image: photo(imageId),
}));
