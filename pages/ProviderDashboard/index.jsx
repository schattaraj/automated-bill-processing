import ProviderMenu from "@/components/ProviderMenu";
import ProviderHeader from "@/components/ProviderHeader";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import DBCard from "@/components/DBCard";
import Link from "next/link";
import Footer from "@/components/Footer";
import BarChart from "@/components/BarChart";
import { useState } from "react";
import { months } from "@/utils/constants";
import withAuth from "@/components/withAuth";
function ProviderDashboard() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const handleChange = (event) => {
    const month = event.target.value;
    setSelectedMonth(month);
  };
  const claimSettlementOption = {
    chart: {
      type: 'column',
      height: 450, // Increase height of the chart
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],
      title: {
        text: '',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
      },
      labels: {
        formatter: function () {
          return this.value / 1000 + 'K'; // Format y-axis labels
        },
      },
    },
    legend: {
        layout: 'horizontal',
        align: 'right',
        verticalAlign: 'top', // Position the legend at the top
        floating: false, // Allow the legend to float
        y: 10, // Adjust vertical position
        itemMarginBottom: 10, // Space between legend items
      },
    plotOptions: {
        column: {
          grouping: true,
          pointPadding: 0, // Decrease the gap between bars
          borderWidth: 0,
          borderWidth: 0,
          borderRadius: 0,
        },
      },
    series: [
        {
            name: 'Claim Settled',
            data: [10000, 20000, 30000, 40000, 50000, 60000, 50000, 40000, 30000, 20000, 40000, 50000],
            color: '#39409A',
          },
          {
            name: 'Claim In Progress',
            data: [15000, 25000, 35000, 45000, 55000, 60000, 55000, 44000, 55000, 60000, 30000, 55000],
            color:'#00B33C',
          },
          {
            name: 'Claim Pending',
            data: [20000, 30000, 40000, 50000, 60000, 30000, 40000, 55000, 60000, 50000, 40000, 55000],
            color:'#F30808',
          },
    ],
  };
  const documentIntegratedOption = {
    chart: {
      type: 'column',
      height: 450, // Increase height of the chart
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: [
        '1st Week',
        '2nd Week',
        '3rd week',
        '4th week',
        '5th week',
    ],
      title: {
        text: '',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
      },
    },
    legend: {
        layout: 'horizontal',
        align: 'right',
        verticalAlign: 'top', // Position the legend at the top
        floating: false, // Allow the legend to float
        y: 10, // Adjust vertical position
        itemMarginBottom: 10, // Space between legend items
      },
    plotOptions: {
        column: {
          grouping: true,
          pointPadding: 0, // Decrease the gap between bars
          borderWidth: 0,
          borderWidth: 0,
          borderRadius: 0,
        },
      },
    series: [
        {
            name: 'Integrated',
            data: [500, 300, 130, 100,""],
            color: '#39409A',
          },
          {
            name: 'Upload',
            data: [200, 400, 190, 20,""],
            color:'#00B33C',
          },
    ],
  };
  return (
    <>
      <ProviderHeader />
      <div className="provider-dashboard">
        <div className="container">
          <ProviderMenu />
          <Swiper
            modules={[Navigation]}
            spaceBetween={18}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
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
          >
            <SwiperSlide><DBCard title={"12.5K"} description={"Document Processed"} img={"/icons/file.svg"} link={"/"} /></SwiperSlide>
            <SwiperSlide><DBCard title={"20"} description={"Awating processing"} img={"/icons/processing.svg"} link={"/"} /></SwiperSlide>
            <SwiperSlide><DBCard title={"1.8K"} description={"Processing Error"} img={"/icons/alert.svg"} link={"/"} /></SwiperSlide>
            <SwiperSlide><DBCard title={"8.56K"} description={"Integrated To Eoxegen"} img={"/icons/integrated.svg"} link={"/"} /></SwiperSlide>
            <SwiperSlide><DBCard title={"5.47K"} description={"Pending Integration to eoxegen"} img={"/icons/pending-integration.svg"} link={"/"} /></SwiperSlide>
            <SwiperSlide><DBCard title={"452"} description={"Integration Error"} img={"/icons/error.svg"} link={"/"} hoverImage={"/icons/error-white.svg"} /></SwiperSlide>
          </Swiper>
          <div className="section2">
            <div className="row">
              <div className="col-lg-8 order-2 order-lg-1">
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
                        <img src="/icons/avg-tat-analysis/file.svg" alt="" />
                      </div>
                      <div className="line">
                        <span className="days">2 Days</span>
                        <img src="/icons/avg-tat-analysis/upload.svg" alt="" />
                      </div>
                      <div className="line">
                        <span className="days">5 Days</span>
                        <img src="/icons/avg-tat-analysis/adjudicated.svg" alt="" className="first-image" />
                        <img src="/icons/avg-tat-analysis/payment.svg" alt="" className="second-image"/>
                      </div>
                    </div>
                    <div className="names">
                      <div className="name">Claim Mode</div>
                      <div className="name"><span>Claim Upload</span></div>
                      <div className="name"><span>Claim Adjudicated</span><span>Claim Payment</span></div>          </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 order-1 order-lg-2">
                <h6 className="heading">Recent Activity</h6>
                <ul className="recent-activity">
                  <li>
                    <div className="description">
                      <h4 className="name">DR. Shruti bhoir</h4>
                      <p className="info">Send report for verification</p>
                    </div>
                    <div className="date-time">
                      <p className="date">24 April 2024</p>
                      <span className="time">1.30 PM</span>
                    </div>
                  </li>
                  <li>
                    <div className="description">
                      <h4 className="name">DR. Shruti bhoir</h4>
                      <p className="info">Send report for verification</p>
                    </div>
                    <div className="date-time">
                      <p className="date">24 April 2024</p>
                      <span className="time">1.30 PM</span>
                    </div>
                  </li>
                  <li>
                    <div className="description">
                      <h4 className="name">DR. Shruti bhoir</h4>
                      <p className="info">Send report for verification</p>
                    </div>
                    <div className="date-time">
                      <p className="date">24 April 2024</p>
                      <span className="time">1.30 PM</span>
                    </div>
                  </li>
                  <li>
                    <div className="description">
                      <h4 className="name">DR. Shruti bhoir</h4>
                      <p className="info">Send report for verification</p>
                    </div>
                    <div className="date-time">
                      <p className="date">24 April 2024</p>
                      <span className="time">1.30 PM</span>
                    </div>
                  </li>
                  <li>
                    <div className="description">
                      <h4 className="name">DR. Shruti bhoir</h4>
                      <p className="info">Send report for verification</p>
                    </div>
                    <div className="date-time">
                      <p className="date">24 April 2024</p>
                      <span className="time">1.30 PM</span>
                    </div>
                  </li>
                  <li>
                    <div className="description">
                      <h4 className="name">DR. Shruti bhoir</h4>
                      <p className="info">Send report for verification</p>
                    </div>
                    <div className="date-time">
                      <p className="date">24 April 2024</p>
                      <span className="time">1.30 PM</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="chart-area">
            <div className="row">
              <div className="col-lg-7">
                <div className="claim-settlement card">
                  <div className="flex">
                    <h6 className="heading">Claim Settlement in Year</h6>
                    <select
                      className="form-select"
                      value={selectedMonth}
                      onChange={handleChange}
                      style={{
                        padding: '8px 10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        cursor: 'pointer',
                        fontSize: '16px',
                        backgroundColor: "#fff",
                        color: "#000"
                      }}
                    >
                      <option key={"month"} value={""}>
                          Month
                        </option>
                      {months.map((month, index) => (
                        <option key={index} value={month}>
                          {month}
                        </option>
                      ))}
                    </select>
                  </div>
                  <BarChart options={claimSettlementOption}/>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="card document-integrated">
                <h6 className="heading">Documents Integrated in Current Month</h6>
                <BarChart options={documentIntegratedOption}/>
                </div>
              </div>
            </div>
          </div>
          <div className="section4">
            <div className="table-container">
              <div className="flex">
                <h6 className="heading">Recent Claim Reported</h6>
                <Link href={"/"}>View All</Link>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Patient Name</th>
                      <th>Age</th>
                      <th>Disease Description</th>
                      <th>Invoice No</th>
                      <th>Invoice Amount</th>
                      <th>Date of Admit</th>
                      <th>Contact No</th>
                      <th>Dr in Charge</th>
                      <th>Document Status</th>
                      <th>Insurance Corporates</th>
                      <th>Principal Member</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Patrika Mumbi Gacukia</td>
                      <td>43</td>
                      <td>Heart</td>
                      <td>AAR-INV/2023559640</td>
                      <td>2,10,000</td>
                      <td>10-03-2005</td>
                      <td>9546457511</td>
                      <td>Dr. Preeti Jabbal</td>
                      <td>Proceed</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Piya jonn smiths</td>
                      <td>24</td>
                      <td>Brain</td>
                      <td>AAR-INV/2023559640</td>
                      <td>2,10,21</td>
                      <td>12-03-2005</td>
                      <td>546461454</td>
                      <td>Dr. nila shahanj</td>
                      <td>Proceed</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Nil Nithesh kathiwala</td>
                      <td>50</td>
                      <td>ortho</td>
                      <td>AAR-INV/2023559640</td>
                      <td>854611</td>
                      <td>16-03-2005</td>
                      <td>87967546</td>
                      <td>Dr. kuldip sing</td>
                      <td>Pending</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Piya jonn smiths</td>
                      <td>24</td>
                      <td>Brain</td>
                      <td>AAR-INV/2023559640</td>
                      <td>2,10,000</td>
                      <td>10-03-2005</td>
                      <td>9546457511</td>
                      <td>Dr. Preeti Jabbal</td>
                      <td>Proceed</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Nil Nithesh kathiwala</td>
                      <td>50</td>
                      <td>ortho</td>
                      <td>AAR-INV/2023559640</td>
                      <td>854611</td>
                      <td>16-03-2005</td>
                      <td>87967546</td>
                      <td>Dr. kuldip sing</td>
                      <td>Pending</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Piya jonn smiths</td>
                      <td>24</td>
                      <td>Brain</td>
                      <td>AAR-INV/2023559640</td>
                      <td>2,10,000</td>
                      <td>10-03-2005</td>
                      <td>9546457511</td>
                      <td>Dr. Preeti Jabbal</td>
                      <td>Proceed</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Nil Nithesh kathiwala</td>
                      <td>50</td>
                      <td>ortho</td>
                      <td>AAR-INV/2023559640</td>
                      <td>854611</td>
                      <td>16-03-2005</td>
                      <td>87967546</td>
                      <td>Dr. kuldip sing</td>
                      <td>Pending</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Piya jonn smiths</td>
                      <td>24</td>
                      <td>Brain</td>
                      <td>AAR-INV/2023559640</td>
                      <td>2,10,21</td>
                      <td>12-03-2005</td>
                      <td>546461454</td>
                      <td>Dr. nila shahanj</td>
                      <td>Proceed</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Patrika Mumbi Gacukia</td>
                      <td>43</td>
                      <td>Heart</td>
                      <td>AAR-INV/2023559640</td>
                      <td>2,10,000</td>
                      <td>10-03-2005</td>
                      <td>9546457511</td>
                      <td>Dr. Preeti Jabbal</td>
                      <td>Proceed</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                    <tr>
                      <td>Piya jonn smiths</td>
                      <td>24</td>
                      <td>Brain</td>
                      <td>AAR-INV/2023559640</td>
                      <td>2,10,000</td>
                      <td>10-03-2005</td>
                      <td>9546457511</td>
                      <td>Dr. Preeti Jabbal</td>
                      <td>Proceed</td>
                      <td>Bupa International</td>
                      <td>Self</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default withAuth(ProviderDashboard, ['PROVIDER']);