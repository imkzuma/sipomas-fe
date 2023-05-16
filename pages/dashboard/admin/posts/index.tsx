import DashboardLayout from "@/layouts/dashboard";
import Head from "next/head";

export default function Posts(){
    return(
        <>
            <Head>
                <title>SIPOMAS | Dashboard Posts</title>
            </Head>

            <main>
                <DashboardLayout title = "Posts View">
                    <h1>test</h1>
                </DashboardLayout>
            </main>
        </>
    )
}