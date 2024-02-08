/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MdFavorite } from "react-icons/md";
import bookImg from "../src/assets/book.png";
import starIcon from "../src/assets/star.svg";
import HeroSection from "./HeroSection";

export default function BookList() {
  /// All book list data here ///
  const bookData = [
    {
      id: 1,
      name: "Python and Jquery",
      writer: "Jon Duckett",
      price: "$62",
      star: "4 Star",
      isFavorite: false,
    },
    {
      id: 2,
      name: "JavaScript and Jquery",
      writer: "Jon Duckett",
      price: "$62",
      star: "4 Star",
      isFavorite: false,
    },
    {
      id: 3,
      name: "MongoDB and Jquery",
      writer: "Jon Duckett",
      price: "$62",
      star: "4 Star",
      isFavorite: false,
    },
    {
      id: 4,
      name: "JavaScript and Jquery",
      writer: "Jon Duckett",
      price: "$62",
      star: "4 Star",
      isFavorite: false,
    },
    {
      id: 5,
      name: "Tailwind and CSS",
      writer: "Jon Duckett",
      price: "$62",
      star: "4 Star",
      isFavorite: false,
    },
    {
      id: 6,
      name: "JavaScript and Jquery",
      writer: "Jon Duckett",
      price: "$62",
      star: "4 Star",
      isFavorite: false,
    },
    {
      id: 7,
      name: "JavaScript and Jquery",
      writer: "Jon Duckett",
      price: "$69",
      star: "4 Star",
      isFavorite: false,
    },
    {
      id: 8,
      name: "Python and Jquery",
      writer: "Jon Duckett",
      price: "$67",
      star: "4 Star",
      isFavorite: false,
    },
  ];

  /// booklist manegment state ///
  const [bookList, setBookList] = useState(bookData);

  const handleFavoriteToggle = (bookId) => {
    const bookFindIndex = bookList.findIndex((book) => book.id === bookId);

    const newBook = [...bookList];

    newBook[bookFindIndex].isFavorite = !newBook[bookFindIndex].isFavorite;
    setBookList(newBook);
  };

  //// this function is search items in bookList data ///
  const handleClickSearch = (searchTream) => {
    console.log(searchTream);
    const filtered = bookList.filter((book) =>
      book.name.toLowerCase().includes(searchTream.toLowerCase())
    );
    setBookList(filtered);
  };

  return (
    <>
      <div>
        <HeroSection onSearch={handleClickSearch} />
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {bookList.map((book) => (
          <div key={book.id} className="space-y-3">
            <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
              <img className="max-w-[144px]" src={bookImg} alt="book name" />
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-bold lg:text-xl">{book.name}</h4>
              <p className="text-xs lg:text-sm">
                By : <span>{book.writer}</span>
              </p>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold lg:text-xl">{book.price}</h4>

                <div className="flex items-center space-x-1">
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <span className="text-xs lg:text-sm">{book.star}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Add to Cart
                </button>
                <button
                  className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
                  onClick={() => handleFavoriteToggle(book.id)}
                >
                  {book.isFavorite ? (
                    <MdFavorite color="yellow" />
                  ) : (
                    <MdFavorite color="gray" />
                  )}
                  Favourite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
