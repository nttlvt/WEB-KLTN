import axios from 'axios'
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
// import { GoogleLogin } from '@react-oauth/google';
// import { googleLogout } from '@react-oauth/google';
export const Login = () => {
    // googleLogout();
    const navigate = useNavigate()
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        console.log('Login', username, password)

        try {
            const data = await axios.get('https://65ef0ed3ead08fa78a4fa959.mockapi.io/api/User')
            console.log(data)
            const index = data.data.findIndex(value => value.username === username && value.password === password);
            if (index != -1) {
                navigate('/')
                console.log('thanh cong')
            }
            else { console.log('that bai') }

        } catch (error) {
            console.log(error);
        }


    }
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                    <div className="flex flex-col justify-center p-8 md:p-14">
                        <span className="mb-3 text-4xl font-bold">Welcome</span>
                        <div className="py-4">
                            <span className="mb-2 text-md">User name</span>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" placeholder='User name' onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div className="py-4">
                            <span className="mb-2 text-md">Password</span>
                            <input type="password" name="pass" id="pass" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="flex justify-between w-full py-4">
                            <div className="mr-24 ">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-md">Remember for 30 days</span>
                            </div>
                            <button className="font-bold text-md">Forgot password ?</button>
                        </div>
                        <button className="w-full bg-sky-500 text-white p-2 rounded-lg mb-6 hover:bg-sky-600"
                            onClick={() => handleLogin()}>
                            Đăng nhập
                        </button>
                        <button className="w-full flex justify-center gap-6 items-center border border-gray-300 text-md p-2 rounded-lg mb-6">

                            <FcGoogle value={{ style: { width: '100px' } }}></FcGoogle>

                            Sign in with Google
                        </button>
                        {/* <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}

                        /> */}

                        <div className="text-center text-gray-400">
                            Dont'have an account?
                            <span className="font-bold text-black">Sign up for free</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
