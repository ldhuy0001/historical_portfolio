import React, { useRef, useState } from "react";
import { NumericFormat } from "react-number-format";

const StockSelectionInputs = () => {
  const [percentages, setTotalPercentages] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    totalPercent: 0,
  });

  return (
    <>
      <h3>
        Current % (must add up to 100%):
        <span
          style={{ color: percentages.totalPercent > 100 ? "red" : "black" }}
        >
          {percentages.totalPercent}
        </span>
      </h3>
      <NumericFormat
        isAllowed={(values) => {
          const { formattedValue, floatValue } = values;
          return formattedValue === "" || floatValue <= 100;
        }}
        onValueChange={(values) => {
          setTotalPercentages((prevPercentages) => {
            return {
              ...prevPercentages,
              value1: values.floatValue,
              totalPercent:
                values.floatValue +
                prevPercentages.value2 +
                prevPercentages.value3 +
                prevPercentages.value4,
            };
          });
        }}
      />
      <NumericFormat
        isAllowed={(values) => {
          const { formattedValue, floatValue } = values;
          return formattedValue === "" || floatValue <= 100;
        }}
        onValueChange={(values) => {
          setTotalPercentages((prevPercentages) => {
            return {
              ...prevPercentages,
              value2: values.floatValue,
              totalPercent:
                values.floatValue +
                prevPercentages.value1 +
                prevPercentages.value3 +
                prevPercentages.value4,
            };
          });
        }}
      />
      <NumericFormat
        isAllowed={(values) => {
          const { formattedValue, floatValue } = values;
          return formattedValue === "" || floatValue <= 100;
        }}
        onValueChange={(values) => {
          setTotalPercentages((prevPercentages) => {
            return {
              ...prevPercentages,
              value3: values.floatValue,
              totalPercent:
                values.floatValue +
                prevPercentages.value1 +
                prevPercentages.value2 +
                prevPercentages.value4,
            };
          });
        }}
      />
      <NumericFormat
        isAllowed={(values) => {
          const { formattedValue, floatValue } = values;
          return formattedValue === "" || floatValue <= 100;
        }}
        onValueChange={(values) => {
          setTotalPercentages((prevPercentages) => {
            return {
              ...prevPercentages,
              value4: values.floatValue,
              totalPercent:
                values.floatValue +
                prevPercentages.value1 +
                prevPercentages.value2 +
                prevPercentages.value3,
            };
          });
        }}
      />
    </>
  );
};

export default StockSelectionInputs;
