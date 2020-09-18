import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.main`

  .first {
    background: green;
    overflow: hidden;
    .offsett{}
  }
  .second {
    background: red;
  }
  .third {
    background: gray;
  }
`;

export const Section = styled.section`
  position: relative;
`;

export const Sticky = styled(motion.div)`
  position: sticky;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
`;