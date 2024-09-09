import { styled } from '@mui/material/styles';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '20px',
});

export const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const Section = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
});

export const Title = styled('h2')({
  marginBottom: '10px',
  fontSize: '1.5rem',
  fontWeight: 'bold',
});

export const Content = styled('div')({
  flex: 1,
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  backgroundColor: '#f9f9f9',
});
