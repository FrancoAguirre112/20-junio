import React from "react";
import Image from "next/image";
import Link from "next/link";

const FloatingWhatsapp = () => {
  return (
    // <Link
    //   href={"https://api.whatsapp.com/send/?phone=5491171332855"}
    //   target="_blank"
    //   className="right-5 bottom-5 z-50 fixed bg-[#25D366] hover:bg-[#1eaa52] p-3 rounded-full transition-colors hover:cursor-pointer"
    // >
    //   <Image
    //     src={"/icons/whatsapp.svg"}
    //     alt="Contactar por whatsapp"
    //     width={50}
    //     height={50}
    //   />
    // </Link>

    <Link
      href={"https://api.whatsapp.com/send/?phone=5491131901201"}
      target="_blank"
      className="right-5 bottom-5 z-50 fixed flex justify-center items-center gap-2 transition-colors hover:cursor-pointer"
    >
      <Image
        src={"/assets/icons/whatsapp.png"}
        alt="Contactar por whatsapp"
        width={250}
        height={250}
        className="w-15"
      />

      <div className="flex flex-col items-center gap-0 bg-white p-2 py-1 border-[#3DBB27] border-6 text-[#3DBB27] text-center text-nowrap">
        <span>Hablemos por</span>
        <span>WhatsApp</span>
      </div>
    </Link>
  );
};

export default FloatingWhatsapp;
