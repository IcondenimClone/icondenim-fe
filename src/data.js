import bannerTatCa from './assets/images/banner-tat-ca.jpg';
import bannerSieuMat from './assets/images/banner-sieu-mat.png';
import bannerSieuNhe from './assets/images/banner-sieu-nhe.png';
import bannerSieuCoDan from './assets/images/banner-sieu-co-dan.png';

import filterTatCa from './assets/images/filter-tat-ca.png';
import filterTatCaActive from './assets/images/filter-tat-ca-active.png';
import filterSieuMat from './assets/images/filter-sieu-mat.png';
import filterSieuMatActive from './assets/images/filter-sieu-mat-active.png';
import filterSieuNhe from './assets/images/filter-sieu-nhe.png';
import filterSieuNheActive from './assets/images/filter-sieu-nhe-active.png';
import filterSieuCoDan from './assets/images/filter-sieu-co-dan.png';
import filterSieuCoDanActive from './assets/images/filter-sieu-co-dan-active.png';


import jean1_blue_default from './assets/images/jean-1.jpg';
import jean1_blue_hover from './assets/images/jean-hover-1.jpg';
import jean1_black_default from './assets/images/jean-5.jpg';
import jean1_black_hover from './assets/images/jean-hover-5.jpg';
import color_blue from './assets/images/color-swatch-blue.jpg'; 
import color_black from './assets/images/color-swatch-black.jpg';
import tagNewImage from './assets/images/TagNew.png';

import bannerNewArrivals from './assets/images/banner-new-product.jpg';
import bannerBestSellers from './assets/images/banner-best-seller.jpg';
import bannerSummer from './assets/images/banner-summer-collection.jpg';

export const categoryData = [
  {
    id: 'tat-ca-jeans',
    filterImage: filterTatCa,
    filterImageActive: filterTatCaActive,
    bannerImage: bannerTatCa,
  },
  {
    id: 'sieu-mat',
    filterImage: filterSieuMat,
    filterImageActive: filterSieuMatActive,
    bannerImage: bannerSieuMat,
  },
  {
    id: 'sieu-nhe',
    filterImage: filterSieuNhe,
    filterImageActive: filterSieuNheActive,
    bannerImage: bannerSieuNhe,
  },
  {
    id: 'sieu-co-dan',
    filterImage: filterSieuCoDan,
    filterImageActive: filterSieuCoDanActive,
    bannerImage: bannerSieuCoDan,
  }
];

export const productsData = [
  {
    id: 1,
    name: 'Quần Smart Jean Nam Siêu Co Dãn Xám Trơn Form Smart Fit',
    price: '549,000₫',
    tagImage: tagNewImage,
    tag: 'HÀNG MỚI',
    variants: [
      {
        id: 'blue',
        colorName: 'Xanh nhạt',
        imageDefault: jean1_blue_default,
        imageHover: jean1_blue_hover,
        colorSwatch: color_blue 
      },
      {
        id: 'black',
        colorName: 'Đen',
        imageDefault: jean1_black_default,
        imageHover: jean1_black_hover,
        colorSwatch: color_black
      }
    ]
  },
  {
    id: 2,
    name: 'Quần Smart Jean Nam Siêu Co Dãn Xám Trơn Form Smart Fit',
    price: '599,000₫',
    tagImage: tagNewImage,
    tag: 'HÀNG MỚI',
    variants: [
      {
        id: 'blue',
        colorName: 'Xanh nhạt',
        imageDefault: jean1_blue_default,
        imageHover: jean1_blue_hover,
        colorSwatch: color_blue 
      },
      {
        id: 'black',
        colorName: 'Đen',
        imageDefault: jean1_black_default,
        imageHover: jean1_black_hover,
        colorSwatch: color_black
      }
    ]
  },
  {
    id: 3,
    name: 'Quần Smart Jean Nam Siêu Co Dãn Xám Trơn Form Smart Fit',
    price: '549,000₫',
    tagImage: tagNewImage,
    tag: 'HÀNG MỚI',
    variants: [
      {
        id: 'blue',
        colorName: 'Xanh nhạt',
        imageDefault: jean1_blue_default,
        imageHover: jean1_blue_hover,
        colorSwatch: color_blue 
      },
      {
        id: 'black',
        colorName: 'Đen',
        imageDefault: jean1_black_default,
        imageHover: jean1_black_hover,
        colorSwatch: color_black
      }
    ]
  },
  {
    id: 4,
    name: 'Quần Smart Jean Nam Siêu Co Dãn Xám Trơn Form Smart Fit',
    price: '549,000₫',
    tagImage: tagNewImage,
    tag: 'HÀNG MỚI',
    variants: [
      {
        id: 'blue',
        colorName: 'Xanh nhạt',
        imageDefault: jean1_blue_default,
        imageHover: jean1_blue_hover,
        colorSwatch: color_blue 
      },
      {
        id: 'black',
        colorName: 'Đen',
        imageDefault: jean1_black_default,
        imageHover: jean1_black_hover,
        colorSwatch: color_black
      }
    ]
  },
  {
    id: 5,
    name: 'Quần Smart Jean Nam Siêu Co Dãn Xám Trơn Form Smart Fit',
    price: '549,000₫',
    tagImage: tagNewImage,
    tag: 'HÀNG MỚI',
    variants: [
      {
        id: 'blue',
        colorName: 'Xanh nhạt',
        imageDefault: jean1_blue_default,
        imageHover: jean1_blue_hover,
        colorSwatch: color_blue 
      },
      {
        id: 'black',
        colorName: 'Đen',
        imageDefault: jean1_black_default,
        imageHover: jean1_black_hover,
        colorSwatch: color_black
      }
    ]
  }
];

export const displayTabs = [
    { 
        id: 'new-arrivals', 
        title: 'Hàng mới',
        bannerImage: bannerNewArrivals, 
    },
    { 
        id: 'best-sellers', 
        title: 'Bán chạy',
        bannerImage: bannerBestSellers,
    },
    { 
        id: 'summer-collection', 
        title: 'Đồ Hè',
        bannerImage: bannerSummer,
    },
];
export const featuredProductsData={
  'new-arrivals':[
    productsData[0],
    productsData[1],
    productsData[2],
    productsData[3],
    productsData[4],
    productsData[0],
    productsData[1],
    productsData[2],
    productsData[4],
  ],
  'best-sellers':[
    productsData[2],
    productsData[3],
    productsData[1],
    productsData[2],
    productsData[3],
    productsData[4],
    productsData[0],
    productsData[1],
    productsData[4],
    productsData[2],
  ],
  'summer-collection':[
    productsData[0],
    productsData[1],
    productsData[2],
    productsData[3],
    productsData[4],
    productsData[0],
    productsData[1],
    productsData[2],
    productsData[3],
    productsData[4],
  ]
}
