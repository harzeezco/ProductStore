export const homeProducts: { name: string; img: string }[] = [
  {
    name: 'iPhone',
    img: 'iphone.jpg',
  },
  {
    name: 'MacBook',
    img: 'macbook.jpg',
  },
  {
    name: 'Watch',
    img: 'watch.jpg',
  },
  {
    name: 'iMac',
    img: 'imac.png',
  },
];

export const SideLinks: { label: string; icon: string }[] = [
  {
    label: 'Home',
    icon: 'home.svg',
  },
  {
    label: 'iPhone',
    icon: 'mobile.svg',
  },
  {
    label: 'MacBook',
    icon: 'laptop.svg',
  },
  {
    label: 'Watch',
    icon: 'watch.svg',
  },
  {
    label: 'iMac',
    icon: 'iMac.svg',
  },
];

export const iPhoneProducts = [
  {
    name: 'iPhone 14 pro',
    img: 'iphone-14-pro.jpg',
    description: 'The ultimate iPhone',
    price: 1200,
    discount: 999,
  },
  {
    name: 'iPhone 14',
    img: 'iphone-14.jpg',
    description: 'A total powerhouse',
    price: 999,
    discount: 766,
  },
  {
    name: 'iPhone 13',
    img: 'iphone-13.jpg',
    description: 'As amazing as ever',
    price: 766,
    discount: 668,
  },
];

export const watchProducts = [
  {
    name: 'Apple Watch Series 8',
    defaultImg: 'watch-compare-s8-img-1.jpg',
    animateImg: 'watch-compare-s8-img-2.jpg',
    description:
      '45mm or 41mm case size \n 50m water resistant \n Swimproof',
    price: 1200,
    discount: 999,
  },
  {
    name: 'Apple Watch SE',
    defaultImg: 'watch-compare-se-img-1.jpg',
    animateImg: 'watch-compare-se-img-2.jpg',
    description:
      '45mm or 41mm case size \n 50m water resistant \n Swimproof',
    price: 999,
    discount: 766,
  },
  {
    name: 'Apple Watch Ultra',
    defaultImg: 'watch-compare-ultra-img-1.jpg',
    animateImg: 'watch-compare-ultra-img-2.jpg',
    description:
      '44mm or 40mm case size \n 50m water resistant \n Swimproof',
    price: 766,
    discount: 668,
  },
];

export const MacBookProduct = [
  {
    id: 1,
    name: 'MacBook Air',
    img: [
      'macbook-air-silver-m1.jpg',
      'macbook-air-space-gray-m1.jpg',
      'macbook-air-gold-m1.jpg',
    ],
    price: 1199,
    discount: 999,
    description: [
      'M2 chip with 8-core CPU and 8-core GPU',
      '13.3-inch Retina display with True Tone',
      'Magic Keyboard with Touch ID',
      '8GB unified memory (configurable up to 24GB)',
      '256GB SSD storage (configurable up to 2TB)',
    ],
    colors: [
      { name: 'silver', hexColor: '#b2b5b8' },
      { name: 'space-gray', hexColor: '#f0e0d3' },
      { name: 'gold', hexColor: '#e0e2e1' },
    ],
    logo: 'apple-m1-icon.png',
  },
  {
    id: 2,
    name: 'MacBook Pro',
    img: [
      'macbook-air-midnight-m2.jpg',
      'macbook-air-starlight-m2.jpg',
      'macbook-air-spacegray-m2.jpg',
      'macbook-air-silver-m2.jpg',
    ],
    price: 1599,
    discount: 1299,
    description: [
      '4.2-inch or 16.2-inch Liquid Retina XDR display',
      'Wi-Fi 6E and Bluetooth 5.3',
      'M3 chip with 10-core CPU and 16-core GPU',
      'Touch Bar and Touch ID',
      'Three Thunderbolt 4 ports on 14-inch, four on 16-inch',
      'Up to 17 hours of battery life on 14-inch',
    ],
    colors: [
      { name: 'midnight', hexColor: '#2e3641' },
      { name: 'starlight', hexColor: '#f0e5d3' },
      { name: 'space gray', hexColor: '#7d7e80' },
      { name: 'silver', hexColor: '#e3e4e6' },
    ],
    logo: 'apple-m2-icon.png',
  },
];

interface ProductImage {
  alt: string;
  img: string;
  gridCol: string;
  gridRow: string;
}

interface IMacProductsProps {
  [key: string]: ProductImage[];
}

export const iMacProducts: IMacProductsProps = {
  orange: [
    {
      alt: 'iMac side',
      img: 'orange-side.jpg',
      gridCol: '1 / 2',
      gridRow: '1 / 3',
    },
    {
      alt: 'iMac front',
      img: 'orange-front.jpg',
      gridCol: '2 / -1',
      gridRow: '1 / 2',
    },
    {
      alt: 'iMac back',
      img: 'orange-back.jpg',
      gridCol: '2 / 3',
      gridRow: '2 / 3',
    },
  ],
  green: [
    {
      alt: 'iMac side',
      img: 'green-side.jpg',
      gridCol: '1 / 2',
      gridRow: '1 / 3',
    },
    {
      alt: 'iMac front',
      img: 'green-front.jpg',
      gridCol: '2 / -1',
      gridRow: '1 / 2',
    },
    {
      alt: 'iMac back',
      img: 'green-back.jpg',
      gridCol: '2 / 3',
      gridRow: '2 / 3',
    },
  ],
  pink: [
    {
      alt: 'iMac side',
      img: 'pink-side.jpg',
      gridCol: '1 / 2',
      gridRow: '1 / 3',
    },
    {
      alt: 'iMac front',
      img: 'pink-front.jpg',
      gridCol: '2 / -1',
      gridRow: '1 / 2',
    },
    {
      alt: 'iMac back',
      img: 'pink-back.jpg',
      gridCol: '2 / 3',
      gridRow: '2 / 3',
    },
  ],
  silver: [
    {
      alt: 'iMac side',
      img: 'silver-side.jpg',
      gridCol: '1 / 2',
      gridRow: '1 / 3',
    },
    {
      alt: 'iMac front',
      img: 'silver-front.jpg',
      gridCol: '2 / -1',
      gridRow: '1 / 2',
    },
    {
      alt: 'iMac back',
      img: 'silver-back.jpg',
      gridCol: '2 / 3',
      gridRow: '2 / 3',
    },
  ],
  yellow: [
    {
      alt: 'iMac side',
      img: 'yellow-side.jpg',
      gridCol: '1 / 2',
      gridRow: '1 / 3',
    },
    {
      alt: 'iMac front',
      img: 'yellow-front.jpg',
      gridCol: '2 / -1',
      gridRow: '1 / 2',
    },
    {
      alt: 'iMac back',
      img: 'yellow-back.jpg',
      gridCol: '2 / 3',
      gridRow: '2 / 3',
    },
  ],
  purple: [
    {
      alt: 'iMac side',
      img: 'purple-side.jpg',
      gridCol: '1 / 2',
      gridRow: '1 / 3',
    },
    {
      alt: 'iMac front',
      img: 'purple-front.jpg',
      gridCol: '2 / -1',
      gridRow: '1 / 2',
    },
    {
      alt: 'iMac back',
      img: 'purple-back.jpg',
      gridCol: '2 / 3',
      gridRow: '2 / 3',
    },
  ],
};