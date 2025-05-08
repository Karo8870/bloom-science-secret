'use server';

import {redirect} from "next/navigation";

export async function checkPassword(pass: string) {
    if (pass === '5328') {
        redirect('/secret.jpeg');

        return true;
    } else {
        return false;
    }
}