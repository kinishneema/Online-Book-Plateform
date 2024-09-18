import React, { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";
import {
  Button,
  Checkbox,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";

const Editbooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, bookDescription, bookPdfUrl } =
    useLoaderData();

  const bookscategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];
  const [selectedbookcategory, setselectedbookcategory] = useState(
    bookscategories[0]
  );
  const handlechangeselectedvalues = (event) => {
    setselectedbookcategory(event.target.value);
  };

  const handleupdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPdfUrl,
    };
    //console.log(bookObj);
    //update book data
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data)
        alert("Book is Updated sucessfully");
      });
  };
  return (
    <div className="px-4 my-12 ">
      <h2 className="mb-8 text-3xl font-bold">Update The Book Data</h2>
      <form
        onSubmit={handleupdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              name="bookTitle"
              placeholder="Book Name"
              required
              defaultValue={bookTitle}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              type="text"
              name="authorName"
              placeholder="Author Name"
              required
              defaultValue={authorName}
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              type="text"
              name="imageURL"
              placeholder="Book Image URL"
              required
              defaultValue={imageURL}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="categoryName" value="Select Category"></Label>
            </div>
            <Select
              id="categoryName"
              name="Select Category"
              className="w-full rounded"
              value={selectedbookcategory}
              onChange={handlechangeselectedvalues}
            >
              {bookscategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Book Description"
            required
            className="w-full pt-2 pl-3"
            rows={6}
            defaultValue={bookDescription}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPdfUrl"
            type="text"
            placeholder="book pdf url"
            required
            name="bookPdfUrl"
            defaultValue={bookPdfUrl}
          />
        </div>

        <Button type="submit" className="bg-blue-500 hover:bg-blue-700">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default Editbooks;
