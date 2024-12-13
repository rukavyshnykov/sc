import styled from "styled-components";
import { Chevron } from "../icons/Chevron";
import { useState } from "react";

export const FAQ = () => {
  const Container = styled.div`
    max-width: 648px;
    margin: 0 auto;
    padding: 68px 0;
  `;

  const Heading = styled.span`
    color: #52106a;
    font-size: 26px;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 0.005em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    text-align: center;
    width: 100%;
    display: block;
  `;

  const Caption = styled.span`
    display: block;
    font-size: 14px;
    line-height: 24px;
    margin: 16px 0 25px;
  `;
  return (
    <Container>
      <Heading>FAQ</Heading>
      <Caption>
        Check most frequently asked questions here, if you still need help then
        please contact us at info@jeweloire.com
      </Caption>
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
    </Container>
  );
};

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const DdWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px 12px;
    flex-wrap: wrap;
  `;

  const DdTitle = styled.span`
    font-size: 26px;
    line-height: 36px;
    color: #323232;
    cursor: pointer;
  `;

  const DdContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 37px;
    height: ${isOpen ? "auto" : "0"};
    overflow: hidden;
  `;

  const Icon = styled.div`
    width: 25px;
    transform: ${!isOpen && "rotate(-90deg)"};
  `;

  return (
    <DdWrapper>
      <Icon>
        <Chevron />
      </Icon>
      <DdTitle onClick={() => setIsOpen(!isOpen)}>Orders</DdTitle>
      <DdContent>
        <Accordion />
        <Accordion />
      </DdContent>
    </DdWrapper>
  );
};

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const AccWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px 12px;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  const AccTitle = styled.span`
    font-size: 26px;
    line-height: 36px;
    color: #323232;
    cursor: pointer;
  `;

  const AccContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: ${isOpen ? "40px" : "0"};
    height: ${isOpen ? "auto" : "0"};
    overflow: hidden;
  `;

  const Icon = styled.div`
    font-size: 26px;
    color: #420d55;
  `;

  return (
    <AccWrapper>
      <AccTitle onClick={() => setIsOpen(!isOpen)}>
        Can I amend or cancel my order?
      </AccTitle>
      <Icon>{isOpen ? "-" : "+"}</Icon>
      <AccContent>
        <span>
          If you wish to cancel or make a change to your order, please email us
          on info@jeweloire.com within 1 hour of placing the order. We will
          cancel or update your order so long as it has not already been
          shipped. Items that have already been shipped cannot be cancelled but
          can be returned for a refund within 30 days. Please see our ‘Returns’
          Section for further details.
        </span>
      </AccContent>
    </AccWrapper>
  );
};
