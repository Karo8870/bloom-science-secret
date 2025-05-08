'use client';

import {useState} from "react";
import {checkPassword} from "@/api/api";

export default function Home() {
    const [password, setPassword] = useState<string>('');

    const [tried, setTried] = useState<boolean>(false);

    return (
        <main className='flex flex-col items-center w-full pt-20'>
            <div className='flex flex-col gap-10 items-center w-40'>
                <label>4 digit code</label>
                <input className='bg-white' onChange={(e) => {
                    setPassword(e.target.value);
                }}/>
                <button onClick={async () => {
                    const res = await checkPassword(password);

                    if (!res) {
                        setTried(true);
                    }
                }}>Submit
                </button>
                {tried && <p>Wrong password</p>}
            </div>
        </main>
    );
}
