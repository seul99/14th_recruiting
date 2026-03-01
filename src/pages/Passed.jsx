import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as P from "../styles/StyledPassed";
import Confetti from "react-confetti";

const Passed = ({ dataList }) => {
  const { Id } = useParams();
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: document.body.clientWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    setTimeout(() => setShowConfetti(false), 5000);

    const handleResize = () => {
      setWindowSize({
        width: document.body.clientWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const post = Id ? dataList.find((item) => item.Id === parseInt(Id)) : null;

  return (
    <P.Container>
      {showConfetti && (
        <P.ConfettiWrapper>
          <Confetti width={windowSize.width} height={windowSize.height} />
        </P.ConfettiWrapper>
      )}
      <P.BackLogo src={`${process.env.PUBLIC_URL}/images/BackLogo.svg`} />

      <P.LetterWrapper>
        <P.LetterBg
          src={`${process.env.PUBLIC_URL}/images/Letter.svg`}
          alt="편지"
        />
        <P.LetterLogo
          src={`${process.env.PUBLIC_URL}/images/LetterLogo.svg`}
          alt="로고"
        />

        <P.Content>
          <P.Logo
            src={`${process.env.PUBLIC_URL}/images/Logo.svg`}
            alt="사자"
          />
          <P.Dongduk>동덕여자대학교 멋쟁이사자처럼</P.Dongduk>
          <P.Title>
            14기 아기사자 <br />
            합격자 조회
          </P.Title>
          <P.Line src={`${process.env.PUBLIC_URL}/images/Line.svg`} alt="선" />
          <P.MainContent>
            <P.Name>
              <div id="name">
                {post && post.Name}
                {"\u00A0"}
              </div>
              <div id="u">님</div>
            </P.Name>
            <P.Text>
              📍 <br />
              <P.RedText>14기 최종합격</P.RedText>{" "}
              <P.BoldText>하셨습니다!</P.BoldText>
              <br />
              긴 선발 과정에 참여하시느라 고생 많으셨습니다. <br />
              자세한 사항은 <P.BoldText>discord</P.BoldText>를 통해
              안내드리겠습니다.
              <br />
              <br />
              <a
                href="https://discord.gg/zXppwGwMN"
                target="_blank"
                rel="noopener noreferrer"
              >
                링크 [ https://discord.gg]
              </a>
              <br />
              <br />
              <P.RedText>3월 7일(토) 오후 15:00까지</P.RedText> <br />
              디스코드에 들어와주세요! <br />
              <br />
              <P.RedText>3월 8일(일)</P.RedText> 동덕 멋사{" "}
              <P.RedText>OT </P.RedText>에서 만나요! <br />
              <P.GrayText>*OT 장소는 교내에서 진행 추후 후가 안내</P.GrayText>
            </P.Text>
          </P.MainContent>
        </P.Content>
      </P.LetterWrapper>
    </P.Container>
  );
};

export default Passed;
