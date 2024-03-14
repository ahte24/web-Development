"use client"
import { SessionProvider } from "next-auth/react";

const sessionWrapper = ({children}) => {
	return (
		<SessionProvider>{children}</SessionProvider>
    )
}

export default sessionWrapper
