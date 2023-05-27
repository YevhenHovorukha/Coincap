import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";

const formatNumber = (number) => {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1) + " Billion";
  } else if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + " M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + " K";
  } else {
    return number.toString();
  }
};

const columns = [
  {
    title: "Information",
    dataIndex: "information",
  },
  {
    title: "Cyrrency Data",
    dataIndex: "currencyData",
  },
];

const TableCurrentCurrency = ({ id }) => {
  const navigate = useNavigate();
  const coinData = useSelector((state) => state.coinData.data);

  const currentCoin = coinData ? coinData.find((item) => item.id === id) : null;

  if (!currentCoin) {
    navigate("/");
  }

  const objCoinForTable = currentCoin
    ? {
        ["Price"]: `${(+currentCoin.priceUsd).toFixed(2)}$`,
        ["Market Cap"]: formatNumber(currentCoin.marketCapUsd) + `$`,
        ["Max Supply"]: currentCoin.maxSupply
          ? formatNumber(currentCoin.maxSupply) + `$`
          : null,
        ["Total Supply"]: formatNumber(currentCoin.supply) + `$`,
        ["Trading volume per 24 hours"]:
          formatNumber(currentCoin.volumeUsd24Hr) + `$`,
        ["Average price by trading volume for 24 hours"]: `${(+currentCoin.vwap24Hr).toFixed(
          2
        )}$`,
        ["Percent price change in 24 hours"]: `${(+currentCoin.changePercent24Hr).toFixed(
          2
        )}%`,
      }
    : null;

  const arrCoin = currentCoin
    ? Object.entries(objCoinForTable).map((item) => {
        return { information: item[0], currencyData: item[1], key: item[0] };
      })
    : null;

  return (
    <Table
      columns={columns}
      dataSource={arrCoin}
      pagination={false}
      style={{ width: "50%" }}
    />
  );
};
export default TableCurrentCurrency;