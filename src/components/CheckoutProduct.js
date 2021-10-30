import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  quantity,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
      quantity: 1,
    };

    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>

        <p className="text-xs text-gray-500 italic">
          {`Qty: ${quantity} |`} <Currency quantity={price} currency="GBP" />
        </p>

        <div className="">
          <Currency quantity={price * quantity} currency="GBP" />
        </div>

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 justify-items-end">
        <button onClick={addItemToBasket} className="button">
          Add To Basket
        </button>
        <button onClick={removeItemFromBasket} className="button">
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
