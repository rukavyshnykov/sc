import styled from "styled-components";
import profile from "../assets/profile.jpg";
import { useState } from "react";

export const Profile = () => {
  const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 58px 0 73px;
    display: flex;
    justify-content: space-between;
    gap: 0 109px;
  `;

  const Heading = styled.p`
    color: #52106a;
    font-size: 30px;
    line-height: 42px;
    margin-bottom: 5px;
  `;

  const Caption = styled.p`
    font-size: 18px;
    line-height: 25px;
    font-weight: 500;
  `;

  const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 36px 0;
    width: fit-content;
    flex-shrink: 0;
  `;

  const Tabs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px 0;
    width: 100%;
  `;

  const Tab = styled.div<{ active?: boolean }>`
    padding: 12px 16px;
    box-shadow: ${(props) =>
      props.active ? "0px 0px 0px 3px #dccfe1" : "none"};
    border: ${(props) => (props.active ? "1px solid #52106a" : "none")};
    background-color: #fdfdfd;
    color: black;
    font-size: 14px;
    line-height: 19px;
    border-radius: 10px;
    cursor: pointer;
  `;

  const Image = styled.img`
    margin-top: 109px;
    flex-shrink: 0;
    height: min-content;
  `;

  const Content = styled.div`
    margin-top: 109px;
    width: 100%;
  `;

  const InputWrapper = styled.div`
    position: relative;
  `;
  const Label = styled.label`
    position: absolute;
    padding: 2px 12px;
    font-size: 12px;
    line-height: 16px;
    color: #939393;
    left: 19px;
    top: 0;
    transform: translate(0, -50%);
    background-color: white;
  `;

  const Input = styled.input`
    border: 1px solid #420d55;
    padding: 13px 15px;
    border-radius: 10px;
    width: 100%;
  `;

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px 0;
  `;

  const ChangePassword = styled.div`
    display: flex;
    gap: 0 15px;
    align-items: center;
    margin: 30px 0;

    & > span:nth-of-type(1) {
      font-size: 14px;
      line-height: 19px;
      color: #313131;
    }

    & > span:nth-of-type(2) {
      font-size: 12px;
      line-height: 16px;
      color: #c4c4c4;
      cursor: pointer;
    }
  `;

  const Button = styled.button`
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: #52106a;
    padding: 14px 28px;
    width: fit-content;
    font-size: 12px;
    line-height: 16px;
    color: white;
    width: 200px;
  `;

  const Back = styled.div`
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 20px;
    cursor: pointer;
  `;

  const ChangeButton = styled(Button)`
    margin-top: 35px;
    text-transform: uppercase;
  `;

  const Orders = styled.div`
    padding: 17px 22px 27px;
    background-color: #f5f5f5;
  `;

  const [isChange, setIsChange] = useState(false);
  const [isProfile, setIsProfile] = useState(true);

  return (
    <Container>
      <Sidebar>
        <div>
          <Heading>MY ACCOUNT</Heading>
          <Caption>Welcome back, Dmytro!</Caption>
        </div>
        <Tabs>
          <Tab active={isProfile === true} onClick={() => setIsProfile(true)}>
            Profile
          </Tab>
          <Tab active={isProfile === false} onClick={() => setIsProfile(false)}>
            Order information
          </Tab>
          <Tab>Logout</Tab>
        </Tabs>
      </Sidebar>
      <Content>
        {isProfile ? (
          !isChange ? (
            <>
              <Form>
                <InputWrapper>
                  <Label>First name</Label>
                  <Input />
                </InputWrapper>
                <InputWrapper>
                  <Label>First name</Label>
                  <Input />
                </InputWrapper>
                <InputWrapper>
                  <Label>First name</Label>
                  <Input />
                </InputWrapper>
                <InputWrapper>
                  <Label>First name</Label>
                  <Input />
                </InputWrapper>
              </Form>
              <ChangePassword>
                <span>Password:</span>
                <span onClick={() => setIsChange(true)}>Change password</span>
              </ChangePassword>
              <Button>EDIT</Button>
            </>
          ) : (
            <>
              <Back onClick={() => setIsChange(false)}>Back</Back>
              <Form>
                <InputWrapper>
                  <Label>First name</Label>
                  <Input />
                </InputWrapper>
                <InputWrapper>
                  <Label>First name</Label>
                  <Input />
                </InputWrapper>
                <InputWrapper>
                  <Label>First name</Label>
                  <Input />
                </InputWrapper>
              </Form>
              <ChangeButton>save changes</ChangeButton>
            </>
          )
        ) : (
          <>
            <Orders></Orders>
          </>
        )}
      </Content>
      <Image src={profile} />
    </Container>
  );
};
