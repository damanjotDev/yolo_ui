'use client';

import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "@/app/utils/icons"
import { cn } from '../../lib/utils';

interface SocialLinkModal {
    type: string;
    link: string;
}

interface SocialLinkProps {
    items : SocialLinkModal[]
    className?: string
}

export const SocialLinks = ({items, className}: SocialLinkProps) => {
    return (
        <div className='
            mt-5
            w-full
            flex
            justify-start
            gap-2'>
            {items?.map(({ link, type }, index) => (
                <div
                    key={index+1}
                    className='w-[30px]'
                    >
                    {type === 'facebook' ? (
                        <FaFacebookF
                            className="-ml-2 w-full h-[18px] transition-all cursor-pointer hover:text-primary"
                            onClick={() => window.open(link, '_blank')}
                        />
                    ) : type === 'twitter' ? (
                        <FaTwitter
                            className="-ml-2 w-full h-[18px] transition-all cursor-pointer hover:text-primary"
                            onClick={() => window.open(link, '_blank')}
                        />
                    ) : type === 'instagram' ? (
                        <FaInstagram
                            className="-ml-2 w-full h-[18px] transition-all cursor-pointer hover:text-primary"
                            onClick={() => window.open(link, '_blank')}
                        />
                    ) : type === 'linkedin' ? (
                        <FaLinkedinIn
                            className="-ml-2 w-full h-[18px] transition-all cursor-pointer hover:text-primary"
                            onClick={() => window.open(link, '_blank')}
                        />
                    ) : null}
                </div>
            ))}
        </div>
    )
}