import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 390px;
  max-height: 844px;
  background: linear-gradient(180deg, #912642 0%, #d93a63 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ConfettiWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 999;
`;

export const BackLogo = styled.img`
  position: absolute;
  top: 10%;
  width: 100%;
  z-index: 1;
`;

export const LetterWrapper = styled.div`
  position: relative;
  top: 2%;
  width: 95%;
  z-index: 2;
`;
export const LetterBg = styled.img`
  width: 100%;
  display: block;
  margin-top: 10%;
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
  margin-bottom: 20px;
  margin-top: 10%;
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
`;
export const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #7f1833;
  margin-bottom: 30px;
`;

export const Line = styled.img`
  width: 100%;
  display: block;
`;

// 여기까지 top

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: end;
  margin-bottom: 5px;

  #name {
    color: #df3e68;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.52px;
  }

  #u {
    color: #912642;
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.52px;
  }
`;

export const Text = styled.div`
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 14px; /* 글자 크기 키움 */
    width: 100%; /* 좌우 여백 확보 */
    margin: 0 auto;
  }
`;
export const RedText = styled.span`
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: Bold;
  font-weight: 700;
  line-height: normal;
  color: #df3e68;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 14px; /* 글자 크기 키움 */
    width: 100%; /* 좌우 여백 확보 */
    margin: 0 auto;
  }
`;
export const BoldText = styled.span`
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: Bold;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 480px) {
    font-size: 14px; /* 글자 크기 키움 */
    width: 100%; /* 좌우 여백 확보 */
    margin: 0 auto;
  }
`;

export const GrayText = styled.div`
  font-family: "Pretendard Variable";
  font-size: 11px;
  font-style: Medium;
  font-weight: 500;
  line-height: normal;
  color: #938f8f;
  @media (max-width: 480px) {
    font-size: 12px; /* 글자 크기 키움 */
    width: 100%; /* 좌우 여백 확보 */
    margin: 0 auto;
  }
`;
