import React, { useState } from 'react'
import Buttons from './Buttons';
import PriceCard from './PriceCard';

type Props = {}

const priceCard = [
    {
      name: "Jeep", key: "jeep",
      data: [
        {
          image: "/currency-1.png",
          name: "Price",
          title: "INR 7000-10000/ -Jeep",
          subtitle: "Maximum 6 person's and 2 childerns",
          desc: "Between - 5 to 12 years",
          subdesc: "allowed in ONE Jeep",
        },
        {
          image: "/currency-1.png",
          name: "Price",
          title: "INR 7000-10000/ -Jeep",
          subtitle: "Maximum 6 person's and 2 childerns",
          desc: "Between - 5 to 12 years",
          subdesc: "allowed in ONE Jeep",
        },
        {
          image: "/currency-1.png",
          name: "Price",
          title: "INR 7000-10000/ -Jeep",
          subtitle: "Maximum 6 person's and 2 childerns",
          desc: "Between - 5 to 12 years",
          subdesc: "allowed in ONE Jeep",
        },
        {
          image: "/currency-1.png",
          name: "Price",
          title: "INR 7000-10000/ -Jeep",
          subtitle: "Maximum 6 person's and 2 childerns",
          desc: "Between - 5 to 12 years",
          subdesc: "allowed in ONE Jeep",
        },
      ],
    },
    {
        name: "Canter", key: "canter",
      data: [
        {
          image: "/currency-1.png",
          name: "Price",
          title: "INR 7000-10000/ -Jeep",
          subtitle: "Maximum 6 person's and 2 childerns",
          desc: "Between - 5 to 12 years",
          subdesc: "allowed in ONE Jeep",
        },
        {
          image: "/currency-1.png",
          name: "Price",
          title: "INR 7000-10000/ -Jeep",
          subtitle: "Maximum 6 person's and 2 childerns",
          desc: "Between - 5 to 12 years",
          subdesc: "allowed in ONE Jeep",
        },
        {
          image: "/currency-1.png",
          name: "Price",
          title: "INR 7000-10000/ -Jeep",
          subtitle: "Maximum 6 person's and 2 childerns",
          desc: "Between - 5 to 12 years",
          subdesc: "allowed in ONE Jeep",
        },
        {
          image: "/currency-1.png",
          name: "Price",
          title: "INR 7000-10000/ -Jeep",
          subtitle: "Maximum 6 person's and 2 childerns",
          desc: "Between - 5 to 12 years",
          subdesc: "allowed in ONE Jeep",
        },
      ],
    },
    {
      name: "Elephent", key: "elephent",
      data: [
        {
          image: "/currency-1.png",
          name: "Price",
          title: "INR 7000-10000/ -Jeep",
          subtitle: "Maximum 6 person's and 2 childerns",
          desc: "Between - 5 to 12 years",
          subdesc: "allowed in ONE Jeep",
        },
        {
          image: "/currency-1.png",
          name: "Price",
          title: "INR 7000-10000/ -Jeep",
          subtitle: "Maximum 6 person's and 2 childerns",
          desc: "Between - 5 to 12 years",
          subdesc: "allowed in ONE Jeep",
        },
        {
          image: "/currency-1.png",
          name: "Price",
          title: "INR 7000-10000/ -Jeep",
          subtitle: "Maximum 6 person's and 2 childerns",
          desc: "Between - 5 to 12 years",
          subdesc: "allowed in ONE Jeep",
        },
        {
          image: "/currency-1.png",
          name: "Price",
          title: "INR 7000-10000/ -Jeep",
          subtitle: "Maximum 6 person's and 2 childerns",
          desc: "Between - 5 to 12 years",
          subdesc: "allowed in ONE Jeep",
        },
      ],
    },
  ];

export default function PriceAndZone({}: Props) {

      const [tab, setTab] = useState("jeep");
  return (
    <div className="w-full bg-[#f2f2f2] mt-20 py-8">
          <h1 className="text-2xl lg:text-5xl font-bold font-Gotham tracking-tighter text-center">
            Jim Corbett Saffari Price And Zones
          </h1>
          <div className="w-full mt-5">
            <Buttons tab={tab} tabs={priceCard} setTab={setTab}/>
          </div>
          <div className="w-11/12  2xl:w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 lg:px-20 mt-10 gap-5">
            {priceCard.find((e)=>e.key === tab)?.data?.map((e, index) => (
              <PriceCard
                key={index}
                name={e?.name}
                title={e?.title}
                subtitle={e?.subtitle}
                desc={e?.desc}
                subdesc={e?.subdesc}
                image={e?.image}
              />
            ))}
          </div>
        </div>
  )
}