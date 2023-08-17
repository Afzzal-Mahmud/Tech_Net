import { Button } from '@/components/ui/button';
import { IProduct } from '@/types/globalTypes';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();

  //! Temporary code, should be replaced with redux
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    fetch('../../public/data.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const product = data?.find((item) => item._id === Number(id));

  //! Temporary code ends here

  return (
    <>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto items-center border-b border-gray-300">
  <div className="img_flex__767 w-full md:w-[50%]">
    <img className="img_fixed-width__767 w-full" src={product?.image} alt="" />
    <h1 className="text-3xl font-semibold">{product?.name}</h1>
  </div>
  <div className="img_flex__767 w-full md:w-[50%] space-y-3 md:pl-10 mt-5 md:mt-0">
    <p className="text-xl">Rating: {product?.rating}</p>
    <ul className="text-alignment__767 space-y-1 text-lg">
      {product?.features?.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
    <Button className="mt-5">Add to cart</Button>
  </div>
</div>
    </>
  );
}
