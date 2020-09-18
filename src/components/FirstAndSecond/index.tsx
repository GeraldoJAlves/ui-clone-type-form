import React from 'react';
import { motion } from 'framer-motion';

import { Container } from './styles';

import { Sticky } from '../../styles';

const FirstAndSecond: React.FC = () => {
  return (
    <Sticky className="second">
      <motion.div>
        
      </motion.div>
    </Sticky>
  );
};

const First: React.FC = () => {
  return (
    <Sticky className="first"></Sticky>
  );
}

export default FirstAndSecond;
