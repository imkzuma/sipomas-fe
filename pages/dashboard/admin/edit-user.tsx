import EditUserComponents from "@/components/dashboard/admin/editUser";
import DashboardLayout from "@/layouts/dashboard";
import Head from "next/head";

export default function EditUser(){
    return(
        <>
            <Head>
                <title>SIPOMAS | Edit User</title>
            </Head>
            <main>
                <DashboardLayout title = "Edit User">
                    <EditUserComponents />
                </DashboardLayout>
            </main>
        </>
    )
}