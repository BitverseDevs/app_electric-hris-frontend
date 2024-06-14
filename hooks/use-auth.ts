"use client"

import { useRouter } from "next/navigation"
import { useCookies } from 'next-client-cookies';
import { useEffect, useState } from "react";
import api from "@/utils/axios-config";

interface Token {
    refresh_token: string,
    access_token: string,
}

interface Login {
    username: string,
    password: string
}

export default function useAuth() {

    const router = useRouter()
    const cookies = useCookies();

    const [user, setUser] = useState<any>(null)
    
    const login = async (creds: Login) => {

        // LOGIN POST HERE AND GET RESPONSE AS TOKEN
        const payload = {
            username: creds.username,
            password: creds.password
        }

        return await api.post(`auth/login/`, payload).then(res => {

            const data: Token = {

                access_token: res.data.access,
                refresh_token : res.data.refresh
            }
            
            if(data?.access_token && data?.refresh_token) {

                storeToken(data)
                router.push("/")

            }

        }).catch(err => {throw err})

    }

    const logout = async () => {

        cookies.remove('access_token')
        cookies.remove('refresh_token')

        setUser(null);
        router.push("/login")
    }

    const storeToken = (responseToken:Token) => {

        const {access_token:accessToken, refresh_token:refreshToken} = responseToken

        cookies.set('access_token', accessToken,  { secure: true, sameSite: 'Strict' });
        cookies.set('refresh_token', refreshToken,  { secure: true, sameSite: 'Strict' });
    }

    return {
        login,
        logout,
        user
    }
}