import React, { useState } from 'react'
import Buttons from './Buttons';
import PriceCard from './PriceCard';
import { Inclusion, Price, Time, Zone } from '@/svgs/home';

type Props = {}

const priceCard = [
    {
      name: "Jeep", key: "jeep",
      data: [
        {
          image: <Price/>,
          name: "Price",
          title: "INR 7000-10000/ -Jeep",
          subtitle: "Maximum 6 person's and 2 childerns",
          desc: "Between - 5 to 12 years",
          subdesc: "allowed in ONE Jeep",
        },
        {
          image: <Zone />,
          name: "Zone",
          title: "Bijrani , Garjiya",
          subtitle: "Jhirna , Dhela",
          desc: "Durgadevi , Phato",
          subdesc: "Sitabani",
        },
        {
          image: <Time />,
          name: "Timing",
          title: "Morning 6:00 AM - 9.30 AM",
          subtitle: "Evening 3:00 PM - 6:00 PM",
          desc: "Safari Timing Varies",
          subdesc: "Season Changes",
        },
        {
          image: <Inclusion/>,
          name: "Inclusion",
          title: "Permission of CTR",
          subtitle: "Jeep",
          desc: "Driver",
          subdesc: "Permit and All Entries & Taxes.",
        },
      ],
    },
    {
        name: "Canter", key: "canter",
      data: [
        {
          image: <Price/>,
          name: "Pricing",
          title: "INR 3500-4500 / Person",
          subtitle: "ONE Canter has 16 Seats",
          // desc: "Safari Timing Varies",
          // subdesc: "Season Changes",
        },
        {
          image: <Zone/>,
          name: "Zone",
          title: "Peaceful Dhikala",
          // subtitle: "Jeep",
          // desc: "Driver",
          // subdesc: "Permit and All Entries & Taxes.",
        },
        {
          image: <Time/>,
          name: "Timing",
          title: "Morning 6:00 AM - 11.00 AM",
          subtitle: "Evening 11:15 AM - 5:00 PM",
          desc: "You have to reach 45 min before safari start.",
          // subdesc: "Permit and All Entries & Taxes.",
        },

      ],
    },
    {
      name: "Elephent", key: "elephent",
      data: [
        {
          image: <Price/>,
          name: "Price",
          title: "INR 3500 Indian (Only 4 Person Allow in one Elephant)",
          subtitle: "INR 5500 Foreigner (Only 4 Person Allow in one Elephant)",
          // desc: "Between - 5 to 12 years",
          // subdesc: "allowed in ONE Jeep",
        },
        {
          image: <Zone/>,
          name: "Zone",
          title: "Corbett landscape Zone",
          // subtitle: "Maximum 6 person's and 2 childerns",
          // desc: "Between - 5 to 12 years",
          // subdesc: "allowed in ONE Jeep",
        },
        {
          image: <Zone/>,
          name: "Timing",
          title: "Timings are Between 6 AM to 6 PM (Elephant safari is for only 1 hr)",
          subtitle: "You can choose only Morning or Evening slot at the time of booking",
          desc: "You can finalise your timings from the Elephant safari Coordinator after booking.",
          // subdesc: "allowed in ONE Jeep",
        },
      ],
    },
  ];

export default function PriceAndZone({}: Props) {

      const [tab, setTab] = useState("jeep");
  return (
    <div className="w-full bg-[#f2f2f2] mt-20 py-8">
          <h1 className="2xl:text-[26.79px] lg:text-[26.79px] sm:text-[47px] text-[20px] font-extrabold font-frinkRio text-center">
            Jim Corbett Saffari Price And Zones
          </h1>
          <div className="w-full mt-5">
            <Buttons tab={tab} tabs={priceCard} setTab={setTab}/>
          </div>
          <div className={`w-11/12  2xl:w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${priceCard.find((e)=>e.key === tab)?.data?.length} px-4 lg:px-20 mt-10 gap-5`}>
            {priceCard.find((e)=>e.key === tab)?.data?.map((e, index) => (
              <PriceCard
                key={index}
                name={e?.name}
                title={e?.title}
                subtitle={e?.subtitle || ""}
                desc={e?.desc || ""}
                subdesc={(e as any)?.subdesc || ""}
                image={e?.image}
              />
            ))}
          </div>
        </div>
  )
}