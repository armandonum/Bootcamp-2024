import styled from 'styled-components';


export const Container=styled.div`
        display: flex;
        flex: 2;
        justify-Content: center;
        align-Items: center;
        flex-Direction: column;
        width: 100vw;
      height: 100vh;
      background: orange;
     font: 1.8rem sans-serif;

     @media (max-width: 768px) {
    font-size: 120%;
  }
`

export const Header=styled.div
`
 display: flex;

          padding: 1rem;
          margin: 1.3rem;
          border-Radius: 2rem;
          box-Shadow: 0 0 10px rgba(0,0,0,5);

           @media (max-width: 768px) {
    flex-direction: row;
    margin: 0.8rem;
  }
        
`

export const Data=styled.div
`
    display: flex;
            flex-Direction: column;
            margin: 1.3rem;
  @media (max-width: 768px) {
    margin: 0.5rem;
  }

    `
export const Image=styled.div`
display: flex;
justify-Content: center;
    width: 40%;
    height: 60%;
    border-Radius: 50%;
    margin: 5rem;
    box-Shadow: 0 0 10px rgba(0,0,0,5);

    &:hover {
        transform: scale(1.1);
        transition: all 0.5s;
    }
          @media (max-width: 768px) {
    width: 80%;
    margin: 2rem;
  }

  
`

export const Type= styled.div
`

    display: flex;
    align-Items: center;
  
   
`


export const TypeText = styled.div<{ bgColor: string }>`
  position: relative;
  background: ${(props) => props.bgColor || 'black'};
  color: white;
  padding: 0.5rem;
  border-radius: 20px;
  margin-right: 1rem;
  display: flex;
  box-Shadow: 0 0 10px rgba(0,0,0,5);
  align-items: center;


  img {
    width: 2rem;
    height: 2rem;
    margin-right: 8px;
  }

  &:hover {
    transform: scale(1.5);
    transition: all 0.5s;
  }

    @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem;
    margin-right: 0.5rem;
  }
`;