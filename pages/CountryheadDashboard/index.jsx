import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CountryheadHeader from "@/components/CountryheadHeader";
import CountryheadMenu from "@/components/CountryheadMenu";
import DBCard from "@/components/DBCard";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import { IconButton } from "@mui/material";
import {
  countryData,
  documentIntegratedOption,
  recentActivity,
  sourceOfDocumentOptions,
  swiperDataCountryHead,
} from "@/utils/constants";
import dynamic from "next/dynamic";
import { Navigation } from "swiper/modules";
import withAuth from "@/components/withAuth";
// import DashBoardMap from "@/components/DashBoardMap";
const DashboardMap = dynamic(() => import("@/components/DashBoardMap"), {
  ssr: false,
});

const CountryheadDashboard = () => {
  const [providerCountry, setProviderCountry] = useState(0);
  const handleNext = () => {
    setProviderCountry((prevState) =>
      prevState === countryData.length - 1 ? 0 : prevState + 1
    );
  };
  const handlePrev = () => {
    setProviderCountry((prevState) =>
      prevState === 0 ? countryData.length - 1 : prevState - 1
    );
  };
  return (
    <>
      <CountryheadHeader />
      <div className="provider-dashboard">
        <div className="container">
          <CountryheadMenu label="Dashboard" />
          <div>
            <Swiper
              modules={[Navigation]}
              spaceBetween={18}
              slidesPerView={4.5}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                640: {
                  slidesPerView: 2, // for small screens
                },
                768: {
                  slidesPerView: 2, // for medium screens
                },
                1024: {
                  slidesPerView: 3, // for larger screens
                },
                1280: {
                  slidesPerView: 4.5, // for extra large screens
                },
              }}
              navigation
            >
              {swiperDataCountryHead.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <DBCard
                      title={item.title}
                      description={item.description}
                      img={item.img}
                      link={item.link}
                      hoverImage={item.hoverImage}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="section2">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <h6 className="heading">Claim Adjudicated Analysis</h6>
                  <div className="cards">
                    <div className="card-item">
                      <p>Adjudicated and Paid</p>
                      <span>8,650</span>
                    </div>
                    <div className="card-item">
                      <p>Adjudicated Awaiting Payment</p>
                      <span>9,613</span>
                    </div>
                    <div className="card-item">
                      <p>Required Additional Documentation</p>
                      <span>150</span>
                    </div>
                  </div>
                  <div className="avg-tat-analysis">
                    <h6 className="heading">Avg TAT Analysis</h6>
                    <div className="process-container">
                      <div className="process">
                        <div className="line">
                          <span className="days">1 Days</span>
                          <Image
                            height={48}
                            width={48}
                            src="/icons/avg-tat-analysis/file.svg"
                            alt=""
                          />
                        </div>
                        <div className="line">
                          <span className="days">2 Days</span>
                          <Image
                            height={48}
                            width={48}
                            src="/icons/avg-tat-analysis/upload.svg"
                            alt=""
                          />
                        </div>
                        <div className="line">
                          <span className="days">5 Days</span>
                          <Image
                            height={48}
                            width={48}
                            src="/icons/avg-tat-analysis/adjudicated.svg"
                            alt=""
                            className="first-image"
                          />
                          <Image
                            height={48}
                            width={48}
                            src="/icons/avg-tat-analysis/payment.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="names">
                        <div className="name">Claim Mode</div>
                        <div className="name">
                          <span>Claim Upload</span>
                        </div>
                        <div className="name">
                          <span>Claim Adjudicated</span>
                          <span>Claim Payment</span>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <h6 className="heading">Recent Activity</h6>
                  <ul className="recent-activity">
                    {recentActivity.map((item, index) => (
                      <li key={item.name + index}>
                        <div className="description">
                          <h4 className="name">{item.name}</h4>
                          <p className="info">{item.info}</p>
                        </div>
                        <div className="date-time">
                          <p className="date">{item.date}</p>
                          <span className="time">{item.time}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="chart-area">
              <div className="row">
                <div className="col-md-12 col-lg-7">
                  <Link
                    className="text-none"
                    href={
                      "/CountryheadDashboard/Source Of Documents Upload/DocumentUpload"
                    }
                  >
                    <div className="claim-settlement card admin-card">
                      <div className="flex">
                        <h6 className="admin-chart-heading">
                          Source Of Documents Upload/Received
                        </h6>
                        <KeyboardArrowRight />
                      </div>
                      <LineChart options={sourceOfDocumentOptions} />
                    </div>
                  </Link>
                </div>
                <div className="col-md-12 col-lg-5">
                  <Link
                    className="text-none"
                    href={
                      "/CountryheadDashboard/Document Integrated in month/DocumentIntegrated"
                    }
                  >
                    <div className="card admin-card document-integrated">
                      <h6 className="admin-chart-heading">
                        Documents Integrated in Month
                      </h6>
                      <BarChart options={documentIntegratedOption} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="empaneled-section">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="row">
                      <div className="col-md-12 empaneled-header">
                        <h6 className="heading admin-chart-heading">
                          Provider Empaneled
                        </h6>
                        <Link
                          className="empaneled-link"
                          href={"/CountryheadDashboard/ProviderEmpaneled/"}
                        >
                          View All
                        </Link>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-lg-8">
                        {/* <img className="climate-image" src="/icons/map.svg" /> */}
                        <DashboardMap />
                      </div>
                      <div className="col-md-12 col-lg-4">
                        <div className="list-area">
                          <ul className="provider-list">
                            <li>
                              <div className="provider-detail">
                                <div className="provider-country">
                                  <img
                                    src={`/icons/flags/${countryData[providerCountry].flag}`}
                                  />
                                  <span>
                                    {countryData[providerCountry].name}
                                  </span>
                                </div>
                                <div className="country-value">
                                  <span>
                                    {countryData[providerCountry].value}
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="provider-detail">
                                <span>Provider</span>
                                <span>Claim Provider</span>
                              </div>
                            </li>
                            {recentActivity.map((item, index) => (
                              <li key={item.name + index}>
                                <div className="provider-detail">
                                  <span className="provider-name">
                                    {item.name}
                                  </span>
                                  <span className="provider-value">
                                    {item.value}
                                  </span>
                                </div>
                              </li>
                            ))}
                            <li>
                              <div className="provider-detail">
                                <span className="provider-name">
                                  <IconButton
                                    onClick={handlePrev}
                                    sx={{ py: "5px", px: 0 }}
                                  >
                                    <KeyboardArrowLeft />
                                  </IconButton>
                                </span>
                                <span className="provider-name">
                                  <IconButton
                                    onClick={handleNext}
                                    sx={{ py: "5px", px: 0 }}
                                  >
                                    <KeyboardArrowRight />
                                  </IconButton>
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default withAuth(CountryheadDashboard, ["COUNTRY_HEAD"]);
