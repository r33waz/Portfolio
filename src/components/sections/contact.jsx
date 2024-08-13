"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import contact_me from "@/assets/images/contact_me.jpeg";
import Image from "next/image";

function ContactUs() {
  const form = useRef();
  console.log();
  console.log();
  console.log();

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current.message.value.trim()) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          () => {
            Swal.fire({
              icon: "success",
              title: "Email sent successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          },
          (error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
        );
    } else {
      Swal.fire({
        icon: "warning",
        title: "What are you doing...",
        text: "Enter your message",
      });
    }
  };

  return (
    <div id="contact" className="flex flex-col justify-center md:h-screen min-h-[90vh] md:mt-0 mt-24">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3 py-6" >
        <div className="flex flex-col gap-2">
          <Fade direction="down">
            <h2 className="md:text-5xl text-2xl font-bold text-black dark:text-slate-100/50 pl-3 text-center">
              Contact Me
            </h2>
            <p className="text-black dark:text-slate-100/50 pl-3 text-center">
              I am always open to new opportunities. If you have any questions
              or would like to work together, feel free to contact me using the
              form.
            </p>
          </Fade>
          <Image
            src="https://media1.tenor.com/m/LDMvM3E2MQsAAAAC/email-me-mail.gif"
            alt="Riwaz Thapa"
            width={0}
            height={0}
            className="rounded-lg h-80  w-full "
          />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" p-6  rounded-lg shadow-lg flex flex-col gap-3.5 bg-[url(../assets/images/sence.png)] bg-no-repeat bg-cover bg-center w-full"
        >
          <Fade cascade>
            <div className="mb-4 relative">
              <label
                className="block dark:text-white  text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="from_name"
                id="name"
                className="w-full px-3 py-2 border text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="30"
                viewBox="0 0 14 14"
                className="absolute top-9 right-2"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M14 7a6.977 6.977 0 0 1-1.941 4.838A6.98 6.98 0 0 1 7.02 14h-.04a6.98 6.98 0 0 1-5.039-2.162A7 7 0 1 1 14 7m-2.757 3.5A5.489 5.489 0 0 0 7 8.5a5.489 5.489 0 0 0-4.243 2A5.489 5.489 0 0 0 7 12.5a5.489 5.489 0 0 0 4.243-2M7 7.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div className="mb-4 relative">
              <label
                className="block dark:text-white  text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="from_email"
                id="email"
                className="w-full px-3 py-2 border text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="30"
                viewBox="0 0 24 24"
                className="absolute top-9 right-2"
              >
                <path
                  fill="currentColor"
                  d="M3 18q-.825 0-1.412-.587T1 16V4q0-.825.588-1.412T3 2h16q.825 0 1.413.588T21 4v5q0 .425-.288.713T20 10h-2.5q-1.45 0-2.475 1.025T14 13.5V17q0 .425-.288.713T13 18zm8-9L4.3 4.8q-.425-.275-.862-.025T3 5.525q0 .225.1.413t.3.312l7.075 4.425q.25.15.525.15t.525-.15L18.6 6.25q.2-.125.3-.312t.1-.413q0-.5-.437-.75T17.7 4.8zm8 13q-1.65 0-2.825-1.175T15 18v-4.5q0-1.05.725-1.775T17.5 11t1.775.725T20 13.5V17q0 .425-.288.713T19 18t-.712-.288T18 17v-3.5q0-.2-.15-.35T17.5 13t-.35.15t-.15.35V18q0 .825.588 1.413T19 20t1.413-.587T21 18v-3q0-.425.288-.712T22 14t.713.288T23 15v3q0 1.65-1.175 2.825T19 22"
                />
              </svg>
            </div>

            <div className="mb-4 relative">
              <label
                className="block dark:text-white text-gray-700 font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                className="w-full px-3 py-2 border text-sm border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="absolute top-9 right-2"
              >
                <path
                  fill="currentColor"
                  d="m5 8.75l-2.75-3.1q-.425-.5-.162-1.075Q2.35 4 3 4h17q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20H7q-.825 0-1.412-.587Q5 18.825 5 18ZM5.225 6ZM9 13h9q.425 0 .712-.288Q19 12.425 19 12t-.288-.713Q18.425 11 18 11H9q-.425 0-.712.287Q8 11.575 8 12t.288.712Q8.575 13 9 13Zm0 3h6q.425 0 .713-.288Q16 15.425 16 15t-.287-.713Q15.425 14 15 14H9q-.425 0-.712.287Q8 14.575 8 15t.288.712Q8.575 16 9 16Zm0-6h9q.425 0 .712-.288Q19 9.425 19 9t-.288-.713Q18.425 8 18 8H9q-.425 0-.712.287Q8 8.575 8 9t.288.712Q8.575 10 9 10ZM7 8v10h13V6H5.225Z"
                />
              </svg>
            </div>

            <div className="bg-blue-500 hover:bg-blue-600 text-white  py-2 px-4 rounded cursor-pointer flex items-center w-fit gap-2">
              <input type="submit" value="Send Message" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M1.177 1.119a.5.5 0 0 1 .547-.066l10.064 5.032a3 3 0 0 0-1.135.55L2.322 2.47L3.869 7.5H9.5c.128 0 .244.048.332.126q-.21.407-.29.872L9.5 8.5H3.87l-1.548 5.03L9.63 9.876c.099.325.252.626.448.894l-8.354 4.177a.5.5 0 0 1-.702-.594L2.977 8L1.022 1.647a.5.5 0 0 1 .155-.528M14.5 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S9 14.75 9 13.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5"
                />
              </svg>
            </div>
          </Fade>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
