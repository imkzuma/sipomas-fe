import { Avatar, Breadcrumb, Button, Layout, Space, theme } from 'antd';
import Sidebar from '@/components/sidebar'; 

const { Header, Content, Footer } = Layout;

type DashboardLayout = {
    title : String;
    children : JSX.Element;
};

export default function DashboardLayout({ title, children } : DashboardLayout){
    return (
        <Layout style = {{ minHeight: '100vh' }}>
            <Sidebar />

            <Layout className="site-layout" style = {{background: "#f3f5f9"}}>
                <Header className = 'bg-white shadow-sm d-flex justify-content-between align-items-center py-0 px-3'>
                    <Space direction='horizontal' size='large' align='center'>
                        <h4 className='my-auto fw-900'>{ title }</h4>
                    </Space>
                    <Space 
                        direction='horizontal' 
                        size='large' 
                        align='center'
                    >   
                        <Space.Compact direction='vertical' size='small'>

                        </Space.Compact>
                        <Avatar size='large' style={{ backgroundColor: '#87d068' }}>U</Avatar>
                    </Space>
                </Header>

                <Content>
                    <div style = {{ minHeight: "100vh" }}>
                        { children }
                    </div>
                </Content>

                <Footer className='text-center bg-white'>&copy; 2023 SIPOMAS. All right reserved.</Footer>

            </Layout>
        </Layout>
    );
};
