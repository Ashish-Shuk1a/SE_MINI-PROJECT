import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import img from "../../images/images.png"
import "./BookDetails.css";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({
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
  });

  const obj ={
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
  }
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails(){
      try{
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if(data){
          const {description, title, covers, subject_places, subject_times, subjects} = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: img ,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  const amount = 500;
  const currency = "INR";
  const receiptId = "qwsaq1";

  const paymentHandler = async (e) => {
    const response = await fetch("http://localhost:3060/api/order/create", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    var options = {
      key: "rzp_test_91WcKJ8HcKDdRy", // Enter the Key ID generated from the Dashboard
      amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name: "Acme Corp", //your business name
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          "http://localhost:3060/api/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: "Web Dev Matrix", //your customer's name
        email: "webdevmatrix@example.com",
        contact: "9000000000", //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

  if(loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/book")}>
          <FaArrowLeft size = {22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content grid'>
          <div className='book-details-img'>
            <img src = {book?.cover_img} alt = "cover img" />
          </div>
          <div className='book-details-info'>
            <div className='book-details-item title'>
              <span className='fw-6 fs-24'>Ashish Shukla</span>
            </div>
            <div className='book-details-item description'>
            <span className='fw-6'>Email: </span>
              <span>abc@gmail.com</span>
            </div>
            <div className='book-details-item description'>
            <span className='fw-6'>Contact </span>
              <span>9987946253</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Service: </span>
              <span className='text-italic'>Tax Law</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Rating: </span>
              <span className='text-italic'>4</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Experience: </span>
              <span className='text-italic'>2 years</span>
            </div>
            <div className='book-details-item'>
              <span className='fw-6'>Description: </span>
              <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure rerum itaque dolor, cupiditate laboriosam eos quis minus ea voluptatem corrupti totam, omnis hic magni, eum porro nihil voluptatibus nobis beatae.</span>
            </div>
            <div className="product">
              <button onClick={paymentHandler}>Book a session</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails