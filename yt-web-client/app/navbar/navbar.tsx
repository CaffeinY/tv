'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';
import SignIn from './sign-in';
import { onAuthStateChangedHelper } from '../utils/firebase/firebase';
import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import Upload from './upload';
import { getUserInfo } from "../utils/firebase/functions";


export default async function Navbar() {
    // init user state
    const [user, setUser] = useState<User | null>(null);


    useEffect(() => {
        const unsubscribe = onAuthStateChangedHelper((user) => {
            setUser(user);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    });


    return (
        <nav className={styles.nav}>

            {/* by default, it will look for public */}
            <Link href="/">
                <span className={styles.logoContainer}>
                    <Image width={150} height={100}
                        src="/FGTV-LOGO.png" alt="FGTV Logo" />
                </span>
            </Link>

            {
                user  && <Upload />
            }


            <SignIn user={user} />
        </nav>
    );
}