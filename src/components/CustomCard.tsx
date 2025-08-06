import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

type CustomCardProps = {
  image: string;
  title: string;
  description: string;
}

const CustomCard: React.FC<CustomCardProps> = ({image, title, description}) => (
  <Card
    hoverable
    style={{ width: 300 }}
    cover={<img alt={title} src={image} />}
  >
    <Meta title={title} description={description} />
  </Card>
);

export default CustomCard;