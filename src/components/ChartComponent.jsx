import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "@ant-design/plots";
import styled from "styled-components";

const StyledLineChart = styled(Line)`
  width: 50%;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const getData = (num) => {
  const timestamp = num;
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDateTime = `${year}-${month}-${day}`;

  return formattedDateTime;
};

function getDateInfo() {
  const today = new Date();
  const fiftyDaysAgo = new Date(today);
  fiftyDaysAgo.setDate(today.getDate() - 50);

  const currentTimestamp = today.getTime();
  const fiftyDaysAgoTimestamp = fiftyDaysAgo.getTime();

  return {
    current: currentTimestamp,
    fiftyDaysAgo: fiftyDaysAgoTimestamp,
  };
}

const ChartComponent = ({ id }) => {
  const [data, setData] = useState([]);
  const currentId = id;
  console.log(data);
  useEffect(() => {
    const fetchAssetHistory = async (id) => {
      const { current, fiftyDaysAgo } = getDateInfo();
      try {
        const response = await axios.get(
          `https://api.coincap.io/v2/assets/${id}/history?interval=d1`,
          {
            params: {
              start: fiftyDaysAgo,
              end: current,
            },
          }
        );
        setData(
          response.data.data.map((item) => {
            return {
              ...item,
              priceUsd: Number((+item.priceUsd).toFixed(2)),
              time: getData(item.time),
            };
          })
        );
      } catch (error) {
        console.log("Произошла ошибка:", error);
        throw error;
      }
    };
    fetchAssetHistory(currentId);
  }, [currentId]);

  const config = {
    data,
    xField: "time",
    yField: "priceUsd",
    lineStyle: {
      lineWidth: 2,
      stroke: "red", // Змініть на 'red' для червоного кольору
    },
    smooth: true,
  };

  return <StyledLineChart {...config} />;
};

export default ChartComponent;
