import { useAddItemToCartCallback } from "@features/shop/components/Snipcart";
import React from "react";

import { options } from "@features/shop/data/options";
import Carousel from "react-multi-carousel";
import "./_styles/_shop-items.scss";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "@widgets/carousel/carousel";

export function ShopItemList() {
  const addItemToCart = useAddItemToCartCallback(options);
  return (
    <section id="shop-items">
      <figure>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          transitionDuration={500}
          deviceType={"desktop"}
        >
          {options.map((option) => (
            <div className="pricing__card" key={option.id}>
              <figure className="pricing__card__image">
                {/*<img src={option.image} alt="" width={100} />*/}
                <figcaption className="pricing__card__title">
                  {option.name}
                </figcaption>
              </figure>
              <p className="pricing__card__price">${option.price}</p>
              <ul className="pricing__card__features">
                {option.features?.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button
                className="pricing__card__button"
                onClick={(e) => addItemToCart(option.id)}
              >
                Add to cart
              </button>
            </div>
          ))}
        </Carousel>
      </figure>
    </section>
  );
}
