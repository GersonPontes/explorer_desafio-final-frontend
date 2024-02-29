import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Main, DishGallery, DishList } from "./styles";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { DishCard } from "../../components/DishCard";

import { Swiper, SwiperSlide } from "swiper/react";

export function Home() {
  const [ dataMeals, setDataMeals ] = useState([]);
  const [ dataDesserts, setDataDesserts ] = useState([]);
  const [ dataDrinks, setDataDrinks ] = useState([]);

  const [search, setSearch] = useState("");

  const [ slidesPerViewMeals, setSlidesPerViewMeals ] = useState(1)
  const [ slidesPerViewDesserts, setSlidesPerViewDesserts ] = useState(1)
  const [ slidesPerViewDrinks, setSlidesPerViewDrinks ] = useState(1)

  const navigate = useNavigate(); 

  function handleDishDetails(id) {
    navigate(`/dish/${id}`);
  };

  useEffect(() => {
    async function fetchDishes() {
      const meals = await api.get(`/dishes?category=meal`);
      const desserts = await api.get(`/dishes?category=dessert`);
      const drinks = await api.get(`/dishes?category=drink`);
      setDataMeals(meals.data);
      setDataDesserts(desserts.data);
      setDataDrinks(drinks.data);
    };

    fetchDishes()   
  }, []);

  useEffect(() => {
    async function handleResize() {
      const meals = await api.get(`/dishes?category=meal&search=${search}`);
      const desserts = await api.get(`/dishes?category=dessert&search=${search}`);
      const drinks = await api.get(`/dishes?category=drink&search=${search}`);

      switch (true) {
        case ( meals.data.length >= 5):
          switch (true) {
            case ( window.innerWidth < 450):
              setSlidesPerViewMeals(1.2);
              break;
            case ( window.innerWidth < 580):
              setSlidesPerViewMeals(1.5);
              break;
            case ( window.innerWidth < 690):
              setSlidesPerViewMeals(2);
              break;      
            case ( window.innerWidth < 769):
              setSlidesPerViewMeals(2.5);
              break;
            case ( window.innerWidth < 850):
              setSlidesPerViewMeals(2);
              break;
            case ( window.innerWidth < 900):
              setSlidesPerViewMeals(2.2);
              break;
            case ( window.innerWidth < 1280):
              setSlidesPerViewMeals(2.5);
              break;
            case ( window.innerWidth < 1440):
              setSlidesPerViewMeals(3);
              break;
            case ( window.innerWidth < 1600):
              setSlidesPerViewMeals(3.5);
              break;
            case ( window.innerWidth < 1700):
              setSlidesPerViewMeals(4);
              break;
            case ( window.innerWidth >= 1700):
              setSlidesPerViewMeals(4.5);
              break;
          };
          break;
        case ( meals.data.length == 4):
          switch (true) {
            case ( window.innerWidth < 450):
              setSlidesPerViewMeals(1.2);
              break;
            case ( window.innerWidth < 580):
              setSlidesPerViewMeals(1.5);
              break;
            case ( window.innerWidth < 690):
              setSlidesPerViewMeals(2);
              break;      
            case ( window.innerWidth < 769):
              setSlidesPerViewMeals(2.5);
              break;
            case ( window.innerWidth < 850):
              setSlidesPerViewMeals(2);
              break;
            case ( window.innerWidth < 900):
              setSlidesPerViewMeals(2.2);
              break;
            case ( window.innerWidth < 1280):
              setSlidesPerViewMeals(2.5);
              break;
            case ( window.innerWidth < 1440):
              setSlidesPerViewMeals(3);
              break;
            case ( window.innerWidth < 1600):
              setSlidesPerViewMeals(3.5);
              break;
            case ( window.innerWidth >= 1600):
              setSlidesPerViewMeals(4);
              break;
          };         
          break;
        case ( meals.data.length == 3):
          switch (true) {
            case ( window.innerWidth < 450):
              setSlidesPerViewMeals(1.2);
              break;
            case ( window.innerWidth < 580):
              setSlidesPerViewMeals(1.5);
              break;
            case ( window.innerWidth < 690):
              setSlidesPerViewMeals(2);
              break;      
            case ( window.innerWidth < 769):
              setSlidesPerViewMeals(2.5);
              break;
            case ( window.innerWidth < 850):
              setSlidesPerViewMeals(2);
              break;
            case ( window.innerWidth < 900):
              setSlidesPerViewMeals(2.2);
              break;
            case ( window.innerWidth < 1280):
              setSlidesPerViewMeals(2.5);
              break;
            case ( window.innerWidth >= 1280):
              setSlidesPerViewMeals(3);
              break;
          };
          break;
        case ( meals.data.length == 2):
          switch (true) {
            case ( window.innerWidth < 450):
              setSlidesPerViewMeals(1.2);
              break;
            case ( window.innerWidth < 580):
              setSlidesPerViewMeals(1.5);
              break;
            case ( window.innerWidth < 690):
              setSlidesPerViewMeals(2);
              break;      
            case ( window.innerWidth >= 690):
              setSlidesPerViewMeals(2);
              break;
          };
          break;
        case ( meals.data.length == 1):
          setSlidesPerViewMeals(1);
          break;
        default:
          break;
      }  

      switch (true) {        
        case ( desserts.data.length >= 5):
          switch (true) {
            case ( window.innerWidth < 450):
              setSlidesPerViewDesserts(1.2);
              break;
            case ( window.innerWidth < 580):
              setSlidesPerViewDesserts(1.5);
              break;
            case ( window.innerWidth < 690):
              setSlidesPerViewDesserts(2);
              break;      
            case ( window.innerWidth < 769):
              setSlidesPerViewDesserts(2.5);
              break;
            case ( window.innerWidth < 850):
              setSlidesPerViewDesserts(2);
              break;
            case ( window.innerWidth < 900):
              setSlidesPerViewDesserts(2.2);
              break;
            case ( window.innerWidth < 1280):
              setSlidesPerViewDesserts(2.5);
              break;
            case ( window.innerWidth < 1440):
              setSlidesPerViewDesserts(3);
              break;
            case ( window.innerWidth < 1600):
              setSlidesPerViewDesserts(3.5);
              break;
            case ( window.innerWidth < 1700):
              setSlidesPerViewDesserts(4);
              break;
            case ( window.innerWidth >= 1700):
              setSlidesPerViewDesserts(4.5);
              break;
          };
          break;
        case ( desserts.data.length == 4):
          switch (true) {
            case ( window.innerWidth < 450):
              setSlidesPerViewDesserts(1.2);
              break;
            case ( window.innerWidth < 580):
              setSlidesPerViewDesserts(1.5);
              break;
            case ( window.innerWidth < 690):
              setSlidesPerViewDesserts(2);
              break;      
            case ( window.innerWidth < 769):
              setSlidesPerViewDesserts(2.5);
              break;
            case ( window.innerWidth < 850):
              setSlidesPerViewDesserts(2);
              break;
            case ( window.innerWidth < 900):
              setSlidesPerViewDesserts(2.2);
              break;
            case ( window.innerWidth < 1280):
              setSlidesPerViewDesserts(2.5);
              break;
            case ( window.innerWidth < 1440):
              setSlidesPerViewDesserts(3);
              break;
            case ( window.innerWidth < 1600):
              setSlidesPerViewDesserts(3.5);
              break;
            case ( window.innerWidth >= 1600):
              setSlidesPerViewDesserts(4);
              break;
          };         
          break;
        case ( desserts.data.length == 3):
          switch (true) {
            case ( window.innerWidth < 450):
              setSlidesPerViewDesserts(1.2);
              break;
            case ( window.innerWidth < 580):
              setSlidesPerViewDesserts(1.5);
              break;
            case ( window.innerWidth < 690):
              setSlidesPerViewDesserts(2);
              break;      
            case ( window.innerWidth < 769):
              setSlidesPerViewDesserts(2.5);
              break;
            case ( window.innerWidth < 850):
              setSlidesPerViewDesserts(2);
              break;
            case ( window.innerWidth < 900):
              setSlidesPerViewDesserts(2.2);
              break;
            case ( window.innerWidth < 1280):
              setSlidesPerViewDesserts(2.5);
              break;
            case ( window.innerWidth >= 1280):
              setSlidesPerViewDesserts(3);
              break;
          };
          break;
        case ( desserts.data.length == 2):
          switch (true) {
            case ( window.innerWidth < 450):
              setSlidesPerViewDesserts(1.2);
              break;
            case ( window.innerWidth < 580):
              setSlidesPerViewDesserts(1.5);
              break;
            case ( window.innerWidth < 690):
              setSlidesPerViewDesserts(2);
              break;      
            case ( window.innerWidth >= 690):
              setSlidesPerViewDesserts(2);
              break;
          };
          break;
        case ( desserts.data.length == 1):
          setSlidesPerViewDesserts(1);
          break;
        default:
          break;
      } 
      
      switch (true) {
        case ( drinks.data.length >= 5):
          switch (true) {
            case ( window.innerWidth < 450):
              setSlidesPerViewDrinks(1.2);
              break;
            case ( window.innerWidth < 580):
              setSlidesPerViewDrinks(1.5);
              break;
            case ( window.innerWidth < 690):
              setSlidesPerViewDrinks(2);
              break;      
            case ( window.innerWidth < 769):
              setSlidesPerViewDrinks(2.5);
              break;
            case ( window.innerWidth < 850):
              setSlidesPerViewDrinks(2);
              break;
            case ( window.innerWidth < 900):
              setSlidesPerViewDrinks(2.2);
              break;
            case ( window.innerWidth < 1280):
              setSlidesPerViewDrinks(2.5);
              break;
            case ( window.innerWidth < 1440):
              setSlidesPerViewDrinks(3);
              break;
            case ( window.innerWidth < 1600):
              setSlidesPerViewDrinks(3.5);
              break;
            case ( window.innerWidth < 1700):
              setSlidesPerViewDrinks(4);
              break;
            case ( window.innerWidth >= 1700):
              setSlidesPerViewDrinks(4.5);
              break;
          };
          break;
        case ( drinks.data.length == 4):
          switch (true) {
            case ( window.innerWidth < 450):
              setSlidesPerViewDrinks(1.2);
              break;
            case ( window.innerWidth < 580):
              setSlidesPerViewDrinks(1.5);
              break;
            case ( window.innerWidth < 690):
              setSlidesPerViewDrinks(2);
              break;      
            case ( window.innerWidth < 769):
              setSlidesPerViewDrinks(2.5);
              break;
            case ( window.innerWidth < 850):
              setSlidesPerViewDrinks(2);
              break;
            case ( window.innerWidth < 900):
              setSlidesPerViewDrinks(2.2);
              break;
            case ( window.innerWidth < 1280):
              setSlidesPerViewDrinks(2.5);
              break;
            case ( window.innerWidth < 1440):
              setSlidesPerViewDrinks(3);
              break;
            case ( window.innerWidth < 1600):
              setSlidesPerViewDrinks(3.5);
              break;
            case ( window.innerWidth >= 1600):
              setSlidesPerViewDrinks(4);
              break;
          };         
          break;
        case ( drinks.data.length == 3):
          switch (true) {
            case ( window.innerWidth < 450):
              setSlidesPerViewDrinks(1.2);
              break;
            case ( window.innerWidth < 580):
              setSlidesPerViewDrinks(1.5);
              break;
            case ( window.innerWidth < 690):
              setSlidesPerViewDrinks(2);
              break;      
            case ( window.innerWidth < 769):
              setSlidesPerViewDrinks(2.5);
              break;
            case ( window.innerWidth < 850):
              setSlidesPerViewDrinks(2);
              break;
            case ( window.innerWidth < 900):
              setSlidesPerViewDrinks(2.2);
              break;
            case ( window.innerWidth < 1280):
              setSlidesPerViewDrinks(2.5);
              break;
            case ( window.innerWidth >= 1280):
              setSlidesPerViewDrinks(3);
              break;
          };
          break;
        case ( drinks.data.length == 2):
          switch (true) {
            case ( window.innerWidth < 450):
              setSlidesPerViewDrinks(1.2);
              break;
            case ( window.innerWidth < 580):
              setSlidesPerViewDrinks(1.5);
              break;
            case ( window.innerWidth < 690):
              setSlidesPerViewDrinks(2);
              break;      
            case ( window.innerWidth >= 690):
              setSlidesPerViewDrinks(2);
              break;
          };
          break;
        case ( drinks.data.length == 1):
          setSlidesPerViewDrinks(1);
          break;
        default:
          break;
      }      
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
    };
  }, [search]);

  useEffect(() => {
    async function fetchDishes() {
      const meals = await api.get(`/dishes?category=meal&search=${search}`);
      const desserts = await api.get(`/dishes?category=dessert&search=${search}`);
      const drinks = await api.get(`/dishes?category=drink&search=${search}`);
      setDataMeals(meals.data);
      setDataDesserts(desserts.data);
      setDataDrinks(drinks.data);
    };
    
    fetchDishes()
  }, [search]);

  return (
    <Container>
      <Header 
        onChange={e => setSearch(e.target.value)}
      />
      <Main>
        <Banner></Banner>

        <DishGallery>
          <h1>Refeições</h1>
          <DishList>
            <Swiper
              navigation 
              spaceBetween={10}
              slidesPerView={slidesPerViewMeals}
            >
              {
                dataMeals.map((dish, index) => (
                  <SwiperSlide key={String(index)} >
                    <DishCard                        
                      data={dish} 
                      onClick={() => handleDishDetails(dish.id)}                 
                    />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </DishList> 
        </DishGallery>

        <DishGallery>
          <h1>Sobremesas</h1>
          <DishList>
            <Swiper
              navigation   
              spaceBetween={10}
              slidesPerView={slidesPerViewDesserts}           
            >
              {
                dataDesserts.map((dish, index) => (
                  <SwiperSlide key={String(index)} >
                    <DishCard                        
                      data={dish} 
                      onClick={() => handleDishDetails(dish.id)}                 
                    />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </DishList> 
        </DishGallery>

        <DishGallery>
          <h1>Bebidas</h1>
          <DishList>
            <Swiper
              navigation   
              spaceBetween={10}
              slidesPerView={slidesPerViewDrinks}                       
            >
            {
              dataDrinks.map((dish, index) => (
                <SwiperSlide key={String(index)} >
                  <DishCard 
                    data={dish}
                    onClick={() => handleDishDetails(dish.id)}  
                  />
                </SwiperSlide>
              ))
            }
            </Swiper>
          </DishList> 
        </DishGallery>

      </Main>
      <Footer></Footer>
    </Container>
  );
};