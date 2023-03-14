import styled from '@emotion/styled';

export const ReviewText = styled.p`
  text-align: center;
  font-size: 20px;
`;

export const ReviewWrapper = styled.ul``;

export const ReviewAuthor = styled.b`
  margin-bottom: 12px;
`;

export const ReviewContent = styled.p`
  width: 800px;
  font-size: 18px;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
