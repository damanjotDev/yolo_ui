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
const descriptionData = [
{
    id:1,
    description: 'Rock-solid Business Model: Our franchise model has been time-tested and fine-tuned, so you can hit the ground running with your new hostel business.'
},
{
    id:2,
    description: 'Hip Brand Recognition: As a YOLO franchisee, you’ll be part of a brand that’s already recognized for being awesome.'
},
{
    id:3,
    description: 'Full-Service Support: From training to ongoing support, we’ll have your back the whole way.'
},
{
    id:4,
    description: 'Top-notch Site Selection: We’ll help you scout out the perfect location for your hostel, because we know location is everything.'
},
{
    id:5,
    description: 'Cool Design and Decor: Our team will assist you with designing and decorating your franchise location to give it that effortlessly cool YOLO vibe.'
},
{
    id:6,
    description: 'Exclusive Access to Supplies and Vendors: You’ll be able to take advantage of our network of high-quality suppliers and vendors.'
},
{
    id:7,
    description: 'Marketing Mojo: We’ll help you spread the word about your YOLO hostel and get more bookings with our ongoing marketing support.'
},
{
    id:8,
    description: 'Less Risk, More Fun: Joining the YOLO franchise means you’ll have less risk of failing and more fun running your hostel.'
}
]
const FranchiseContactUs = ({ abouts }: { abouts: AboutsModal }) => {

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
                <div className="
                md:mt-[120px]
                mt-[70px]
                w-full
                flex
                flex-col
                gap-2">
                    <motion.div className="
                    w-full
                    flex
                    items-center
                    justify-center
                    text-black"
                        initial={{ x: 200 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        viewport={{ once: true }}>
                        <TypographyH2 title={"Where Business Meets Adventure and Fun" || "loading"} />
                    </motion.div>

                    <motion.div 
                    className="
                    w-full
                    flex
                    items-center
                    justify-center
                    text-black"
                        initial={{ x: 200 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut',delay: 0.2}}
                        viewport={{ once: true }}>
                        <TypographyH4 title={"Join the YOLO Franchise and Get These Perks:" || "loading"} />
                    </motion.div>

                    <motion.div
                    className="
                    md:mt-20
                    mt-10
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-foreground
                    font-roboto-condensed
                    text-sm 
                    tracking-wider
                    font-bold"
                        initial={{ x: 200, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeInOut'}}
                        viewport={{ once: true }}>
                        <div
                        className="flex">
                            <ol style={{ listStyleType: "upper-number" }} className="flex flex-col md:gap-4 gap-2">
                                {descriptionData?.map((ele)=>(
                                    <li key={ele.id}>{ele.description}</li>
                                ))}
                            </ol>
                        </div>
                        <div className="
                         mt-4
                           w-full
                           flex
                           justify-start">
                             <TypographyP  title="If you’re ready to join the YOLO franchise and become part of a community of fun-loving, adventurous business owners, contact us today."/>
                           </div>
                    </motion.div>

                </div>

                <div className="
                md:mt-10
                mt-5
                w-full
                flex
                flex-col
                gap-5">
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
      </div>
  )
}

export { FranchiseContactUs }
