import React, { useState } from 'react';
import Remainder from './Remainder';
import { chartData } from '../../components/Charts/data';
import LineChart from '../../components/Charts/LineChart';
import patients from '../../assets/patients.png';
import doctors from '../../assets/doctor-vector1.jpg';
import rooms from '../../assets/rooms.png';
import CountUp from 'react-countup';

const ReceptionistDashboard = () => {
  const [chartDataState, setChartDataState] = useState({
    labels: chartData.map(data => data.month),
    datasets: [
      {
        label: 'Payment gained',
        data: chartData.map(data => data.hospitalGain),
        backgroundColor: ['green', 'blue'],
      },
    ],
  });
  return (
    <div className="grid grid-cols-6 gap-1">
      <div className=" m-6 col-span-4">
        <div className="flex flex-wrap flex-1 my-6 p-6 bg-white border rounded shadow">
          <div className="flex border items-center rounded shadow w-60 bg-blue-200 p-2 mx-2">
            {/* <PeopleAltIcon fontSize="large" /> */}
            <img className="w-16 h-16" src={patients} alt="patients" />
            <div className="flex flex-col mx-2 items-center p-4">
              <CountUp
                className="text-blue-700 text-3xl font-medium mb-3"
                start={0}
                end={1320}
                duration={2.5}
                delay={0}
              />
              <span className="text-sm text-gray-500">Total Patients</span>
            </div>
          </div>
          <div className="flex border items-center rounded shadow w-60 bg-blue-200 p-2 mx-2">
            <img className="w-12 h-12" src={doctors} alt="patients" />
            <div className="flex flex-col mx-2 items-center p-4">
              <CountUp
                className="text-blue-700 text-3xl font-medium mb-3"
                start={0}
                end={25}
                duration={2.5}
                delay={0}
              />
              <span className="text-sm text-gray-500">Available Doctors</span>
            </div>
          </div>
          <div className="flex border items-center rounded shadow w-60 bg-blue-200 p-2 mx-2">
            <img className="w-12 h-12" src={rooms} alt="patients" />
            <div className="flex flex-col mx-2 items-center p-4">
              <CountUp
                className="text-blue-700 text-3xl font-medium mb-3"
                start={0}
                end={2750}
                duration={2.5}
                delay={0}
              />
              <span className="text-sm text-gray-500">Total Rooms</span>
            </div>
          </div>
        </div>
        <div>
          <span>Payment Statistics</span>
          <div>
            <LineChart
              chartData={chartDataState}
              setChartData={setChartDataState}
            />
          </div>
        </div>
        <div>
          <span>Today's Payment</span>
          <div className="my-2 bg-white h-80 border rounded shadow">
            <div>...</div>
          </div>
        </div>
      </div>
      <div className="col-span-2 border rounded shadow m-6 h-screen bg-white">
        <Remainder />
      </div>
    </div>
  );
};

export default ReceptionistDashboard;
