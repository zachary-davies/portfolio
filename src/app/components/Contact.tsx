import React from "react";
import { sendEmail } from "../actions/sendEmail";

const Contact: React.FC = () => {
  return (
    <section className="mx-auto max-w-4xl flex flex-col item-center pt-8 px-4">
      <h2 className="pb-4 italic font-light primary-text text-center">
        Contact
      </h2>
      <div className="project">
        <form
          className="flex flex-col"
          action={async (formData) => {
            await sendEmail(formData);
          }}
        >
          <input
            className="rounded mb-3 h-10 bg-[#505050] p-2 text-white"
            type="text"
            name="name"
            placeholder="Name"
            required
            maxLength={40}
          />
          <input
            className="rounded mb-3 h-10 bg-[#505050] p-2"
            type="email"
            name="email"
            placeholder="Email"
            required
            maxLength={40}
          />
          <textarea
            className="rounded mb-3 bg-[#505050] p-2 h-52"
            name="message"
            placeholder="Connect with me and say hi!"
            required
            maxLength={5000}
          />

          <button className="btn-primary">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
