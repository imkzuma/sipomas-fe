import dynamic from "next/dynamic";
import Head from "next/head";
import { Skeleton } from "antd";

const OverviewComponents = dynamic(() => import("@/components/dashboard/admin/overview"), { loading: () => <Skeleton active /> });
const DashboardLayout = dynamic(() => import("@/layouts/dashboard"), { loading: () => <Skeleton active /> });

export default function AdminDashboardIndex(){
    return(
        <>
            <Head>
                <title>SIPOMAS | Admin Dashboard</title>
            </Head>

            <main>
                <DashboardLayout title = "Overview">
                    <OverviewComponents />
                </DashboardLayout>
            </main>
        </>
    )
}