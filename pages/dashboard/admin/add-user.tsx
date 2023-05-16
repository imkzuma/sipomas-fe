import AddUserComponent from "@/components/dashboard/admin/addUser";
import DashboardLayout from "@/layouts/dashboard";
import Head from "next/head";

export default function AddUser(){
    return(
        <>
            <Head>
                <title>SIPOMAS | Create User</title>
            </Head>

            <main>
                <DashboardLayout title = "Add User">
                    <AddUserComponent />
                </DashboardLayout>
            </main>
        </>
    )
}