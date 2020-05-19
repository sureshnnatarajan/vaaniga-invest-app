import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  /*{
    name: 'Home',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },*/
  {
    name: 'Global Search',
    url: '/search',
    icon: 'icon-globe',
    children: [
      {
        name: 'Keyword Search',
        url: '/search',
        icon: 'fa fa-search'
      },
      {
        name: 'Product Search',
        url: '/search/product-search/',
        icon: 'fa fa-product-hunt'
      }
    ]
  },
  {
    name: 'ListedCompanies',
    url: '/listedCompanies',
    icon: 'fa fa-list'
  },
  /*{
    title: true,
    name: 'Companies'
  },*/
  /*
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
        icon: 'icon-compass'
      },
      {
        name: 'Cement',
        url: '/sectors/cement',
        icon: 'icon-energy'
      },
      {
        name: 'Chemicals',
        url: '/sectors/chemicals',
        icon: 'icon-energy'
      }
    ]
  },
  {
    divider: true
  },*/
  /*{
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
  },*/
  {
    name: 'Extras',
    url: '/extras',
    icon: 'fa fa-share-alt',
    children: [
      {
        name: 'Learn',
        url: '/extras/learn',
        icon: 'fa fa-book'
      },
      {
        name: 'NSE Option',
        url: '/extras/nseoption',
        icon: 'fa fa-money'
      },
      /*{
        name: 'Earn',
        url: '/extras/earn',
        icon: 'fa fa-money'
      }*/
      /*{
        name: 'StockBrokers',
        url: '/extras/stockBrokers',
        icon: 'icon-basket-loaded'
      }*/
    ]
  },
];
