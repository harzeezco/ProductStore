export const HeaderNavLinks: { label: string; href: string }[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'About',
    href: '/about',
  },
];

type FooterNavLinksType = {
  label: string;
  links: {
    label: string;
    href: string;
  }[];
}

export const FooterNavLinks: FooterNavLinksType[] = [
  {
    label: 'Account',
    links: [
      {
        label: 'My Account',
        href: '/account',
      },
      {
        label: 'Login/Register',
        href: '/auth/sign-up',
      },
      {
        label: 'Cart',
        href: '/cart',
      },
      {
        label: 'Shop',
        href: '/shop',
      },
    ],
  },
  {
    label: 'Quick Link',
    links: [
      {
        label: 'Privacy Policy',
        href: '/privacy',
      },
      {
        label: 'Terms Of Use',
        href: '/terms',
      },
      {
        label: 'About',
        href: '/about',
      },
    ],
  },
];
