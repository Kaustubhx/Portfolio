'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { PageInfo } from '@/typings';
import { Textarea } from './ui/textarea'
import sendEmailAction from '@/actions/sendEmailAction'
import { useState } from 'react'

type Props = {
    pageInfo: PageInfo;
}

const emailFormSchema = z.object({
    clientname: z.string({
        invalid_type_error: "Name should only contain letters"
    }).min(1, {
        message: "Please enter a FullName"
    }),
    clientemail: z.string({
        required_error: "Please enter a email address"
    }).email({
        message: "Please enter a valid email"
    }),
    subject: z.string().min(1, {
        message: "Please enter a Subject"
    }),
    message: z.string()
})

function ContactMe({ pageInfo }: Props) {
    const [pending, isPending] = useState<boolean>(false);

    const emailForm = useForm<z.infer<typeof emailFormSchema>>({
        resolver: zodResolver(emailFormSchema),
        defaultValues: {
            clientname: "",
            clientemail: "",
            subject: "",
            message: "",
        }
    })

    async function onSubmit(values: z.infer<typeof emailFormSchema>) {
        try {
            isPending(true);
            await sendEmailAction(values);
            isPending(false);
        } catch (error) {
            isPending(false)
        } finally {
            emailForm.reset();
            isPending(false)
        }
    }

    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{ duration: 1.5 }}
            className='my-12 flex flex-col relative text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
            <div className='my-20 flex flex-col relative text-center md:text-left md:flex-row justify-evenly mx-10 items-center '>
                <h3 className='uppercase tracking-[20px] text-neutral-500 text-2xl absolute top-0'>
                    About
                </h3>

                <div className='mt-12 flex flex-col space-y-10'>
                    <h4 className='text-3xl md:text-4xl font-semibold text-center'>
                        I have got just what you need.{" "}
                        <span className='decoration-neutral-900/50 underline'>Lets Talk.</span>
                    </h4>

                    <div className='space-y-10'>
                        <div className='flex items-center space-x-5 justify-center'>
                            <PhoneIcon className='text-neutral-900 h-7 w-7 animate-pulse' />
                            <p className='text-xl md:text-2xl'>{pageInfo?.phoneNumber}</p>
                        </div>

                        <div className='flex items-center space-x-5 justify-center'>
                            <EnvelopeIcon className='text-neutral-900 h-7 w-7 animate-pulse' />
                            <p className='text-xl md:text-2xl'>{pageInfo?.email}</p>
                        </div>

                        <div className='flex items-center space-x-5 justify-center'>
                            <MapPinIcon className='text-neutral-900 h-7 w-7 animate-pulse' />
                            <p className='text-xl md:text-2xl'>{pageInfo?.address}</p>
                        </div>
                    </div>

                    <Form {...emailForm}>
                        <form
                            onSubmit={emailForm.handleSubmit(onSubmit)}
                            className='flex flex-col space-y-2 w-fit mx-auto'
                        >
                            <div className='flex space-x-2 w-full'>
                                <FormField
                                    control={emailForm.control}
                                    name='clientname'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder='Name' className='contactInput w-36 md:w-full text-base' type='text'  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={emailForm.control}
                                    name='clientemail'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder='Email' className='contactInput w-36 md:w-full text-base' type='email' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={emailForm.control}
                                name='subject'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder='Subject' className='contactInput w-36 md:w-full text-base' type='text' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={emailForm.control}
                                name='message'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea placeholder="Message" className='contactInput w-36 md:w-full text-base' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type='submit'
                                disabled={pending}
                                className='bg-neutral-900 py-5 px-10 rounded-md text-white font-bold text-lg !mb-5 !h-auto'
                            >
                                {pending ? "Submitting.." : "Submit"}
                            </Button>
                        </form>
                    </Form>

                </div>
            </div>
        </motion.div>
    )
}

export default ContactMe