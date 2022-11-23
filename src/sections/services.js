/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';

const services = [
  {
    title: 'Space & Furniture',
    stitle:'Adapted to companies needs'
  },
  {
    title: 'Cleaning Service',
    stitle: 'Cleaned to perfection',
  },
  {
    title: 'Access 7am - 23pm',
    stitle: 'If necessary, there may be extension of time',
  },
  {
    title: 'Global Access',
    stitle: 'To all common areas',
  },
  {
    title: 'Internet',
    stitle: 'Reliable and secure',
  },
  {
    title: 'Personalized Service',
    stitle: 'On-site assistance',
  },
  {
    title: 'Air Conditioning',
    stitle: 'Comfort while working',
  },
  {
    title: 'Expenses Included',
    stitle: 'Water/Light',
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="A Hub Designed For You"
          title="Find what you're looking for"
        />
        <Box sx={styles.grid}>
          {services.map((service, i) => (
            <Service key={i} service={service} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 12],
    pb: [12, null, null, null, null, 15],
  },
  grid: {
    gap: [3, null, null, 4],
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      null,
      'repeat(4, 1fr)',
      'repeat(4, 300px)',
    ],
  },
};
