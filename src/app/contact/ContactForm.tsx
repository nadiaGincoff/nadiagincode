'use client'
import React, { useState, ChangeEvent } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Spinner} from "@nextui-org/react";
import Lottie from 'react-lottie-player'
import { useFormStatus } from 'react-dom'
import { motion } from "framer-motion"     
import lottieJson from '../../../public/emailsent.json'

const ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY_FOR_MAILING || "";

function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.9 }}
      type="submit"
      className={`w-1/3 shadow-sm shadow-darkgreen/50 inline-flex justify-center items-center px-5 py-2 font-semibold  text-beige bg-darkgreen dark:bg-darkgreen dark:text-beige dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-full link-transition z-[900]`}
      aria-disabled={pending}>
        SEND
      <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </motion.button>
  )
}

type TFormData = {
  accessKey: string,
  name: string,
  email: string,
  message: string,
}

export default function ContactForm() {
  const [result, setResult] = useState<boolean | string>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [rawData, setFormData] = useState<TFormData>({ 
    accessKey: ACCESS_KEY,
    name: "",
    email: "", 
    message: ""
  })

  const { isOpen, onOpen, onOpenChange} = useDisclosure();
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true)
    const formData = new FormData(event.target as any);

    formData.append("access_key", ACCESS_KEY);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.success);
      setLoading(false);
      setFormData({
        accessKey: ACCESS_KEY,
        name: "",
        email: "", 
        message: ""
      })
      onOpen()
    } else {
      console.log("Error", res);
      setLoading(false);
      setResult(res.message);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)  => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
  <>
    <form onSubmit={onSubmit}>
      <motion.div 
        className="relative mb-6"
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.05 }}
      >
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg className="w-4 h-4 text-darkgreen" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
          </svg>
        </div>
        <input 
          type="text" 
          id="input-group-1" 
          required 
          name="name"
          value={rawData.name}
          onChange={handleInputChange}
          className="bg-transparent border border-darkgreen text-darkgray text-sm rounded-lg block w-full ps-10 p-2.5 placeholder-darkgray-400" placeholder="Your name"
        />
      </motion.div>
      <motion.div 
        className="relative mb-6"
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.05 }}
      >
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg className="w-4 h-4 text-darkgreen" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
          </svg>
        </div>
        <input 
          type="email" 
          required 
          id="input-group-1" 
          name="email" 
          value={rawData.email}
          className="bg-transparent border border-darkgreen text-darkgray text-sm rounded-lg block w-full ps-10 p-2.5 placeholder-darkgray-400" placeholder="your@email.com"
          onChange={handleInputChange}
        />
      </motion.div>
      <motion.div 
        className="relative mb-6"
        initial={{ opacity: 0.5, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.05 }}
      >
      <label htmlFor="message" className="block mb-2 text-xl fons-mono font-semibold text-darkgreen">Your message</label>
      <textarea 
        id="message"
        name="message"
        required 
        rows={4} 
        className="block p-2.5 w-full text-sm text-darkgray bg-transparent rounded-lg border border-darkgreen" 
        placeholder="Write your thoughts here..."
        onChange={handleInputChange}
        value={rawData.message}
      ></textarea>
      </motion.div>
      {loading ? <Spinner color="danger"/> : <SubmitButton />}
    </form>
    {isOpen ? 
      <Modal 
        isOpen={isOpen} 
        placement={"center"}
        onOpenChange={onOpenChange} 
      >
        <ModalContent className="p-5">
          {() => (
            <>
              <ModalHeader className="flex flex-col items-center font-sans font-medium text-xl text-darkgreen text-center">Your message has been sent successfully!</ModalHeader>
              <ModalBody className="flex flex-col items-center">
                <Lottie
                  loop
                  animationData={lottieJson}
                  play
                  style={{ width: 150, height: 150 }}
                >
                </Lottie>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    : null
    }
    </>
  );
}