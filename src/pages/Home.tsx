import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import frame from "../assets/frame.jpg";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import r4 from "../assets/r4.png";
import r5 from "../assets/r5.png";
import r6 from "../assets/r6.png";
import r7 from "../assets/r7.png";
import r8 from "../assets/r8.png";

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
`;

export const Home = () => {
  return (
    <>
      <Swiper slidesPerView={1} modules={[Pagination]}>
        <SwiperSlide>
          <img src={frame} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={frame} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={frame} />
        </SwiperSlide>
      </Swiper>
      <Products>
        <Heading>NEW PRODUCTS</Heading>
        <Grid>
          {items.map((i) => (
            <Item>
              <img src={i.img} />
            </Item>
          ))}
        </Grid>
      </Products>
    </>
  );
};
