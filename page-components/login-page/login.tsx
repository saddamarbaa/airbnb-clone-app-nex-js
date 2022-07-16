import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import {
	auth,
	GoogleAuthProvider,
	googleProvider,
	signInWithPopup,
} from '../../config'

export const LogInScreenComponent = () => {
	const router = useRouter()

	const signInWithGoogleHandler = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result)
				const token = credential?.accessToken
				// The signed-in user info.
				const user = result.user
				router.push('/')
				// console.log(result, user)
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code
				const errorMessage = error.message
				// The email of the user's account used.
				const email = error.customData.email
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error)
				alert(errorMessage)
			})
	}

	return (
		<div className="grid w-full min-h-screen place-items-center ">
			<div className="p-[100px] pt-[50px] items-center rounded-lg shadow-xl">
				<div
					className="w-[9rem] h-[9rem] m-l-[1.5rem]"
					style={{
						position: 'relative',
						cursor: 'pointer',
					}}>
					<Image
						className="logo-img"
						src="/images/Airbnb_Logo_Bélo.svg.png"
						alt="Picture of the youtube"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div>
					<h2 className="font-bold text-[1.5rem]">Sign in to Airbnb</h2>
				</div>

				<button
					className="mt-[80px] text-white text-xl px-4 py-4 rounded-md bg-red-500 hover:bg-red-700 transition duration-300 "
					onClick={signInWithGoogleHandler}>
					Sign In With Google
				</button>
			</div>
		</div>
	)
}

export default LogInScreenComponent
