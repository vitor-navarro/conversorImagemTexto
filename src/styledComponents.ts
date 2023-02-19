import styled from 'styled-components';

export const Button = styled.button`
  background-color: #222121;
  border: solid 1px #222121;
  color: whitesmoke;
  padding: 8px;
  cursor: pointer;
`;

export const ImageInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed #ccc;
  padding: 16px;
  cursor: pointer;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
`;