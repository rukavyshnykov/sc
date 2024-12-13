import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import frame from "../assets/frame.jpg";
import look from "../assets/look.jpg";
import "swiper/swiper-bundle.css";
import styled from "styled-components";
import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import r4 from "../assets/r4.png";
import r5 from "../assets/r5.png";
import r6 from "../assets/r6.png";
import r7 from "../assets/r7.png";
import r8 from "../assets/r8.png";
import d1 from "../assets/d1.jpg";
import d2 from "../assets/d2.jpg";
import d3 from "../assets/d3.jpg";

const items = [
  {
    img: r1,
  },
  {
    img: r2,
  },
  {
    img: r3,
  },
  {
    img: r4,
  },
  {
    img: r5,
  },
  {
    img: r6,
  },
  {
    img: r7,
  },
  {
    img: r8,
  },
];

const Products = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 95px;
  gap: 33px 0;
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

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 0 60px;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`;

const Item = styled.div`
  width: calc(25% - 18px);
  aspect-ratio: 1 / 1;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const LookItem = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const Tab = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: white;
  padding: 2px 20px;
  width: fit-content;
  background-color: #754088;
  text-transform: uppercase;
  border-radius: 5px;
  margin-bottom: 8px;
`;

const ItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  align-self: end;

  & > span:nth-of-type(1) {
    font-size: 12px;
    line-height: 16px;
  }

  & > span:nth-of-type(2) {
    font-size: 18px;
    line-height: 25px;
    font-weight: 500;
  }
`;

const SliderImage = styled.img`
  width: 100%;
`;

const Look = styled.div`
  padding: 98px 0 159px;
  max-width: 783px;
  margin: 0 auto;
`;

const LookContent = styled.div`
  padding-top: 40px;
  display: flex;
  gap: 0 49px;
  align-items: center;
`;

const Hz = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;
`;

const Button = styled.button`
  box-shadow: 0px 0px 0px 3px #dccfe1;
  border: 1px solid #52106a;
  background-color: #fdfdfd;
  padding: 10px 63px;
  color: #52106a;
  border-radius: 10px;
  width: fit-content;
  margin: 60px auto;
  font-size: 18px;
  line-height: 25px;
`;

export const Home = () => {
  return (
    <>
      <Swiper slidesPerView={1} modules={[Pagination]} pagination>
        <SwiperSlide>
          <SliderImage src={frame} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage src={frame} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderImage src={frame} />
        </SwiperSlide>
      </Swiper>
      <Products>
        <Heading>NEW PRODUCTS</Heading>
        <Grid>
          {items.map((i) => (
            <Item key={i.img}>
              <Tab>new</Tab>
              <img src={i.img} />
              <ItemTitle>
                <span>SACRALITY</span>
                <span>HEXAGON LIGHT</span>
              </ItemTitle>
            </Item>
          ))}
        </Grid>
      </Products>
      <Look>
        <Heading>REVEAL THE LOOK</Heading>
        <LookContent>
          <img src={look} />
          <Swiper modules={[Pagination]} pagination>
            {items.map((i) => (
              <SwiperSlide key={i.img}>
                <LookItem>
                  <Tab>new</Tab>
                  <img src={i.img} />
                  <ItemTitle>
                    <span>SACRALITY</span>
                    <span>HEXAGON LIGHT</span>
                  </ItemTitle>
                </LookItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </LookContent>
      </Look>
      <Hz>
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={3}
          style={{ width: "100%" }}
        >
          <SwiperSlide>
            <img src={d1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={d3} />
          </SwiperSlide>
        </Swiper>
      </Hz>
      <Products>
        <Heading>BEST SELLERS</Heading>
        <Grid>
          {items.map((i) => (
            <Item key={i.img}>
              <Tab>new</Tab>
              <img src={i.img} />
              <ItemTitle>
                <span>SACRALITY</span>
                <span>HEXAGON LIGHT</span>
              </ItemTitle>
            </Item>
          ))}
        </Grid>
        <Button>ALL PRODUCT</Button>
      </Products>
    </>
  );
};
