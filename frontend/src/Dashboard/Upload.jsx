import React, { useEffect, useState } from "react";
import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";

const Upload = () => {
  const bookscategories = [
    "I Semester",
    "II Semester",
    "III Semester",
    "IV Semester",
    "V Semester",
    "VI Semester",
    "VII Semester",
    "VIII Semester",
  ];
  const [selectedbookcategory, setselectedbookcategory] = useState(
    bookscategories[0]
  );
  const handlechangeselectedvalues = (events) => {
    setselectedbookcategory(event.target.value);
  };
  return (
    <div className="px-4 my-12 ">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>
      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
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
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Select Semester"></Label>
            </div>
            <Select
              id="inputState"
              name="Semester"
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
      </form>
    </div>
  );
};

export default Upload;
