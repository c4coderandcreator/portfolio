import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_SI,
        import.meta.env.VITE_REACT_TI,
        form.current,
        {
          publicKey: import.meta.env.VITE_REACT_PK,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          // Custom alert message
          const successAlert = document.createElement("div");
          successAlert.className =
            "bg-green-500 text-white px-4 py-2 rounded-md fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
          successAlert.textContent = "Your message has been sent successfully";
          document.body.appendChild(successAlert);
          setTimeout(() => {
            document.body.removeChild(successAlert);
          }, 3000); // Remove the alert after 3 seconds

          // Reset form fields
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          // Custom alert message
          const errorAlert = document.createElement("div");
          errorAlert.className =
            "bg-red-500 text-white px-4 py-2 rounded-md fixed top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2";
          errorAlert.textContent =
            "There is some server issue , please mail me at : contact@anaysingh.in";
          document.body.appendChild(errorAlert);
          setTimeout(() => {
            document.body.removeChild(errorAlert);
          }, 30000); // Remove the alert after 30 seconds
        }
      );
  };

  return (
    <>
      <div className="h-screen">
        <div className="justify-center text-center mt-20 md:mt-24">
          <h1 className="font-monoDM font-medium text-2xl md:text-3xl text-webbut-400 mb-4">
            Contact Me
          </h1>
        </div>
        <form
          className="flex flex-col justify-center align-middle w-[80vw] md:w-[60vw] mx-auto border-2 border-nvcol-400 md:border-webtext-400 p-2 md:p-6 rounded-md"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="text-webbut-400 py-2 font-monoDM">Name</label>
          <input
            className="opacity-95 text-black bg-[#5e5e5e] h-8 rounded-md p-2 text-xs md:text-base placeholder-black"
            type="text"
            name="user_name"
            placeholder="Enter your Name"
            required
          />
          <label className="text-webbut-400 py-2">Email</label>
          <input
            className="opacity-95 text-black bg-[#5e5e5e] h-8 rounded-md p-2 text-xs md:text-base placeholder-black"
            type="email"
            name="user_email"
            placeholder="Enter your E-mail"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <label className="text-webbut-400 py-2">Phone Number</label>
          <input
            className="opacity-95 text-black bg-[#5e5e5e] h-8 rounded-md p-2 text-xs md:text-base placeholder-black"
            type="tel"
            name="user_phone"
            placeholder="Enter your Phone Number"
            required
          />
          <label className="text-webbut-400 py-2">Message</label>
          <textarea
            className="h-32 opacity-95 text-black bg-[#5e5e5e] rounded-md p-2 text-xs md:text-base placeholder-black "
            name="message"
            placeholder="Type your Message"
            required
          />
          {/* <label className="text-webbut-400 py-2">Services</label>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="service"
              value="Portfolio Website"
              className="text-webbut-400"
            />
            <label className="text-webbut-400">Portfolio Website</label>
            <input
              type="checkbox"
              name="service"
              value="Mobile App"
              className="text-webbut-400"
            />
            <label className="text-webbut-400">Mobile App</label>
            <input
              type="checkbox"
              name="service"
              value="Web Apps"
              className="text-webbut-400"
            />
            <label className="text-webbut-400">Web Apps</label>
          </div> */}
          <input
            className="font-monoDM font-medium text-xs md:text-base border-2 border-webbut-400 bg-webbut-400 hover:bg-black hover:text-webbut-400 cursor-pointer w-[6rem] md:w-[8rem] items-center py-2 md:py-2 my-4 rounded-lg"
            type="submit"
            value="Send Message"
          />
        </form>
      </div>
      <Footer />
    </>
  );
}
