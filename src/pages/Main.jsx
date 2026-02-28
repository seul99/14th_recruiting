import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMain";

const Main = ({ dataList }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [phone, setPhone] = useState("");

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(
        7,
        11
      )}`;
    }
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const handleSearch = () => {
    const matchedData = dataList.find(
      (item) =>
        item.Name === name &&
        item.Number === number &&
        item.Phone === phone
    );

    if (matchedData) {
      navigate(`/${matchedData.Result}/${matchedData.Id}`);
    } else {
      alert("일치하는 정보가 없습니다. 다시 확인해주세요!");
    }
  };

  return (
    <M.Container>
      <M.BackLogo
        src={`${process.env.PUBLIC_URL}/images/BackLogo.svg`}
      />

      <M.LetterWrapper>
        <M.LetterBg
          src={`${process.env.PUBLIC_URL}/images/Letter.svg`}
          alt="편지"
        />
        <M.LetterLogo
          src={`${process.env.PUBLIC_URL}/images/LetterLogo.svg`}
          alt="로고"
        />

        <M.Content>
          <M.Logo
            src={`${process.env.PUBLIC_URL}/images/Logo.svg`}
            alt="사자"
          />

          <M.Dongduk>
            동덕여자대학교 멋쟁이사자처럼
          </M.Dongduk>
          <M.Title>
            14기 아기사자  <br />
            합격자 조회
          </M.Title>

          <M.Input>
            <M.InputBox>
              <M.Text>이름</M.Text>
              <input
                type="text"
                placeholder="김멋사"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </M.InputBox>

            <M.InputBox>
              <M.Text>학번</M.Text>
              <input
                type="text"
                placeholder="20991234"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </M.InputBox>

            <M.InputBox>
              <M.Text>전화 번호</M.Text>
              <input
                type="text"
                placeholder="010-0000-0000"
                value={phone}
                onChange={handlePhoneChange}
                maxLength="13"
              />
            </M.InputBox>

            <M.GoButton onClick={handleSearch}>
              조회
            </M.GoButton>
          </M.Input>
        </M.Content>
      </M.LetterWrapper>
    </M.Container>
  );
};

export default Main;