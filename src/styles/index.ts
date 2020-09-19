import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.main`

  .first {
    background: red;
    overflow: hidden;
    .offsett{}
    .a {
      background: #f5f1ea;
      height: 100%;
      display: flex;
      align-items: flex-end;
      .left-side {
        width: 50%;
        height: 100%;
        background: #7dbb91;
      }
      .rigth-side {
        width: 50%;
        height: 100%;
        .right-image {
          background: #7dbb91;
        }
      }
    }
    .b {
      background: #582524;
      width: 100%;
      height: 100%;
    }
    .c{
      background: #0a7397;
      width: 100%;
      height: 100%;
    }
  }
  .second {
    background: green;
  }
  .third {
    background: yellow;
  }
  .fourth {
    background: blue;
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