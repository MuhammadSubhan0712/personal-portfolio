import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="card relative items-center mx-6
    flex flex-col px-[33px] py-[27px] z-30 gap-[54px]
    md:gap-[35px] mb-[67px] md:mb-[42px">
      <div
        className="flex flex-col 
    :md:flex-row gap-5 md:justify-between md:w-full">
        <h2 className="font-semibold text-[22px] md:text-[40px] md:max-w-[462px]">
          Want to me on your team❔ Let's make it happen🎬💫
        </h2>
        <div
          className="flex flex-col gap-5
    items-center md:items-end">
          <a
            href="mailto:muhammadsubhan0712@gmail.com"
            className="self-center md:self-start bg-primary
    text-white p-2.5 rounded flex gap-2.5 items-center text-lg
    md:text-xl/1 font-normal"></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
