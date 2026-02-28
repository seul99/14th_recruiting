import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  background: linear-gradient(180deg, #912642 0%, #d93a63 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const BackLogo = styled.img`
  position: absolute;
  top: 10%;
  width: 100%;
  z-index: 1;  
`;

export const LetterWrapper = styled.div`
  position: relative;
  top:2%;
  width: 95%;
  z-index: 2;  
`;
export const LetterBg = styled.img`
  width: 100%;
  display: block;
`;
export const LetterLogo = styled.img`
  position: absolute;
  top: 95%;        
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;      
`;
export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 60px;
  margin-bottom: 30px;
`;

export const Dongduk = styled.div`
  width: 280px;
  height: 33px;
  color: #912642;
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 230.769% */
`
export const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #7f1833;
  margin-bottom: 40px;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 75%;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  div {
    font-size: 14px;
    font-weight: 500;
  }

  input {
    height: 40px;
    border-radius: 6px;
    border: 1.2px solid #DC3B65;
    background: rgba(255, 242, 242, 0.20);
    padding-left: 12px;
    font-size: 14px;
    outline: none;
  }
`;

export const Text = styled.div`
  width: 96px;
  color: #DC3B65;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
`;
export const GoButton = styled.button`
  margin-top: 20px;
  height: 45px;
  border-radius: 5px;
  border: none;
  background: #7f1833;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;