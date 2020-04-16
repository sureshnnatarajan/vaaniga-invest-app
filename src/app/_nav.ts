import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Companies'
  },
  {
    name: 'Sectors',
    url: '/sectors',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'FMCG',
        url: '/sectors/fmcg',
        icon: 'icon-basket-loaded'
      },
      {
        name: 'Pharma',
        url: '/sectors/pharma',
        icon: 'icon-basket-loaded'
      }
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Mutual Funds'
  },
  {
    name: 'MutualFunds',
    url: '/mutualfunds',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'PPFAS',
        url: '/mutualfunds/ppfas',
        icon: 'icon-basket-loaded'
      },
    ]
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Extras',
    url: '/extras',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Blogs',
        url: '/extras/blogs',
        icon: 'icon-basket-loaded'
      },
      {
        name: 'StockBrokers',
        url: '/extras/stockBrokers',
        icon: 'icon-basket-loaded'
      }
    ]
  },
];
