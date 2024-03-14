import { NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
// 	return NextResponse.json({ message: "Hello form the about page." });
// 	return NextResponse.redirect(new URL("/", request.url));
// }

// // See "Matching Paths" below to learn more
// export const config = {
// 	matcher: "/about/:path*",
// };

export function middleware(request) {
	if (request.nextUrl.pathname.startsWith("/about1")) {
		return NextResponse.redirect(new URL("/about", request.url));
	}

	if (request.nextUrl.pathname.startsWith("/dashboard")) {
		return NextResponse.rewrite(new URL("/", request.url));
	}
}
