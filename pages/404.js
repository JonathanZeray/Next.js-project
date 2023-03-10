import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000)
    }, [])

    return (
        <>
        <Head>
          <title>Vanichaya Beauty Care | Wrong Page</title>
          <meta name="keywords" content="Beauty Care" />
        </Head>
        <div className="not-found">
            <h1>Ooops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/">Homepage</Link> </p>
        </div>
        </>
    );
}
 
export default NotFound;