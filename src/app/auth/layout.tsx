import React, { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full bg-[url('/assets/photos/pattern2.jpg')] bg-cover">
            <div className="min-h-svh flex bg-background/80 items-center justify-center p-6 md:p-10">
                {children}
            </div>
        </div>
    )
}

export default AuthLayout