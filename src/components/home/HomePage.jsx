import React from "react";
import { Layout, Button, Row, Col, Card, Carousel } from "antd";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import {
  Game1,
  Game2,
  Game3,
  Game4,
  HomePageSlider1,
  HomePageSlider2,
  HomePageSlider3,
} from "@/constants/imageURL";

const featuredGames = [
  {
    title: "Ludo King",
    image: Game1,
  },
  {
    title: "Cricket Clash",
    image: Game2,
  },
  {
    title: "Hearts Card Game",
    image: Game3,
  },
  {
    title: "Soletaire",
    image: Game4,
  },
];

const carouselItems = [
  {
    image: HomePageSlider1,
    title: "Welcome to GameZone",
    subtitle: "The ultimate gaming arena",
  },
  {
    image: HomePageSlider2,
    title: "Join the Battle Today",
    subtitle: "Compete with gamers worldwide",
  },
  {
    image: HomePageSlider3,
    title: "Level Up Your Skills",
    subtitle: "Explore new challenges every day",
  },
];

const HomePage = () => {
  return (
    <Layout className="homepage-layout">
      <Content className="homepage-content">
        <Carousel autoplay>
          {carouselItems.map(({ image, title, subtitle }, index) => (
            <div
              key={index}
              className="hero-slide"
              style={{ position: "relative" }}
            >
              <div
                style={{ width: "100%", height: "300px", position: "relative" }}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                />
              </div>
              <div className="carousel-text">
                <Title
                  className="hero-title"
                  level={2}
                  style={{ color: "#fff" }}
                >
                  {title}
                </Title>
                <p className="hero-subtitle">{subtitle}</p>
              </div>
            </div>
          ))}
        </Carousel>

        <div className="section">
          <Title level={2} className="section-title">
            Featured Games
          </Title>
          <Row gutter={[16, 16]}>
            {featuredGames.map((game, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card
                  hoverable
                  cover={
                    <div
                      style={{
                        width: "100%",
                        height: "180px",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={game.image}
                        alt={game.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  }
                >
                  <Meta title={game.title} />
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div className="section">
          <Title level={2} className="section-title">
            Latest News
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card title="New Expansion Released">
                <Paragraph>
                  Explore new worlds and gear up for battle in the latest
                  expansion pack.
                </Paragraph>
                <Button type="primary">Read More</Button>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Tournament Announced">
                <Paragraph>
                  Join the global competition with over $1M in prizes. Register
                  now!
                </Paragraph>
                <Button type="primary">Register</Button>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default HomePage;
