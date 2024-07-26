"use client";

import { useRouter } from 'next/navigation';
import React from 'react'



interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean;
};

const LoginButton = ({
    children,
    mode = 'redirect',
    asChild
}: LoginButtonProps) => {
    const router = useRouter();

    const onClick = () =>{
        router.push ('auth/login');
    }

    if (mode==="modal") {
        return (
            <span>
                TODO: Modal 
            </span>
            )
    }

    return (
    <span onClick={onClick} className='cursor-pointer'>
        {children}
    </span>
    )
}

export default LoginButton