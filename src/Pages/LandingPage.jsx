import { useState, useEffect } from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import img from "../Image/bg.jpg";

const texts = ['Developer', 'Designer', 'Larry Daniels'];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000); // Change text every 1 second

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Stack spacing={3} alignItems="center" textAlign="center">
        <Typography variant="h2" fontWeight="bold" color="white">
          Hello
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: '#9e9e9e',
            fontWeight: 50,
          }}
        >
          I am <Typography variant='h3' component={'span'} color='#fdfdfd' fontWeight={'bold'}>{texts[currentIndex]}</Typography>
        </Typography>
        <Stack spacing={2} direction="row" color="white">
          <IconButton variant="none" sx={{boxShadow:'0px 0px 5px 0px',background:'none',color:'#fff'}}><FacebookIcon /></IconButton>
          <IconButton variant="none" sx={{boxShadow:'0px 0px 5px 0px',background:'none',color:'#fff'}}><TwitterIcon /></IconButton>
          <IconButton variant="none" sx={{boxShadow:'0px 0px 5px 0px',background:'none',color:'#fff'}}><LinkedInIcon /></IconButton>
          <IconButton variant="none" sx={{boxShadow:'0px 0px 5px 0px',background:'none',color:'#fff'}}><InstagramIcon /></IconButton>
          <IconButton variant="none" sx={{boxShadow:'0px 0px 5px 0px',background:'none',color:'#fff'}}><YouTubeIcon /></IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LandingPage;
