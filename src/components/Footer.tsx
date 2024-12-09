import styled from "styled-components";
import { Facebook } from "../icons/Facebook";
import { Instagram } from "../icons/Instagram";

const FooterWrapper = styled.footer``;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 15px 43px;
  gap: 40px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 67px 32px 47px;
  }
`;

const BottomBar = styled.div`
  padding: 15px;
  text-align: left;
  color: #939393;
  font-size: 10px;
  line-height: 19px;
  font-weight: 500;
  text-transform: uppercase;
  background-color: #f9f9f9;

  @media (min-width: 768px) {
    padding: 20px 30px;
  }

  @media (min-width: 1366px) {
    padding: 20px 60px;
  }
`;

const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px 0;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;

    &:nth-of-type(2) {
      padding-left: 100px;
    }
  }

  @media (min-width: 1366px) {
    flex-direction: row;

    &:nth-of-type(1) > div:nth-of-type(2) {
      padding-left: 80px;
    }

    &:nth-of-type(2) {
      padding-left: 0;
      flex-shrink: 0;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px 0;

  @media (min-width: 1366px) {
    width: 50%;
    flex-shrink: 0;
  }
`;

const ColHead = styled.span`
  color: #420d55;
  font-size: 13px;
  line-height: 21px;
  letter-spacing: 2.6px;
  font-weight: 500;
  text-transform: uppercase;
`;

const ColContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  font-size: 14px;
  line-height: 23px;
  font-weight: 400;
  color: #939393;
`;

const ColSubContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px 0;
  color: #939393;
  font-size: 14px;
  line-height: 23px;
  font-weight: 400;
`;

const Icons = styled.div`
  display: flex;
  gap: 0 10px;
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 19px;
  color: #939393;
  padding: 12px 20px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;

  &::placeholder {
    color: #939393;
  }
`;

const Button = styled.button`
  padding: 14px;
  background-color: #52106a;
  font-size: 12px;
  font-weight: 500;
  line-height: 16.39px;
  letter-spacing: 2.4000000953674316px;
  text-align: center;
  color: white;
  width: 143px;
  text-transform: uppercase;
  border-radius: 10px;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Content>
        <FooterCol>
          <Column>
            <ColHead>About Jeweloire</ColHead>
            <ColContent>
              <ColSubContent>
                <span>
                  Jeweloire is all about revealing your hidden side. What do we
                  mean by 'hidden side'? We mean the buried treasure. The gold
                  in the dark. The true you. Because the true you is truly
                  beautiful, and we want to help you show it.
                </span>
                <span>So reveal your hidden side, with Jeweloire</span>
              </ColSubContent>
              <Icons>
                <Facebook />
                <Instagram />
              </Icons>
            </ColContent>
          </Column>
          <Column>
            <ColHead>Customer Service</ColHead>
            <ColContent>
              <span>FAQ</span>
              <span>Delivery</span>
              <span>Exchanges & Returns</span>
              <span>Contact Us</span>
              <span>Terms of Service</span>
            </ColContent>
          </Column>
        </FooterCol>
        <FooterCol>
          <Column>
            <ColHead>Other Info</ColHead>
            <ColContent>
              <span>Copyright & Trademark</span>
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
              <span>Cookie Policy</span>
            </ColContent>
          </Column>
          <Column>
            <ColHead>Newsletter</ColHead>
            <ColSubContent>
              <span>
                Subscribe to receive updates, access to exclusive deals, and
                more.
              </span>
              <Input type="text" placeholder="Enter your email address" />
              <Button>Subscribe</Button>
            </ColSubContent>
          </Column>
        </FooterCol>
      </Content>
      <BottomBar>© 2022. Jeweloire Inc. All rights reserved</BottomBar>
    </FooterWrapper>
  );
};
