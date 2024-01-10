import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const {id} = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPdfUrl} = useLoaderData();
  
 
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-Help",
    "Memoir",
    "Business",
    "Romance",
    "Children Books",
    "Travel",
    "Religion",
    "Thriller",
    "Art and Design"

  ]
    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
    const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
      setSelectedBookCategory(event.target.value);
    }

    //Handle book submission
    const handleUpdate = (event) => {
      event.preventDefault();
      const form = event.target;

      const bookTitle = form.bookTitle.value;
      const authorName = form.authorName.value;
      const imageURL = form.imageURL.value;
      const category = form.categoryName.value;
      const bookDescription = form.bookDescription.value;
      const bookPdfUrl = form.bookPdfUrl.value;
      
      const updateBookObj = {
        bookTitle, authorName, imageURL, category, bookDescription, bookPdfUrl
      }
     //update book data
     fetch(`http://localhost:5000/book/${id}`,{
      method:"PATCH",
      headers:{
        'Content-Type': "application/json"
      },
      body: JSON.stringify(updateBookObj)
     }).then(res => res.json().then(data => {
      //console.log(data)
      alert("Book is updated successfully!!!")
      
    }))

      
    }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Book Data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* first row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name='bookTitle' placeholder="Book Name" required type='text' defaultValue={bookTitle}/>
      </div>
      {/* author name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" name='authorName' placeholder="Author Name" required type='text' defaultValue={authorName}/>
      </div>
      </div>
       {/* second row */}
       <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image Url" />
        </div>
        <TextInput id="imageURL" name='imageURL' placeholder="Book Image URL" required type='text' defaultValue={imageURL}/>
      </div>
      {/* category name */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
          }
        </Select>
      </div>
      </div>

      {/* book Description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' placeholder="Write about your book..." required rows={6} className='w-full' defaultValue={bookDescription}/>
        
      </div>
     {/* book pdf link */}
     <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
        </div>
        <TextInput id="bookPdfUrl" name="bookPdfUrl" type="text" placeholder="bookPdfUrl" required defaultValue={bookPdfUrl}/>
      </div>
      <Button type="submit" className='mt-5'>Update Book</Button>

    </form>
    </div>
  )
}

export default EditBooks