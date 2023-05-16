import { useState, Key, ReactNode } from 'react';

import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: ReactNode,
    key: Key,
    icon?: ReactNode,
    children?: MenuItem[],

) : MenuItem { return { key, icon, children, label, } as MenuItem }

const items: MenuItem[] = [
    getItem(
        <Link href = "/dashboard/admin" className = "text-decoration-none">Overview</Link>, 
        '/dashboard/admin', 
        <PieChartOutlined />
    ),
    getItem('Option 2', '2', <DesktopOutlined />),

    getItem('User', 'users', <UserOutlined />, [
        getItem(
            <Link href = "/dashboard/admin/add-user" className = "text-decoration-none">Add User</Link>, 
            '/dashboard/admin/add-user',
        ),
        getItem(
            <Link href = "/dashboard/admin/edit-user" className = "text-decoration-none">Edit User</Link>, 
            '/dashboard/admin/edit-user',
        ),
    ]),

    getItem('Posts Management', 'posts', <FileOutlined />, [
        getItem(
            <Link href = "/dashboard/admin/posts" className = "text-decoration-none">View Posts</Link>,
            '/dashboard/admin/posts'
        ),
        getItem(
            <Link href = "/dashboard/admin/create-posts" className = "text-decoration-none">Create Posts</Link>,
            '/dashboard/admin/create-posts'
        ),
    ]),

];
export default function Sidebar(){
    const router = useRouter();
    const pathName = router.pathname;

    const [collapsed, setCollapsed] = useState(false);
    return(
        <Sider 
            width = { 320 }
            collapsible 
            collapsed = { collapsed } 
            onCollapse={ (value) => setCollapsed(value) }
            theme = "light"
        >
            <div style = {{ position:"sticky", top: "1rem" }}>
                <div>
                    {
                        !collapsed ? 
                        <h4 className = "text-center py-3 fw-900 text-dark"><span className = 'bg-primary rounded px-2 text-white me-1'>SI</span>POMAS</h4>
                        :
                        <h4 className = "text-center py-3 fw-900 text-dark"><span className = 'bg-primary rounded px-2 text-white'>SI</span></h4>
                    }
                </div>
                <Menu 
                    theme="light" 
                    defaultSelectedKeys = {[ pathName ]} 
                    defaultOpenKeys={['users' , 'posts']}
                    mode="inline" 
                    items = { items } 
                    className='border-0 px-3'
                />
            </div>
        </Sider>
    )
}