/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Slider from 'react-slick';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import SlickArrow from 'components/slick-arrow';

const data = [
  {
    id: 1,
    title: 'Pack DOGE',
    subtitle: 'For the startup team with a dream',
    price: 248,
    isRecommended: false,
    buttonText: '€10.00 Daily Pass',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: '20% OFF*',
      },
      {
        id: 2,
        isAvailable: true,
        title: `5 days/40,00€ (per day: 8,00€).`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Flex desk`,
      },
    ],
  },
  {
    id: 2,
    title: 'Pack VITALIK',
    subtitle: 'For the visionaries',
    price: 201.5,
    isRecommended: true,
    buttonText: '€10.00 Daily Pass',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: '33% OFF*',
      },
      {
        id: 2,
        isAvailable: true,
        title: `15 days/100€.`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Ahead of the curve`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Flex desk`,
      },
    ],
  },
  {
    id: 3,
    title: 'Pack SATOSHI',
    subtitle: 'For the ultimate company team who work with new come data stack',
    price: 170.5,
    isRecommended: false,
    buttonText: '€10.00 Daily Pass',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: '47% OFF',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Month/160,00€.`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Fix Desk`,
      },
    ],
  },
];

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <SlickArrow control="next" />,
  prevArrow: <SlickArrow control="prev" />,
  responsive: [
    {
      breakpoint: 100000,
      settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Pricing = () => {
  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Web3 Friendly"
          title="Choose a pricing plan that suits you"
        />
        <Slider sx={styles.grid} {...settings}>
          {data?.map((price, index) => (
            <PriceTable price={price} key={index} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Pricing;

const styles = {
  section: {
    pt: [6],
    pb: [12, null, null, 15, 17],
  },
  container: {
    pl: 0,
    pr: 0,
  },
  heading: {
    mb: [7, null, null, null, 14, null, 18],
    px: [6, null, null, 0],
    h3: {
      fontSize: [3, null, null, 8],
    },
  },
  grid: {
    gap: [null, null, null, null, 6],
    display: [null, null, null, null, 'grid'],
    gridTemplateColumns: [null, null, null, null, 'repeat(3, 1fr)'],
    alignItems: [null, null, null, null, 'flex-end'],
    '.slick-slide > div': {
      p: ['35px', '40px', null, '35px 23px 23px', 0],
    },
    '.slick-arrow': {
      bottom: -5,
    },
  },
};
