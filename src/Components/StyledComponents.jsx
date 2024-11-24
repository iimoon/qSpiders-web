import styled from 'styled-components';
import { Card, Avatar } from '@mui/material';

// Styled container for the testimonial card
export const StyledCard = styled(Card)`
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

// Styled avatar for displaying user images
export const StyledAvatar = styled(Avatar)`
  width: 80px;
  height: 80px;
  margin: 20px auto;
`;

// Quotation mark styling
export const QuotationMark = styled.div`
  font-size: 50px;
  color: #f4b400;
  font-weight: bold;
`;

// Stars container
export const Stars = styled.div`
  margin: 10px 0;
  font-size: 16px;
  color: #ffc107;
`;

// Dot container for navigation dots
export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

// Individual dot
export const Dot = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#1976d2' : '#ccc')};
  transition: background-color 0.3s ease;
`;
