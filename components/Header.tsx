import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { Social } from "@/typings";
import Link from "next/link";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  const connects = [
    {
      id: "1",
      link: "https://www.linkedin.com/in/kaustubhxganekar/",
    },
    {
      id: "2",
      link: "https://github.com/Kaustubhx",
    },
    {
      id: "3",
      link: "https://www.instagram.com/kaustubhx.__/",
    },
  ];

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {socials?.map((social) => (
          <SocialIcon
            key={social?._id}
            url={social?.url}
            fgColor="#262626"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-neutral-400 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="#262626"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-neutral-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
