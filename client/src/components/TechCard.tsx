import React, { FC, useState } from 'react';
import { Box, Card, CardBody, CardFooter, Grid, Heading, Text } from 'grommet';
import TechTileModal from './TechTileModal';

interface TechCardProps {
  title: string;
  color?: string;
}

export const TechCard: FC<TechCardProps> = ({ title, color }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <Card
      key={title}
      as="li"
    >
      <CardBody>
        <Heading
          level={2}
          size="small"
          margin="auto"
        >
          {title}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default TechCard;
