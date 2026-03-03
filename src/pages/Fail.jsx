import React from "react";
import { useParams } from "react-router-dom";
import * as F from "../styles/StyledFail";

const Fail = ({ dataList }) => {
  const { Id } = useParams();

  const post = Id ? dataList.find((item) => item.Id === parseInt(Id)) : null;

  return (
    <F.Container>
      <F.BackLogo src={`${process.env.PUBLIC_URL}/images/BackLogo.svg`} />

      <F.LetterWrapper>
        <F.LetterBg
          src={`${process.env.PUBLIC_URL}/images/Letter.svg`}
          alt="편지"
        />
        <F.LetterLogo
          src={`${process.env.PUBLIC_URL}/images/LetterLogo.svg`}
          alt="로고"
        />

        <F.Content>
          <F.Logo
            src={`${process.env.PUBLIC_URL}/images/Logo.svg`}
            alt="사자"
          />
          <F.Dongduk>동덕여자대학교 멋쟁이사자처럼</F.Dongduk>
          <F.Title>
            14기 아기사자 <br />
            합격자 조회
          </F.Title>
          <F.Line src={`${process.env.PUBLIC_URL}/images/Line.svg`} alt="선" />
          <F.MainContent>
            <F.Name>
              <div id="name">
                {post && post.Name}
                {"\u00A0"}
              </div>
              <div id="u">님</div>
            </F.Name>
            <F.Text>
              <br />
              최종 불합격하셨습니다.
              <br />
              <br />
              동덕여대 멋쟁이사자처럼 14기 아기사자 모집에
              <br />
              지원해주셔서 진심으로 감사합니다.
              <br />
              <br />
              아쉽게도 이번 전형에서는 함께하지 못하게 되었습니다.
              <br />
              보내주신 소중한 지원에 다시 한 번 감사드리며,
              <br />
              제출해 주신 개인 정보는 모두 폐기되고 추후 재지원에 <br /> 따른
              불이익은 없습니다.
              <br />
              <br />
              앞으로의 도전을 진심으로 응원하겠습니다.
            </F.Text>
          </F.MainContent>
        </F.Content>
      </F.LetterWrapper>
    </F.Container>
  );
};

export default Fail;
