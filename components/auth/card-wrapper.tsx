import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Header } from '@/components/auth/header';
import { BackButton } from '@/components/auth/back-button';


interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
  };
  

  export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
  }: CardWrapperProps) => {
    return (
      <Card className="w-[400px] shadow-md bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 to-sky-50">
        <CardHeader>
            <Header label={headerLabel} />
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
        <CardFooter>
            <BackButton
            label={backButtonLabel}
            href={backButtonHref}
            />
        </CardFooter>
      </Card>
    );
  };