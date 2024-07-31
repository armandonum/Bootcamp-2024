import styled from 'styled-components';


export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
      width: 100vw;
   height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
 
  z-index: 2;
  font: 1.8rem sans-serif;
  color: rgba(43, 40, 37, 0.7);
  @media (max-width: 768px) {
    font-size: 120%;

  }

`;


export const ModalContent = styled.div<{ bgColor: string }>`

 background: ${(props) => props.bgColor || 'black'};
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
`;



export const CloseButton = styled.button`
  
background: none;
display: flex;
flex-end: ;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  padding: 10px 0;
align-items: center;
justify-content: center;
align-items: center;
  .hearder{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  
    }

    .name
    {
    display: flex;
    justify-content: center;
    }

    .type
    {
    display: flex;
    justify-content: center;
    
    }

    .image
    {
    display: flex;
    justify-content: center;
    }

    

 
`;

