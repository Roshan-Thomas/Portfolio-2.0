/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';

import Avatar1 from 'assets/selectedwork/pipory-logo.webp';
import Avatar2 from 'assets/selectedwork/weather_icon.webp';
import Avatar3 from 'assets/selectedwork/react-logo.webp';
import Avatar4 from 'assets/selectedwork/django.svg';

const data = [
    {
      id: 1,
      title: 'Designing Pipory.com',
      description:
        'Pipory is an upcoming social media platform that aims at motivating users to pursue their creative talents (Poems & Quotes, Photography, Art, Memes & Writings) by providing rewards, discounts & monetization for their posts.',
      avatar: Avatar3,
    },
    {
      id: 2,
      title: 'Kilo Text Editor',
      description:
        'Kilo is a terminal text editor made using C. It is primarily for editing C and C++ files, and it has the features that you would see on any modern-day text-editor such as syntax highlighting which is perfect for day-to-day use.',
      avatar: Avatar3,
    },
    {
      id: 3,
      title: 'Voice Controlled News Reader (React.js)',
      description:
        'The app allows you to read the news from anywhere on the internet, from multiple newspapers. The most important feature about the app is that you dont even have to touch the mouse to get the news.',
      avatar: Avatar3,
    },
    {
      id: 4,
      title: 'E-Commerce Store (Django)',
      description:
        'The website displays products. Users can add and remove products to/from their cart while also specifying the quantity of each item. They can then enter their address and choose Stripe to handle the payment processing.',
      avatar: Avatar3,
    },
];

export default function SelectedWorkGrid() {
return (
    <section id="works">
    <Container css={{ textAlign: 'center' }}>
    <SectionHeader 
        title="Selected Work"
    />
    </Container>
    <Box sx={styles.BoxWrapper}>
        <Grid gap={5} columns={2} sx={styles.grid}>
        {data.map((item) => (
            <Box sx={styles.projectBox} key={item.id}>
                <div className="imageContainer">
                    <Image src={item.avatar} alt="Client Image" />
                </div>
                <Heading as="h3" sx={styles.title}>
                    {item.title}
                </Heading>
                <Text sx={styles.description}>
                    {item.description}
                </Text>    
            </Box>
        ))}
        </Grid>
    </Box>
    </section>
);
}

const styles = {
grid: {
    '@media (max-width: 639px)': {
        gridTemplateColumns: 'repeat(1, 1fr)'
    }
},
BoxWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mt: '-30px',
    px: '30px',
},
projectBox: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    borderRadius: '6px',
    p: [
        '30px 20px 35px',
        '30px 25px 35px',
        '30px 20px 35px',
        '35px 30px 40px 40px',
        '30px 30px 35px',
        '35px 30px 40px 40px',
      ],
      bg: 'white',
      textAlign: 'left',
      m: [
        '28px 5px 30px 5px',
        '28px 20px 30px 20px',
        '28px 15px 30px 15px',
        '28px 15px 30px 15px',
        '30px 20px 40px',
      ],
      '&:hover': {
        boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
      },
      '.imageContainer': {
          display: 'flex',
          alignItems: 'center',
          width: '500px',
          mb: '30px',
          img: {
            maxWidth: '100%',
            maxHeight: '100%',
            display: 'block',
          }
      }
},
title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
},
description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
},
heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
},
};