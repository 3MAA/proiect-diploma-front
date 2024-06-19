import '../pages/styles/Home.css';
import Img from '../assets/img2.png';
import { Link } from 'react-router-dom';
import Button from '@mui/joy/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import React from 'react';
import Footer from '../pages/component/Footer';

const boxPreview = {
  '&:hover': {
    color: '#499EE9',
    backgroundColor: 'transparent',
  },
  color: '#313131',
};

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    console.log('Deschide dialogul');
    setOpen(true);
  };

  const handleClose = () => {
    console.log('Închide dialogul');
    setOpen(false);
  };
  return (
    <div className='container'>
      <div className='left-container'>
        <div className='panel-container'>
          <div className='header'>
            <h1 className='text-header'>Bine ai venit!</h1>
            <h3 className='subtext-header'> Eu sunt AVICSC,</h3>
            <p>
              asistentul tău virtual ce îți va face procesul de cazare în cămin
              cât mai simplu și plăcut posibil. Fie că ești la începutul
              călătoriei tale academice sau te apropii de final, înțeleg cât de
              important este să ai un spațiu confortabil pentru studiu și
              relaxare.
            </p>
          </div>
          <div className='card-bottom-preview'>
            <Link to='/chatbot' style={{ textDecoration: 'none' }}>
              <Button
                variant='plain'
                endDecorator={<ArrowOutwardIcon />}
                sx={boxPreview}
                onClick={() => {
                  handleClickOpen();
                }}
              >
                Începe o conversație
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='right-container'>
        <img src={Img} alt='' />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
