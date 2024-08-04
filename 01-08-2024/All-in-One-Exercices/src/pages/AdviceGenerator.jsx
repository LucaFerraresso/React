import React, { useState, useEffect } from "react";
import getRandomAdvice from "../API/getData";

const AdviceApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  const [id, setId] = useState(0);

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = async () => {
    setIsLoading(true);
    try {
      const response = await getRandomAdvice();
      const data = await response;
      setAdvice(data.slip.advice);
      setId(data.slip.id);
      setCount(count + 1);
    } catch (error) {
      console.error("Error fetching advice:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-blue flex items-center justify-center font-sans p-4">
      <div className="bg-dark-grayish-blue text-center p-8 rounded-xl shadow-lg max-w-md w-full">
        {isLoading ? (
          <div className="animate-pulse">
            <div className="text-2xl text-light-cyan mb-4">Loading...</div>
            <div className="bg-gray-700 h-8 w-full mb-4"></div>
            <div className="bg-gray-700 h-6 w-3/4 mb-2"></div>
            <div className="bg-gray-700 h-6 w-2/3"></div>
          </div>
        ) : (
          <>
            <p className="text-neon-green text-sm mb-2">ADVICE #{id}</p>
            <h1 className="text-2xl text-light-cyan mb-6">"{advice}"</h1>
            <div className="mb-6 flex items-center justify-center">
              <svg
                className="hidden md:block"
                width="384"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <path fill="#4F5D74" d="M0 8h144v1H0zM240 8h144v1H240z" />
                  <g transform="translate(182)" fill="#CEE3E9">
                    <rect width="6" height="16" rx="3" />
                    <rect x="14" width="6" height="16" rx="3" />
                  </g>
                </g>
              </svg>
              <svg
                className="md:hidden"
                width="192"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <path fill="#4F5D74" d="M0 8h80v1H0zM112 8h80v1H112z" />
                  <g transform="translate(88)" fill="#CEE3E9">
                    <rect width="6" height="16" rx="3" />
                    <rect x="14" width="6" height="16" rx="3" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-neon-green p-4 rounded-full hover:bg-light-cyan hover:shadow-neon transition duration-300"
                onClick={getAdvice}
              >
                <img
                  src="/Exercises/advice-generator-app-main/images/icon-dice.svg"
                  alt="Get Advice"
                  className="w-6 h-6"
                />
              </button>
            </div>
            <p className="text-light-cyan mt-4">
              You have read {count} pieces of advice
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AdviceApp;
