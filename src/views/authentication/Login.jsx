import React, {useState} from "react";

import {Button, Form, Grid, Input, theme, Typography} from "antd";

import {LockOutlined, MailOutlined} from "@ant-design/icons";

const {useToken} = theme;
const {useBreakpoint} = Grid;
const {Text, Title, Link} = Typography;


function ForgotPass({setForgotPassword}) {
    return (<div>
        <Form.Item
            name="email"
            rules={[
                {
                    type: "email",
                    required: true,
                    message: "Please input your Email!",
                },
            ]}
        >
            <Input
                prefix={<MailOutlined style={{color: '#9181F4'}}/>}
                placeholder="Email"
            />
        </Form.Item>
        <Form.Item style={{marginBottom: "0px"}}>
            <Button style={{background: '#9181F4', height: '40px'}} block="true" type="primary"
                    htmlType="submit">
                Send
            </Button>

            <Text onClick={() => setForgotPassword(false)} style={{color: '#9181F4'}}>back to login</Text>
        </Form.Item>
    </div>)
}


export default function Login() {
    const [forgotPassword, setForgotPassword] = useState(false)
    const {token} = useToken();
    const screens = useBreakpoint();

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };


    const styles = {
        container: {
            margin: "0 auto",
            padding: screens.md ? `${token.paddingXL}px` : `${token.sizeXXL}px ${token.padding}px`,
            width: "380px"
        },
        footer: {
            marginTop: token.marginLG,
            textAlign: "center",
            width: "100%",


        },
        forgotPassword: {
            float: "right",
            color: "#9181F4"
        },
        header: {
            marginBottom: token.marginXL
        },
        section: {
            margin: '0 auto',
            alignItems: "center",
            backgroundColor: token.colorBgContainer,
            display: "flex",
            height: screens.sm ? "100vh" : "auto",
            // padding: screens.md ? `${token.sizeXXL}px 0px` : "0px"
        },
        text: {
            color: token.colorTextSecondary
        },
        title: {
            color: "#9181F4",
            gap: "2px",

            fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3
        }
    };

    return (
        <div style={{display: 'flex', backgroundColor: 'white'}}>
            <div style={{width: '40%', height: '100vh', background: '#9181F4',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img style={{width: '70%'}} src={'/illustration.svg'}/>
            </div>
            <section style={styles.section}>
                <div style={styles.container}>
                    <div style={styles.header}>
                        <img src={'/logo.svg'}/><br/>
                        {!forgotPassword ? <Text style={styles.text}>
                            Welcome to message...
                        </Text> : <Text style={styles.text}>
                            Type your email and get the link
                            to set a new password
                        </Text>}
                    </div>
                    {!forgotPassword ? <Form
                        name="normal_login"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        layout="vertical"
                        requiredMark="optional"
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    type: "email",
                                    required: true,
                                    message: "Please input your Email!",
                                },
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined style={{color: '#9181F4'}}/>}
                                placeholder="Email"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Password!",
                                },
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined style={{color: '#9181F4'}}/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item style={{marginBottom: "0px"}}>
                            <Button style={{background: '#9181F4', height: '40px'}} block="true" type="primary"
                                    htmlType="submit">
                                Log in
                            </Button>
                            <Form.Item>

                                <a style={styles.forgotPassword} onClick={() => setForgotPassword((true))}>
                                    Forgot password?
                                </a>
                            </Form.Item>
                            <div style={styles.footer}>
                                <Text style={styles.text}>Don't have an account?</Text>{" "}
                                <Link href="" style={{color: "#9181F4"}}>Sign up now</Link>
                            </div>
                        </Form.Item>
                    </Form> : <ForgotPass setForgotPassword={setForgotPassword}/>}

                </div>
            </section>
        </div>

    );
}


// const defaultValues = {
//     password: '',
//     loginEmail: ''
// }

