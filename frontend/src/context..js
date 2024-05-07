import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    // const fetchBooks = useCallback(async() => {
    //     setLoading(true);
    //     try{
    //         const response = await fetch(`${URL}${searchTerm}`);
    //         const data = await response.json();
    //         const {docs} = data;

    //         if(docs){
    //             const newBooks = docs.slice(0, 20).map((bookSingle) => {
    //                 const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle;

    //                 return {
    //                     id: key,
    //                     author: author_name,
    //                     cover_id: cover_i,
    //                     edition_count: edition_count,
    //                     first_publish_year: first_publish_year,
    //                     title: title
    //                 }
    //             });

    //             setBooks(newBooks);

    //             if(newBooks.length > 1){
    //                 setResultTitle("Your Search Result");
    //             } else {
    //                 setResultTitle("No Search Result Found!")
    //             }
    //         } else {
    //             setBooks([]);
    //             setResultTitle("No Search Result Found!");
    //         }
    //         setLoading(false);
    //     } catch(error){
    //         console.log(error);
    //         setLoading(false);
    //     }
    // }, [searchTerm]);

    // useEffect(() => {
    //     fetchBooks();
    // }, [searchTerm, fetchBooks]);
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
      
      

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try {
            // Check if the search term matches "Tax" or "Property"
            if (searchTerm.toLowerCase() === "tax") {
                setBooks(data.tax_lawyers);
                setResultTitle("Tax Lawyers");
            } else if (searchTerm.toLowerCase() === "property") {
                setBooks(data.property_lawyers);
                setResultTitle("Property Lawyers");
            } else {
                // If the search term doesn't match, set empty results
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        } catch(error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);
    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value = {{
            loading, books, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};