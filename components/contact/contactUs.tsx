'use client'
import { AboutsModal } from "@/app/utils/modals";
import { TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../ui/Typography";
import { FieldValues, GoArrowRight, RoutesName, SubmitHandler, Tilt, motion, useForm, yup, yupResolver } from "@/app/utils"
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import Map from "../common/map";
import { sentNormalMail } from "@/app/services";

const sendMessageFormValidation = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    name: yup.string().required('Name is required'),
    phone: yup.string().nullable(),
    message: yup.string().required('Message required'),
    subject: yup.string().required('subject is required')
  })

interface IFormInput {
email: string;
name: string;
phone?: string | null;
message: string;
subject: string;
}

const sendMessageFormDefaultValues = {
    email: '',
    name: '',
    phone: '',
    message: '',
    subject: ''
  }

const ContactUs = ({ abouts }: { abouts: AboutsModal }) => {

  const navigate = useRouter();
  const [loading, setLoading] = useState(false);

  const about = abouts?.rows?.find((ele) => ele?.isCover == true)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: {
      errors,
    }
  } = useForm<IFormInput>({
    defaultValues: sendMessageFormDefaultValues,
    resolver: yupResolver(sendMessageFormValidation),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true)
    await sentNormalMail(data)
    setLoading(false)
    reset()
  }

  return (
      <div className={`
          h-full
          w-full
          flex
          flex-col
          gap-10`}>
             <div className='
             flex 
             h-[calc(100vh)]'>
              <Map lat={about?.coordinates?.lat || 0} lng={about?.coordinates?.lng || 0}/>
             </div>

            <div className="
            w-full
            lg:w-[70%]
            mx-auto
            flex
            flex-col
            md:gap-10
            gap-5
            md:p-10
            p-5">
              <motion.div className="
              flex
              items-center
              justify-center
              text-primary"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'linear' }}
              viewport={{ once: true }}>
               <TypographyH2 title="CONTACT US" />
              </motion.div>

              <form className='
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-5'
              onSubmit={handleSubmit(onSubmit)} >

                  <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="name" className='text-sm'>Name (required)</label>
                    <Input disabled={loading} type="text" id="name" placeholder="Your name*" {...register('name')} error={errors?.name?.message}/>
                  </div>

                  <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="email" className='text-sm'>Email adress (required)</label>
                    <Input disabled={loading} type="email" id="email" placeholder="Mail*" {...register('email')} error={errors?.email?.message}/>
                  </div>

                  <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="phone" className='text-sm'>Phone (optional)</label>
                    <Input disabled={loading} type="text" id="phone" placeholder="Your phone" {...register('phone')} error={errors?.phone?.message}/>
                  </div>

                  <div className="grid w-full items-center gap-1.5">
                    <label htmlFor="subject" className='text-sm'>Subject (required)</label>
                    <Input disabled={loading} type="text" id="subject" placeholder="Your subject" {...register('subject')} error={errors?.subject?.message}/>

                  </div>

                  <div className="grid w-full items-center gap-1.5 lg:col-span-2">
                    <label htmlFor="message" className='text-sm'>Your message</label>
                    <Textarea disabled={loading} id="message" placeholder="Type message*" className='h-[140px]' {...register('message')} error={errors?.message?.message}/>
                  </div>

                  <Button type='submit' className='w-[200px] h-[auto] text-sm text-white py-3'>
                    {loading && <Loader2 className="text-white mr-2 h-4 w-4 animate-spin" />}
                    SEND YOUR MESSAGE NOW
                  </Button>
                </form>
            </div>
      </div>
  )
}

export { ContactUs }
