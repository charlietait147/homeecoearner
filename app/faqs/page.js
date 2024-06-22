"use client";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import parse from "html-react-parser";
import AddIcon from "@mui/icons-material/Add";
import TalkAdvisor from "../component/TalkAdvisor";

const Page = () => {
  const HomeEcoEarnerPowerSystem = [
    {
      title: "What is it?",
      content: `
        <p>
        • Home EcoEarner Power System is a home power generation system designed
          to provide your home with the average UK electricity use of 10.3 kWh
          / day.
        </p>
      `,
    },
    {
      title: "What does it do?",
      content: `
        <ul>
          <p>
          • Enables you to generate 10.3 kWh / day with no electricity bills
            to pay.
          </p>
          <p>
          • 10.3 kWh / day provides all the power used by the average UK
            home for daily living needs.
          </p>
        </ul>
      `,
    },
    {
      title: "What’s in it for me?",
      content: `
        <ul>
          <p>
          • You can own your own electricity power generation system, right
            there in your own home.
          </p>
          <p>• No more electricity bills to pay.</p>
          <p>• Freedom from future electricity price increases</p>
          <p>• Spread the cost out over 8 years</p>
          <p>
          • Instead of dead money paying for your electricity – use that
            money to pay off your own electricity generation system
          </p>
          <p>• An asset you can own</p>
          <p>• No extra cash outlay</p>
          <p>
          • You get to swap your average monthly electricity bill for
            monthly equipment costs
          </p>
          <p>• Subject to credit approval</p>
        </ul>
      `,
    },
    {
      title: "Will it fit my home?",
      content: `
        <ul>
          <p>
          • We will need to assess the energy resource available at your home.
          </p>
          <p>• Factors affecting the power able to be generated by the system include solar resource at the site, sun hours, aspect of the land (does it face north, south, east or west?), nature of the roof (flat, peaked, does it face north, south,east or west?), the aspect and shape of the building, wind resource at the site, the impact of adjacent structures and trees, etc.</p>
          <p>• Our experienced design team will assess the characteristics of your home and design the system to optimise the power available based on the features specific to your home.</p>
        </ul>
      `,
    },
    {
      title: "Do I need planning permission?",
      content: `
        <ul>
          <p>
          • In most cases the answer is no, when considering rooftop solar.
          </p>
          <p>• Listed buildings and those in a conservation area may require planning permission</p>
        </ul>
      `,
    },
    {
      title: "Are there any tax incentives?",
      content: `
        <ul>
          <p>
          • For domestic dwellings, the main government incentives are provided by way of grants or subsidies. These may vary depending on your circumstances and location
          </p>
          <p>• Where you operate a small business from your home, there may be some tax benefits available. In the March 2023 budget, the government amended the rules so that businesses can claim a 100% first year capital allowance on the cost of purchasing and installing solar panels, meaning part of the cost of the installation may be able to be deducted from taxable profit in the first year.</p>
        </ul>
      `,
    },
    {
      title: "What if I am a tenant and only have a short-term lease?",
      content: `
        <ul>
          <p>
          • It should still make sense to install the system.
          </p>
          <p>• Most landlords are looking to improve their Energy Performance Certificate ratings and will need to eventually meet the MEES rules. So, they should be supportive of the installation.</p>
          <p>• We can speak with your landlord if desired.</p>
        </ul>
      `,
    },
    {
      title:
        "Can I use Home EcoEarner Power System in my small business office?",
      content: `
        <ul>
          <p>
          • Yes
          </p>
          <p>• Home EcoEarner has been designed for both home and business use in small offices, shops, workshops, storage facilities, etc.</p>
        </ul>
      `,
    },
    {
      title: "Will it affect my credit rating?",
      content: `
        <ul>
          <p>
          • Each person’s credit rating is personal to their circumstances.
          </p>
          <p>• The answer to this question therefore depends on personal circumstances.</p>
          <p>• Absent any specific issues with your credit rating, on balance, the answer should be “no”.</p>
          <p>• Under the Home EcoEarner Power System offer, you are just swapping payments you now make for your electricity bills for the cost of purchasing an asset.</p>
          <p>• And you will no longer be exposed to electricity price increases.</p>
          <p>• There should be no negative impact on your credit rating.</p>
          <p>• It may be possible that it might improve your credit rating.</p>
        </ul>
      `,
    },
    {
      title:
        "Can Home EcoEarner help meet the Earnings Performance Certificate Certificate (EPC) or Minimum Energy Efficiency Standard (MEES) requirements?",
      content: `
        <ul>
          <p>
          • Yes.
          </p>
        </ul>
      `,
    },
    {
      title: "Can I still charge my electric vehicle at home?",
      content: `
        <ul>
          <p>
          • Yes.
          </p>
          <p>
          • You can still charge your electric vehicle at home.
          </p>
          <p>
          • You can charge your EV at any time night or day and where it is charged from your Home EcoEarner Power System, there is no cost.
          </p>
          <p>
          • Even if you go over the average UK daily power consumption rate of 10.3 kWh / day, and tap into the backup grid power, that should still provide cost savings for you.
          </p>
          <p>
          • It should be significantly cheaper than charging it under your current electricity cost.
          </p>
          <p>
          • It should be significantly cheaper than charging it at motorway charging stations.
          </p>
        </ul>
      `,
    },
  ];
  const HomeEcoearnerBoosterSystem = [
    {
      title: "What is it?",
      content: `
      <p>
      • Home EcoEarner Power Booster is a proprietary energy generation system designed to enable a significant increase in power output from a domestic power generation system.
      </p>
      <p>
      • Home EcoEarner Power Booster is intended to enable homeowners to convert a cost into a meaningful income.
      </p>
      <p>
      • Home EcoEarner Power Booster will only be offered as an upgrade to the Home EcoEarner Power System.
      </p>
      <p>
      • Multiple new green technologies are being developed.
      </p>
      <p>
      • Some are patented already and are now moving to the product design stage.
      </p>
      <p>
      • Some are in the Research and Development phase or early product development stage.
      </p>
      <p>
      • Once installed, you will have a solar, battery, inverter, controller, and wind turbine system for your home + our Power Booster.
      </p>
      <p>
      • And you will still have grid power access as a backup.
      </p>
      <p>
      • You will become a seller of power to the grid rather than a buyer of power from the grid, so you will likely never need grid power again. But we keep it there as a safety measure to provide you with the comfort of knowing that you have that backup should you need it.
      </p>
    `,
    },
    {
      title: "What does it do?",
      content: `
      <p>
      • Home EcoEarner Power Booster is designed to enable a significant increase in power output from a domestic power generation system such as to enable to the homeowner to generate enough excess power as to convert a cost into a meaningful income.
      </p>
    `,
    },
    {
      title: "What’s in it for me?",
      content: `
      <p>
      • Cost-Free Upgrade
      </p>
      <p>
      • Enables you to convert your home electricity from a cost into an income
      </p>
      <p>
      • If you choose our Home EcoEarner Power System now:
      </p>
      <p>
      • We will install our Home EcoEarner Power Booster on release
      </p>
      <p>
      • Current target release date 24 months
      </p>
      <p>
      • At no cost to you
      </p>
      <p>
      • We then buy excess electricity from you
      </p>
      <p>
      • No more monthly bills
      </p>
      <p>
      • Nothing more to pay
      </p>
      <p>
      • Instead of you paying us, we will be paying you.
      </p>
    `,
    },
    {
      title: "How long before Home EcoEarner Power Booster is available?",
      content: `
      <p>
      • Current target date for release is Q1 2026.
      </p>
      <p>
      • That will depend on the rate of progress of the Research and Development and product development in the intervening period.
      </p>
    `,
    },
    {
      title: "Do I need planning permission?",
      content: `
      <p>
      • There should be no extra planning permission needed for Home EcoEarner Power Booster.
      </p>
      <p>
      • That will depend on the rate of progress of the Research and Development and product development in the intervening period.
      </p>
    `,
    },
    {
      title: "What is a PPA?",
      content: `
      <p>
      • A Power Purchase Agreement (PPA) is an agreement under which we will purchase the excess power from you.
      </p>
      <p>
      • The PPA you enter into with us will be exclusive to us.
      </p>
      <p>
      • Entry into an exclusive PPA with us is needed as we are not charging you anything for the supply and installation of our Home EcoEarner Power Booster equipment.
      </p>
      <p>
      • We buy the excess power from you.
      </p>
      <p>
      •We then sell that excess power to electricity distributors. That is how we recover that cost.
      </p>
    `,
    },
    {
      title: "How do I earn income from it?",
      content: `
      <p>
      • Under the PPA, we pay you for the excess electricity that your Home EcoEarner Power Booster system produces.
      </p>
      <p>
      • Payments will be made monthly based on the amount of excess electricity your Home EcoEarner Power Booster system produces.
      </p>
      <p>
      • Exactly how much your Home EcoEarner Power Booster system produces may be affected by the solar and wind resources at your site.
      </p>
      <p>
      • We will give you an estimate of the likely range of power output at your site and potential income earnings as part of the upgrade at the time.
      </p>
    `,
    },
    {
      title: "Can I still charge my electric vehicle at home?",
      content: `
      <p>
      • Yes.
      </p>
      <p>
      • You can still charge your electric vehicle at home.
      </p>
      <p>
      • Home EcoEarner Power Booster will be designed to provide all the power you need to charge your EV.
      </p>
      <p>
      • We intend to offer a heavily discounted rate for any EV charging that takes you up over the average UK daily power usage rate of 10.3 kWh / day.
      </p>
      <p>
      • We may offer an even lower rate for any night-time EV charging.
      </p>
      <p>
      • Even if you go over the average UK daily power consumption rate of 10.3 kWh / day, and tap into the excess power produced by Home EcoEarner Power Booster, that should still provide cost savings for you.
      </p>
      <p>
      • It should be significantly cheaper than charging it under your current electricity arrangements.
      </p>
      <p>
      • It should be significantly cheaper than charging it at motorway charging stations.
      </p>
    `,
    },
  ];

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const titleStyle = {
    backgroundColor: "#F5F5F5",
    color: "#005C15", // Change this to your desired background color
    padding: "12px",
    fontWeight: "600",
    borderRadius: "5px",
    fontSize: "20px",
  };
  const [expandedKeys, setExpandedKeys] = useState(['0']); // Initialize with the first item open

  const handleAccordionChange = (key) => {
    setExpandedKeys((prevKeys) => 
      prevKeys.includes(key)
        ? prevKeys.filter(k => k !== key)
        : [...prevKeys, key]
    );
  };

  return (
    <>
      <section className="relative bg-green min-h-[396px] flex justify-center">
        <div className=" container mx-auto flex flex-col justify-center items-center">
          <h1 className="text-[25px] md:text-[60px] text-center text-white font-bold block">
            FAQs
          </h1>
          <h2 className="w-[90%] md:w-1/2 text-base text-center font-semibold text-white mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia est
            magni, unde ipsam illo corrupti, minus eveniet dolorum obcaecati,
            tempora hic! Laborum eveniet voluptas labore. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit
          </h2>
        </div>
      </section>

      <section className=" container mx-auto flex flex-col p-2 md:p-10">
        <div className="max-w-[100%]   mx-auto">
          <h1 className="font-bold text-center text-green text-[20px] md:text-[50px] py-4">
            Home EcoEarner Power System
          </h1>
        </div>
        <div className="max-w-[100%]  mx-auto">
          <Accordion
                defaultExpandedKeys={expandedKeys}
                onChange={handleAccordionChange}
            // defaultExpandedKeys={['1']}

            // {HomeEcoEarnerPowerSystem.map((_, index) =>
            //   index.toString()
            // )}
            variant="splitted"
            className="accordion"
          >
            {HomeEcoEarnerPowerSystem.map((item, index) => (
              <AccordionItem
                key={index.toString()} // Use a unique key based on your data structure
                indicator={<AddIcon />}
                aria-label={`Accordion ${index + 1}`}
                title={<div style={titleStyle}>{item.title}</div>}
              >
                <span style={{ color: "#525C60", fontSize: "19px" }}>
                  {parse(item.content)}
                </span>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      
      <section className=" container mx-auto flex flex-col p-2 md:p-10">
        <div className="max-w-[100%]   mx-auto">
          <h1 className="font-bold text-green text-[20px] md:text-[50px] py-4 text-center">
          Home EcoEarner Booster System
          </h1>
        </div>
        <div className="max-w-[100%]  ">
          <Accordion
            // defaultExpandedKeys={HomeEcoearnerBoosterSystem.map((_, index) =>
            //   index.toString()
            // )}
            defaultExpandedKeys={expandedKeys}
            onChange={handleAccordionChange}
            variant="splitted"
            className="accordion"
          >
            {HomeEcoearnerBoosterSystem.map((item, index) => (
              <AccordionItem
                key={index.toString()} // Use a unique key based on your data structure
                indicator={<AddIcon />}
                aria-label={`Accordion ${index + 1}`}
                title={<div style={titleStyle}>{item.title}</div>}
                
              >
                <span style={{ color: "#525C60", fontSize: "19px" }}>
                  {parse(item.content)}
                </span>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>


    <TalkAdvisor />
     
    </>
  );
};

export default Page;

