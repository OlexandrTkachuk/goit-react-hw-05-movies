import styled from '@emotion/styled';

export const Title = styled.h1`
  width: 400px;
  text-align: center;
  font-size: 24px;
  letter-spacing: 0.1;
  margin: 30px auto;
  background-color: cadetblue;
  border: none;
  border-radius: 20px;
  color: white;
`;

export const ImageGalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  max-width: calc(100vw - 600px);
  margin: 20px auto 0;
`;

export const ImageGalleryItem = styled.li`
  margin-bottom: 20px;
  width: 300px;
`;

export const ImageGalleryItemTitle = styled.h2`
  font-size: 16px;
  text-align: center;
  margin-top: 8px;
`;

export const ImageGalleryItemImage = styled.img`
  transition: transform 250ms linear;

  :hover {
    transform: scale(1.02);
  }
`;
