'use client'

import { useEffect, useState } from "react"
import LinkState from "@/app/(extension)/shared/LinkState"

export default function Page ({ params }: { params: { token: string } }) {
    const [isSignedIn, setIsSignedIn] = useState(true);
    const [pageContent, setPageContent] = useState('main');

    // useEffect(() => {
    //     fetch("https://server.studiomodvis.com/api/invite?token=" + params.token, {
    //         credentials: 'include',
    //     })
    //     .then(res => {
    //        res.ok ? setPageContent('success') : setPageContent('invalid');
    //     });
    // }, []);

    const acceptFriendRequest = () => {
        setPageContent('requestProccesed');
    }

    const declineFriendRequest = () => {
        setPageContent('requestProccesed')
    }

    const buttons = isSignedIn ?
        <div className="flex gap-6">
            <button className="py-4 lg:py-[0.875rem] w-48 colored-button flat border border-white font-bold" onClick={acceptFriendRequest}>ACCEPT</button>
            <button className="py-4 lg:py-[0.875rem] w-48 border border-white font-bold bg-white bg-opacity-0 hover:bg-opacity-10 rounded-lg transition-all duration-200" onClick={declineFriendRequest}>DECLINE</button>
        </div> :
        <button className="py-4 lg:py-[0.875rem] px-12 colored-button border border-white font-bold">SIGN UP & INSTALL</button>

        let contentToLoad = 
        <>
            <img src="/images/invite/bg-models.png" alt="" className="fixed w-[65vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"/>
                <div className="flex flex-col items-center">
                <div className="relative rounded-lg overflow-hidden border-[2px] border-white bounce mb-12" onClick={(e) => {e.stopPropagation()}}>
                    <img src="https://d14ark9aqgb2wf.cloudfront.net/profile/@tudor-vizbl-f9d94325.png" alt="profile image" className="w-[9.5rem]"/>
                </div>
                <p className="font-bold text-[4rem] leading-[140%] mb-12 text-center">@TUDOR-242 <br/> WANTS TO BE FRIENDS ON ViZBL </p>
                <p className="text-gray text-2xl font-bold leading-[140%] text-center mb-12"> This person wants to share their YouTube activity with you. <br/> Maybe they’ll also interact with you for much more fun.</p>
                {buttons}
            </div>
        </>;

        if (pageContent === 'requestProccesed') contentToLoad = <LinkState title="WE HAVE PROCESSED YOUR CHOICE" text="Your response was recorded in the extension." text2="Thank you for your time." succes={true} />; 

    return(
        <div className="w-screen h-screen relative flex justify-center items-center">
            <img src="/images/bg.png" alt="background" className="absolute left-0 top-0 w-full h-full object-cover -z-10"/>
            <img src="/images/logo.png" alt="logo" className="absolute left-[4.5rem] top-12 w-[8.3vw] max-w-40" />
            {contentToLoad}
        </div>
    )
}