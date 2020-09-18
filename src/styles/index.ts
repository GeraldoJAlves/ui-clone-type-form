import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.main`

  .first {
    background: purple;
    overflow: hidden;
    .offsett{}
  }
  .second {
    background: blue;
  }
  .third {
    background: gray;
  }
`;

export const Section = styled.section`
  position: relative;
`;

export const Sticky = styled.div`
  position: sticky;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
`;