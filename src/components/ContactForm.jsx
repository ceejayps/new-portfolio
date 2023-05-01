import React, { useRef, useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utilities/FirebaseConfig";



const ContactForm = () => {
  const [seconds, setSeconds] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    if (seconds === 0) {
      setIsSuccess(false);
      setIsFailure(false)
    }
    
  }, [seconds]);



  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const orgRef = useRef(null);
  const detailsRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const org = orgRef.current.value;
    const details = detailsRef.current.value;
    console.log(
      `Name: ${name}, Email: ${email}, Org:${org}, Details: ${details}`
    );
    await addDoc(collection(db, "websiteMessages"), {
      Name: name,
      Email: email,
      org: org,
      Details: details,
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        nameRef.current.value = "";
        emailRef.current.value = "";
        orgRef.current.value = "";
        detailsRef.current.value = "";
        setSeconds(20)
        setIsSuccess(true);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        setIsFailure(true)
      });
  };

  return (


    <section id="Contact"  className="">
        {isSuccess && (<div className="fixed z-[999999] inset-x-0 bottom-0 p-4">
  <div className="rounded-lg bg-green-600 px-4 py-3 text-white shadow-lg">
    <p className="text-center text-sm font-medium">
    Thanks for Reaching out, I'll get back to you shortly. also check out my {" "}
      <a href="" className="inline-block underline">
        LinkedIn
      </a>
    </p>
  </div>
</div>)}


      <div className="flex relative justify-center max-h-full overflow-hidden lg:px-0 md:px-12">
        <div className=" relative flex flex-col flex-1 px-4 py-10 bg-white z-10  lg:py-24 md:flex-none md:px-28 sm:justify-center">
          <div className="w-full max-w-4xl mx-auto md:max-w-4xl md:px-0  sm:px-4">
            <div className="flex flex-col">
              <div>
                <h2 className="text-4xl text-black">Let's get started!</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Complete the details below so I can process your request and
                  then schedule a time to discuss your goals.
                </p>
              </div>
            </div>
            <form
              className="max-w-xl mx-auto text-left"
              onSubmit={handleSubmit}
            >
              <input autoComplete="false" name="hidden" className=" hidden" />
              <input name="_redirect" type="hidden" value="#" />
              <div className="mt-4 space-y-6">
                <div>
                  <label
                    className="block mb-3 text-sm font-medium text-gray-600"
                    name="name"
                  >
                    First name
                  </label>
                  <input
                    required
                    ref={nameRef}
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div className="col-span-full">
                  <label
                    className="block mb-3 text-sm font-medium text-gray-600"
                    name="company"
                  >
                    What is the name of your company / organisation?
                  </label>
                  <input
                    ref={orgRef}
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="Company name"
                  />
                </div>
                <div className="col-span-full">
                  <label
                    className="block mb-3 text-sm font-medium text-gray-600"
                    name="email"
                  >
                    How shall we contact you?
                  </label>
                  <input
                    ref={emailRef}
                    required
                    className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="email@example.com"
                    autoComplete="on"
                    type="email"
                  />
                </div>
                <div>
                  <div>
                    <label
                      className="block mb-3 text-sm font-medium text-gray-600"
                      name="message"
                    >
                      Project details
                    </label>
                    <div className="mt-1">
                      <textarea
                        ref={detailsRef}
                        required
                        className="block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                        placeholder="What are you working on?"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <button
                    className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-Success:outline-black text-sm focus-Success:ring-black"
                    type="submit"
                  >
                    Submit your request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
