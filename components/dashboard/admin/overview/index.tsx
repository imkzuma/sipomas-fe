import { Skeleton } from "antd";
import dynamic from "next/dynamic";
import { Container } from "react-bootstrap";

const SectionOneOverview = dynamic(() => import("./sectionOne"), { loading: () => <Skeleton active />});
const TableUser = dynamic(() => import("./tableUser"), { loading: () => <Skeleton active />});
const HeaderOverview = dynamic(() => import("@/components/dashboard/welcomeDashboard"), { loading: () => <Skeleton active />});

export default function OverviewComponents(){
    return(
        <Container fluid className = 'py-4 px-5'>
            <HeaderOverview name = "Admin" role = "admin" />
            <SectionOneOverview />
            <TableUser />
        </Container>
    )
}