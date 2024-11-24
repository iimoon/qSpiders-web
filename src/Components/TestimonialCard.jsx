import React from 'react';
import { Card, CardContent, Avatar, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '700px', // Default width for desktop
  height: '380px', // Fixed height
  margin: 'auto',
  padding: '16px',
  borderRadius: '24px',
  backgroundColor: '#f2f2f2',
  textAlign: 'center',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    width: '90%', // Adjust width for medium screens (tablets)
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%', // Full width on small screens (mobiles)
    height: 'auto', // Adjust height on mobile for better fit
    padding: '8px', // Adjust padding for mobile
  },
}));

const StyledAvatar = styled(Avatar)({
  width: 64,
  height: 64,
  margin: 'auto',
  marginBottom: '16px',
});

const QuotationMark = styled(Box)({
  position: 'absolute',
  top: '8px',
  left: '16px',
  fontSize: '32px',
  color: '#ccc',
});

const Stars = styled(Box)({
  marginTop: '8px',
  marginBottom: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2px',
  color: '#ff9800',
});

const DotContainer = styled(Box)({
  position: 'absolute',
  bottom: '8px',
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Dot = styled(Box)(({ active }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  margin: '0 4px',
  backgroundColor: active ? '#000' : '#ccc',
}));

const TestimonialCard = ({ review, isActive, totalSlides }) => {
  const { name, role, text, avatar } = review;

  return (
    <StyledCard>
      <QuotationMark>“</QuotationMark>
      <StyledAvatar alt={name} src={avatar} />
      <Typography variant="h6" fontWeight="bold">
        {name}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        {role}
      </Typography>
      <Stars>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span key={i}>{i < 4 ? '★' : '☆'}</span>
          ))}
      </Stars>
      <CardContent>
        <Typography variant="body2" color="textPrimary">
          {text}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default TestimonialCard;
