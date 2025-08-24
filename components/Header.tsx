'use client'

import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { Social } from "@/typings";
import Link from "next/link";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
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
            target="_blank"
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
        className="flex flex-row items-center text-neutral-400 cursor-pointer space-x-2"
      >
        <>
          <SocialIcon
            className="cursor-pointer"
            network="rss"
            fgColor="#262626"
            bgColor="transparent"
            style={{ height: 40, width: 40 }}
          />
          <Link
            href="https://blog-kaustubh.vercel.app/"
          >
            <button className="uppercase hidden md:inline-flex text-sm text-neutral-400">
              Blog
            </button>
          </Link>
        </>
        <>
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="#262626"
            bgColor="transparent"
            style={{ height: 40, width: 40 }}
          />
          <Link
            href="#contact"
          >
            <button className="uppercase hidden md:inline-flex text-sm text-neutral-400">
              Get In Touch
            </button>
          </Link>
        </>
      </motion.div>
    </header>
  );
}

export default Header;
