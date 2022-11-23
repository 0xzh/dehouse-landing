/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import { useMediaQuery } from 'react-responsive';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import team from 'assets/images/team.png';

export default function Support() {
  return (
    <section id="support" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Meet our team!"
          description="A diverse group of talented individuals with impactful approaches to Web3 community development."
        />

        <Box as="figure" sx={styles.thumbWrapper}>
          <Image src={team} loading="lazy" alt="Team" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [0],
  },
  heading: {
    mb: [8, null, null, 10, null, 15],
    maxWidth: [null, null, null, 500, 600, null],
    h3: {
      fontWeight: 500,
      fontSize: [3, null, null, 8, 11],
      lineHeight: 1.4,
      letterSpacing: 'heading',
      color: 'heading',
    },
    p: {
      mt: [3],
      maxWidth: [500],
    },
  },
  thumbWrapper: {
    display: 'flex',
    justifyContent: 'center',
    mb: '-1px',
    img: {
      height: [180, 'auto'],
    },
  },
};
