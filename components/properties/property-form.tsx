'use client'
import React from 'react'
import {useForm, yupResolver, yup, SubmitHandler, FieldValues, FiMinus, FiPlus} from "@/app/utils";
import {  PropertyModal } from "@/app/utils/modals";
import { Button } from '../ui/button';
import { CalendarDateRangePicker } from '../ui/date-range-picker';
import { addDays } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { TypographyP } from '../ui/Typography';

export const propertyFormValidationSchema = yup.object().shape({
      check_in: yup.date().required(),
      check_out: yup.date().required(),
      adults: yup.number().min(0).required(),
      children: yup.number().min(0).required(),
      eb_branch: yup.number().required()
    })

const PropertyForm = ({propertyDetails}:{propertyDetails: PropertyModal}) => {

  const propertyFormDefaultValues = {
    check_in: new Date(),
    check_out: addDays(new Date(), 1),
    adults: 1,
    children: 1,
    eb_branch: propertyDetails.id
  }

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
} = useForm({
    defaultValues: propertyFormDefaultValues,
    resolver: yupResolver(propertyFormValidationSchema),
});

const onSubmit: SubmitHandler<FieldValues> = async (data) => {
  console.log('data', data)
  let link = `https://www.airbnb.co.in/users/show/138737073?check_in=${data.check_in}&check_out=${data.check_out}&adults=4${data.adults}&children=${data.children}&eb_branch=${data.eb_branch}`
  window.open(link, '_blank');
};

  return (
    <div className="
    font-roboto-condensed
    w-full
    flex
    flex-col
    itmes-start
    md:gap-10
    gap-5
    md:p-10
    p-5
    bg-background
    rounded-md
    shadow-lg">
      <form
      className="
      w-full
      grid
      grid-cols-1
      gap-5"
      onSubmit={handleSubmit(onSubmit)}
      >
            <div className="grid w-full items-center gap-1.5">
                <label htmlFor="check_in" className="text-sm">
                    Select Date (required)
                </label>
                <CalendarDateRangePicker 
                value={{from: watch('check_in'), to: watch('check_out')}} 
                className='w-full' 
                onDateChange = {(value)=> {
                  setValue('check_in', value?.from || new Date());
                  setValue('check_out', value?.to || addDays(new Date(), 1));
                }}
                error={errors?.check_in?.message || errors?.check_out?.message}/>
               
            </div>

            <div className="grid w-full items-center gap-1.5">
                <label htmlFor="title" className="text-sm">
                    Guestes (required)
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className='w-full justify-start px-3 py-2 h-[45px] text-left font-normal rounded-none'>Guest 2</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full rounded-none">
                    <div className="
                    font-roboto-condensed
                    flex
                    flex-col
                    gap-5">
                      <div className="
                      flex
                      justify-between">
                        <div className='
                        flex
                        flex-col'>
                          <div className='flex'>
                            <TypographyP className='font-bold text-[16px]' title='Adults'/>
                          </div>
                          <div className='flex -mt-1'>
                            <TypographyP title='Ages 18+'/>
                          </div>
                        </div>
                        <div className='
                        flex
                        gap-4'>
                          <div className='flex items-center bg-accent p-2 w-8 h-8 border-[0.5px] border-input hover:border-black'
                          onClick={()=>{
                            if(watch('adults')>0){
                              setValue('adults',watch('adults')-1)
                            }
                          }}>
                            <FiMinus className='w-6 h-6 text-black'/>
                          </div>
                          <div className='flex items-center justify-center h-8'>
                            <TypographyP className='font-bold text-[16px]' title={watch('adults')}/>
                          </div>
                          <div className='flex items-center bg-accent p-2 w-8 h-8 border-[0.5px] border-input hover:border-black'
                            onClick={()=>{
                              if(watch('adults')<4){
                                setValue('adults',watch('adults')+1)
                              }
                            }}>
                          <FiPlus className='w-4 h-4'/>
                          </div>
                        </div>
                      </div>

                      <div className="
                      flex
                      gap-10">
                        <div className='
                        flex
                        flex-col'>
                          <div className='flex'>
                            <TypographyP className='font-bold text-[16px]' title='Children'/>
                          </div>
                          <div className='flex -mt-1'>
                            <TypographyP title='Ages 4-18'/>
                          </div>
                        </div>
                        <div className='
                        flex
                        gap-4'>
                          <div className='flex items-center bg-accent p-2 w-8 h-8 border-[0.5px] border-input hover:border-black'
                            onClick={()=>{
                              if(watch('children')>0){
                                setValue('children',watch('children')-1)
                              }
                            }}>
                            <FiMinus className='w-6 h-6 text-black'/>
                          </div>
                          <div className='flex items-center justify-center h-8'>
                            <TypographyP className='font-bold text-[16px]' title={watch('children')}/>
                          </div>
                          <div className='flex items-center bg-accent p-2 w-8 h-8 border-[0.5px] border-input hover:border-black'
                          onClick={()=>{
                            if(watch('children')<4){
                              setValue('children',watch('children')+1)
                            }
                          }}>
                          <FiPlus className='w-4 h-4'/>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </PopoverContent>
                </Popover>
            </div>
            
            <div className="flex items-center justify-end gap-5">
                <Button
                type="submit"
                className="
                w-full
                h-[auto] 
                rounded-lg
                bg-primary
                text-sm 
                text-white 
                py-3
                px-6">
                    Search
                </Button>
            </div>
      </form>
    </div>
  )
}

export default PropertyForm