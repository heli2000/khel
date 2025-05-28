"use client";
import Progress from "@/components/admin/Progress";
import {
    CrownOutlined,
    FileProtectOutlined,
    HddOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Flex, Rate, Row, Space, Typography } from "antd";
const { Title } = Typography;

export default function Home() {
    return (
        <Row gutter={16}>
            <Col span={24}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card>
                            <Flex align="center" gap={16}>
                                <div className="text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-red-200">
                                    <CrownOutlined />
                                </div>
                                <div>
                                    <Title level={4} style={{ marginBottom: 0 }}>
                                        24
                                    </Title>
                                    <Typography>Users</Typography>
                                </div>
                            </Flex>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <Flex align="center" gap={16}>
                                <div className="text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-green-200">
                                    <HddOutlined />
                                </div>
                                <div>
                                    <Title level={4} style={{ marginBottom: 0 }}>
                                        56
                                    </Title>
                                    <Typography>Tournaments</Typography>
                                </div>
                            </Flex>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <Flex align="center" gap={16}>
                                <div className="text-2xl flex items-center justify-center rounded-md h-12 w-12 bg-yellow-200">
                                    <FileProtectOutlined />
                                </div>
                                <div>
                                    <Title level={4} style={{ marginBottom: 0 }}>
                                        17
                                    </Title>
                                    <Typography>Active Users</Typography>
                                </div>
                            </Flex>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}