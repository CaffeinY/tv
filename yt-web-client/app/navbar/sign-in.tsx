'use client';
// it is a client side component allow to use js

import { Fragment } from "react";

import { signInWithGoogle, signOut } from "../utils/firebase/firebase";
import styles from "./sign-in.module.css";
import { User } from "firebase/auth";

interface SignInProps {
    user: User | null;
}

export default function SignIn({ user }: SignInProps) {


    return (
        // no need to render
        <Fragment>
            {
                user ?
                    (
                        <button className={styles.signin} onClick={signOut}>
                            Sign Out
                        </button>
                    ) : (
                        <button className={styles.signin} onClick={signInWithGoogle}>
                            Sign In
                        </button>
                    )
            }
        </Fragment>
    )
}