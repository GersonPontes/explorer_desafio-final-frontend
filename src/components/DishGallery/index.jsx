import { Container, DishList } from "./styles";
import { DishCard } from "../DishCard";

import { Swiper, SwiperSlide } from "swiper/react"

export function DishGallery({ name, data }) {
  return (
    <Container>
      <h1>{name}</h1>
      <DishList>
        <Swiper
          slidesPerView={2}
          navigation
          spaceBetween={28}
          loop
        >
          {
            data.map( dish => 
              <SwiperSlide key={dish.id}>
                <DishCard data={dish} />
              </SwiperSlide>
            )
          }
        </Swiper>
      </DishList>
    </Container>
  );
};