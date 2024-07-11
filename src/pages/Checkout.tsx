import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  });

  return (
    <section className="h-screen py-24">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="p-10 flex flex-col lg:flex-row  items-center gap-10 text-center lg:text-left">
          <div className="h-10 w-10 rounded-full p-2 bg-green-500 text-white flex items-center justify-center">
            <FaCheck className="text-2xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">
              Thank you for your purchase!
            </h1>
            <p className="text-lg">
              You will be redirected to the home page shortly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Checkout;
