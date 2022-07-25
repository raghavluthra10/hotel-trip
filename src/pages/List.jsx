import React from "react";
import If from "../components/If";
import HotelCard from "../components/HotelCard";
import { Box } from "@chakra-ui/react";

const List = () => {
  // fetch the List from API
  // Dont need to get it from redux since this data is not needed elsewhere

  const fetchedHotelList = [
    {
      src: "https://thumbs.dreamstime.com/b/hotel-lobby-luxury-staircases-fountain-39479289.jpg",
      title: "Hotel Title",
      address: "abc at this street, 122, delhi 1100223",
      descriptionArray: [
        {
          id: 1,
          desc: "Lorem ipsum dolor sit amet",
        },
        {
          id: 2,
          desc: "Consectetur adipiscing elit",
        },
        {
          id: 2,
          desc: "Integer molestie lorem at massa",
        },
      ],
    },
    {
      src: "https://thumbs.dreamstime.com/b/hotel-lobby-luxury-staircases-fountain-39479289.jpg",
      title: "Hotel Title",
      address: "abc at this street, 122, delhi 1100223",
      descriptionArray: [
        {
          id: 1,
          desc: "Lorem ipsum dolor sit amet",
        },
        {
          id: 2,
          desc: "Consectetur adipiscing elit",
        },
        {
          id: 2,
          desc: "Integer molestie lorem at massa",
        },
      ],
    },
    {
      src: "https://thumbs.dreamstime.com/b/hotel-lobby-luxury-staircases-fountain-39479289.jpg",
      title: "Hotel Title",
      address: "abc at this street, 122, delhi 1100223",
      descriptionArray: [
        {
          id: 1,
          desc: "Lorem ipsum dolor sit amet",
        },
        {
          id: 2,
          desc: "Consectetur adipiscing elit",
        },
        {
          id: 2,
          desc: "Integer molestie lorem at massa",
        },
      ],
    },
    {
      src: "https://thumbs.dreamstime.com/b/hotel-lobby-luxury-staircases-fountain-39479289.jpg",
      title: "Hotel Title",
      address: "abc at this street, 122, delhi 1100223",
      descriptionArray: [
        {
          id: 1,
          desc: "Lorem ipsum dolor sit amet",
        },
        {
          id: 2,
          desc: "Consectetur adipiscing elit",
        },
        {
          id: 2,
          desc: "Integer molestie lorem at massa",
        },
      ],
    },
  ];

  // this page will be used for 2 scenarios.
  // 1. for viewing all hotels
  // 2. for viewing single hotel owners list

  // if single hotel owner list is being viewed, a different API will be called and passed on.
  const fetchMyList = [];

  return (
    <Box className="pageLayout" px="7rem">
      <If condition={fetchedHotelList && fetchedHotelList.length > 0}>
        {fetchedHotelList.map((list, key) => (
          <HotelCard
            key={key}
            src={list.src}
            title={list.title}
            address={list.address}
            descriptionArray={list.descriptionArray}
            mb="64px"
          />
        ))}
      </If>
      <If condition={fetchMyList && fetchMyList.length > 0}>
        {fetchMyList.map((list, key) => (
          <HotelCard
            key={key}
            src={list.src}
            title={list.title}
            address={list.address}
            descriptionArray={list.descriptionArray}
            mb="64px"
          />
        ))}
      </If>
    </Box>
  );
};

export default List;
