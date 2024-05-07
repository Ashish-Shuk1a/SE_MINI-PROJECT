import React from 'react';
import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";
import { Link } from 'react-router-dom';
import BookDetails from '../BookDetails/BookDetails';
// import { useNavigate } from 'react-router-dom';

//https://covers.openlibrary.org/b/id/240727-S.jpg

// const BookList = () => {
//   const {books, loading, resultTitle} = useGlobalContext();
//   const booksWithCovers = books.map((singleBook) => {
//     return {
//       ...singleBook,
//       // removing /works/ to get only id
//       id: (singleBook.id).replace("/works/", ""),
//       cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
//     }
//   });

//   if(loading) return <Loading />;

//   return (
//     <section className='booklist'>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>{resultTitle}</h2>
//         </div>
//         <div className='booklist-content grid'>
//           {
//             booksWithCovers.slice(0, 12).map((item, index) => {
//               return (
//                 <Book key = {index} {...item} />
//               )
//             })
//           }
//         </div>
//       </div>
//     </section>
//   )
// }

// export default BookList

const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const data={
    "tax_lawyers": [
      {
        "_id": "66339ff0621aa6006d348ec1",
        "name": "Ashish Shukla",
        "email": "abc@gmail.com",
        "contact": "1234567890",
        "type_of_service": "Tax law",
        "experience": "2",
        "rating": 4,
        "createdAt": "2024-05-02T14:15:12.955Z",
        "updatedAt": "2024-05-02T14:15:12.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348ec2",
        "name": "Kirtan Shah",
        "email": "efg@gmail.com",
        "contact": "9876543210",
        "type_of_service": "Tax law",
        "experience": "5",
        "rating": 5,
        "createdAt": "2024-05-02T14:16:25.955Z",
        "updatedAt": "2024-05-02T14:16:25.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348ec5",
        "name": "Amit",
        "email": "pqrs@gmail.com",
        "contact": "4567891230",
        "type_of_service": "Tax law",
        "experience": "4",
        "rating": 4.2,
        "createdAt": "2024-05-02T14:19:58.955Z",
        "updatedAt": "2024-05-02T14:19:58.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348ec6",
        "name": "Neel",
        "email": "tuvw@gmail.com",
        "contact": "7894561230",
        "type_of_service": "Tax law",
        "experience": "6",
        "rating": 4.8,
        "createdAt": "2024-05-02T14:21:10.955Z",
        "updatedAt": "2024-05-02T14:21:10.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348ec7",
        "name": "Uday",
        "email": "xyza@gmail.com",
        "contact": "3216549870",
        "type_of_service": "Tax law",
        "experience": "3",
        "rating": 4.5,
        "createdAt": "2024-05-02T14:22:22.955Z",
        "updatedAt": "2024-05-02T14:22:22.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348ec8",
        "name": "Harshal Dalvi",
        "email": "bcde@gmail.com",
        "contact": "6549873210",
        "type_of_service": "Tax law",
        "experience": "8",
        "rating": 4.6,
        "createdAt": "2024-05-02T14:23:34.955Z",
        "updatedAt": "2024-05-02T14:23:34.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348ec9",
        "name": "Jeniel",
        "email": "fghi@gmail.com",
        "contact": "9876543210",
        "type_of_service": "Tax law",
        "experience": "5",
        "rating": 4.3,
        "createdAt": "2024-05-02T14:24:46.955Z",
        "updatedAt": "2024-05-02T14:24:46.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348eca",
        "name": "Vatsal",
        "email": "jklm@gmail.com",
        "contact": "7893216540",
        "type_of_service": "Tax law",
        "experience": "10",
        "rating": 4.9,
        "createdAt": "2024-05-02T14:25:58.955Z",
        "updatedAt": "2024-05-02T14:25:58.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348ecb",
        "name": "Jay",
        "email": "nopq@gmail.com",
        "contact": "1237896540",
        "type_of_service": "Tax law",
        "experience": "6",
        "rating": 4.7,
        "createdAt": "2024-05-02T14:27:10.955Z",
        "updatedAt": "2024-05-02T14:27:10.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348ecc",
        "name": "Gurjit",
        "email": "rstu@gmail.com",
        "contact": "6543219870",
        "type_of_service": "Tax law",
        "experience": "4",
        "rating": 4.1,
        "createdAt": "2024-05-02T14:28:22.955Z",
        "updatedAt": "2024-05-02T14:28:22.955Z",
        "__v": 0
      }
    ],
    "property_lawyers": [
      {
        "_id": "66339ff0621aa6006d348ec3",
        "name": "IJKL",
        "email": "ijk@gmail.com",
        "contact": "4561237890",
        "type_of_service": "Property law",
        "experience": "3",
        "rating": 4,
        "createdAt": "2024-05-02T14:17:38.955Z",
        "updatedAt": "2024-05-02T14:17:38.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348ec4",
        "name": "MNOP",
        "email": "mno@gmail.com",
        "contact": "9873216540",
        "type_of_service": "Property law",
        "experience": "7",
        "rating": 4.5,
        "createdAt": "2024-05-02T14:18:45.955Z",
        "updatedAt": "2024-05-02T14:18:45.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348ecd",
        "name": "VWXYZ",
        "email": "vwxyz@gmail.com",
        "contact": "9876541230",
        "type_of_service": "Property law",
        "experience": "5",
        "rating": 4.6,
        "createdAt": "2024-05-02T14:29:34.955Z",
        "updatedAt": "2024-05-02T14:29:34.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348ece",
        "name": "BCDEF",
        "email": "bcdef@gmail.com",
        "contact": "3219876540",
        "type_of_service": "Property law",
        "experience": "8",
        "rating": 4.7,
        "createdAt": "2024-05-02T14:30:46.955Z",
        "updatedAt": "2024-05-02T14:30:46.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348ecf",
        "name": "GHIJK",
        "email": "ghijk@gmail.com",
        "contact": "6543219870",
        "type_of_service": "Property law",
        "experience": "6",
        "rating": 4.8,
        "createdAt": "2024-05-02T14:31:58.955Z",
        "updatedAt": "2024-05-02T14:31:58.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348ed0",
        "name": "LMNOP",
        "email": "lmnop@gmail.com",
        "contact": "7896541230",
        "type_of_service": "Property law",
        "experience": "4",
        "rating": 4.3,
        "createdAt": "2024-05-02T14:33:10.955Z",
        "updatedAt": "2024-05-02T14:33:10.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348ed1",
        "name": "QRSTU",
        "email": "qrstu@gmail.com",
        "contact": "4567893210",
        "type_of_service": "Property law",
        "experience": "7",
        "rating": 4.5,
        "createdAt": "2024-05-02T14:34:22.955Z",
        "updatedAt": "2024-05-02T14:34:22.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348ed2",
        "name": "VWXYZ",
        "email": "vwxyz@gmail.com",
        "contact": "9876541230",
        "type_of_service": "Property law",
        "experience": "5",
        "rating": 4.6,
        "createdAt": "2024-05-02T14:29:34.955Z",
        "updatedAt": "2024-05-02T14:29:34.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348ed3",
        "name": "YZABC",
        "email": "yzabc@gmail.com",
        "contact": "3219874560",
        "type_of_service": "Property law",
        "experience": "9",
        "rating": 4.9,
        "createdAt": "2024-05-02T14:35:46.955Z",
        "updatedAt": "2024-05-02T14:35:46.955Z",
        "__v": 0
      },
      {
        "_id": "66339ff0621aa6006d348ed4",
        "name": "CDEFG",
        "email": "cdefg@gmail.com",
        "contact": "6543219870",
        "type_of_service": "Property law",
        "experience": "5",
        "rating": 4.4,
        "createdAt": "2024-05-02T14:37:10.955Z",
        "updatedAt": "2024-05-02T14:37:10.955Z",
        "__v": 0
      }
    ]
  }

  if (loading) return <Loading />;

  return (
      <section className='booklist'>
          <div className='container' >
              <div className='section-title'>
                  <h2>{resultTitle}</h2>
              </div>
              <div className='booklist-content grid'>
                  {books.map((lawyer, index) => (
                      <div key={index} className='book-item flex flex-column flex-sb' >
                          <div className='book-item-info text-center'>
                              <Link to={`/book/${lawyer._id}`} ><div className='book-item-info-item title fw-7 fs-18'>
                                  <span>{lawyer.name}</span>
                              </div>
                              </Link>
                              <div className='book-item-info-item author fs-15' >
                                  <span className='text-capitalize fw-7'>Type of Service: </span>
                                  <span>{lawyer.type_of_service}</span>
                              </div>
                              <div className='book-item-info-item edition-count fs-15'>
                                  <span className='text-capitalize fw-7'>Experience: </span>
                                  <span>{lawyer.experience}</span>
                              </div>
                              <div className='book-item-info-item publish-year fs-15'>
                                  <span className='text-capitalize fw-7'>Rating: </span>
                                  <span>{lawyer.rating}</span>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  );
};

export default BookList;



