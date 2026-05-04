import React from "react";
import Link from "next/link";

const notFound = () => {
    return (
        <div className="flex flex-col bg-[#3c94af] items-center justify-center min-h-screen text-center px-4">
            <h1 className="text-9xl font-black text-[#a98181]">404</h1>

            <p className="text-2xl font-bold tracking-tight text-[#312622] sm:text-4xl mt-4">
                Uh-oh!
            </p>

            <p className="mt-4 text-[#4a3535]">
                We can&apos;t find that page.
            </p>

            <Link href={"/"}>
                <button className="mt-6 inline-block rounded bg-[#4a3535] px-5 py-3 text-sm font-medium text-white hover:bg-[#7e6161] focus:outline-none focus:ring">
                    Go Back Home
                </button>
            </Link>
        </div>
    );
}
export default notFound;