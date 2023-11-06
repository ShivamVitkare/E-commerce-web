import React,{useState} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { Button } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Error from "../Error/Error";
import {
  filterProducts,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} from "../../features/slices/productsSlice";

import logo from "../../assets/images/logo.png";
import Cart from "../Cart/Cart";
import { logout } from "../../features/slices/authSlice";
import { Avatar } from "@material-tailwind/react";
import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const user = useSelector((state) => state.user.user);
  const { name, image } = user;
  

  return (
      <>
  
  <div className="flex justify-around items-center">
        <Link to="/">
        <div>
          <img className="h-28 w-full" src={logo} alt="store"></img>
        </div>
        </Link>
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center">
            
            <p className=" font-inter text-base font-medium tracking-normal leading-none text-center mr-2">
             
            </p>
          </div>
          <Link to='/cart'>
       
          <div
            className="flex flex-row items-center cursor-pointer "
           
          >
           
              <span className="rounded-full relative left-4 bottom-3  bg-gray-300 px-2 font-inter text-sm mr-1">
                {totalAmount}
              </span>
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#000"
                className="w-6 h-6 absolute"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
           

            <p className=" font-inter text-base font-medium tracking-normal leading-none text-center ">
              
            </p>
           
            
          </div>
          
          </Link>
          <div className="flex flex-row items-center cursor-pointer pl-4">
            {image && (
              <Avatar
                src={image}
                alt="avatar"
                size="sm"
                className="mr-2"
              ></Avatar>
            )}
           
          </div>
        </div>
      </div>
      <div className="bg-black p-4 w-full flex items-center justify-center mx-auto">
       
       
      </div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-black text-center text-5xl  font-bold">
            {type}
          </h1>
          
       
          <div className="grid grid-cols-3 justify-items-center py-8 gap-12 ">
            {products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index} className="">
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    ></ProductCard>
                  </div>
                );
              })}
          </div>
       
      </div>
    </div>
    </>
  );
};

export default FilteredProducts;
