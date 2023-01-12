import { useState, useEffect, useRef } from "react";
import Select from "react-select";
import "./TaxCalculator.css";

// Select component options
const options = [
  { label: "Monthly", value: "monthly" },
  { label: "Annual", value: "anual" },
  { label: "Rental", value: "rental" },
];

export default function TaxCalculator() {
  const [state, setState] = useState({
    taxType: { label: "Monthly", value: "monthly" },
    anualIncome: 0,
    anualTax: 0,
  });

  const calculatePressed = useRef(false);

  useEffect(() => {
    console.log("state is", state);
  }, [state]);

  // All tax calculation takes place in this function
  const taxCalculation = () => {
    if (state.taxType.value === "monthly" || state.taxType.value === "anual") {
      if (state.anualIncome <= 600000) {
        setState({ ...state, anualTax: 0 });
      } else if (state.anualIncome > 600000 && state.anualIncome <= 1200000) {
        setState({
          ...state,
          anualTax: parseInt((state.anualIncome - 600000) * 0.025),
        });
      } else if (state.anualIncome > 1200000 && state.anualIncome <= 2400000) {
        setState({
          ...state,
          anualTax: parseInt(15000 + (state.anualIncome - 1200000) * 0.125),
        });
      } else if (state.anualIncome > 2400000 && state.anualIncome <= 3600000) {
        setState({
          ...state,
          anualTax: parseInt(165000 + (state.anualIncome - 2400000) * 0.2),
        });
      } else if (state.anualIncome > 3600000 && state.anualIncome <= 6000000) {
        setState({
          ...state,
          anualTax: parseInt(405000 + (state.anualIncome - 3600000) * 0.25),
        });
      } else if (state.anualIncome > 6000000 && state.anualIncome <= 12000000) {
        setState({
          ...state,
          anualTax: parseInt(1005000 + (state.anualIncome - 6000000) * 0.325),
        });
      } else if (state.anualIncome > 12000000) {
        setState({
          ...state,
          anualTax: parseInt(2955000 + (state.anualIncome - 12000000) * 0.35),
        });
      }
    } else if (state.taxType.value === "rental") {
      if (state.anualIncome < 600000) {
        setState({ ...state, anualTax: 0 });
      } else if (state.anualIncome > 600000 && state.anualIncome <= 800000) {
        setState({
          ...state,
          anualTax: parseInt((state.anualIncome - 600000) * 0.05),
        });
      } else if (state.anualIncome > 800000 && state.anualIncome <= 1200000) {
        setState({
          ...state,
          anualTax: parseInt(10000 + (state.anualIncome - 800000) * 0.125),
        });
      } else if (state.anualIncome > 1200000 && state.anualIncome <= 2400000) {
        setState({
          ...state,
          anualTax: parseInt(60000 + (state.anualIncome - 1200000) * 0.175),
        });
      } else if (state.anualIncome > 2400000 && state.anualIncome <= 3000000) {
        setState({
          ...state,
          anualTax: parseInt(270000 + (state.anualIncome - 2400000) * 0.225),
        });
      } else if (state.anualIncome > 3000000 && state.anualIncome <= 4000000) {
        setState({
          ...state,
          anualTax: parseInt(405000 + (state.anualIncome - 3000000) * 0.275),
        });
      } else if (state.anualIncome > 4000000 && state.anualIncome <= 6000000) {
        setState({
          ...state,
          anualTax: parseInt(680000 + (state.anualIncome - 4000000) * 0.325),
        });
      } else if (state.anualIncome > 6000000) {
        setState({
          ...state,
          anualTax: parseInt(1330000 + (state.anualIncome - 6000000) * 0.35),
        });
      }
    }
  };

  return (
    <>
      <div className="TaxCalculator" id="calculate-tax-section">
        <h3 className="text-center">Income Tax Calculator</h3>
        {/* ===Form===      */}
        <div className="inputStyles d-flex justify-content-around calculator">
          {/* ====Input=== */}
          <div className="inputStylesRow d-flex flex-column align-items-center inputsec">
            {/* ---Select field--- */}
            <Select
              className="select"
              size="lg"
              options={options}
              onChange={(event) => {
                if (
                  (event.value === "anual" || event.value === "rental") &&
                  state.taxType.value === "monthly" &&
                  state.anualIncome > 0
                ) {
                  setState({
                    ...state,
                    taxType: event,
                    anualIncome: state.anualIncome / 12,
                    anualTax: 0,
                  });
                  return;
                } else if (
                  event.value === "monthly" &&
                  (state.taxType.value === "anual" ||
                    state.taxType.value === "rental") &&
                  state.anualIncome > 0
                ) {
                  setState({
                    ...state,
                    taxType: event,
                    anualIncome: state.anualIncome * 12,
                    anualTax: 0,
                  });
                  return;
                }
                setState({ ...state, taxType: event, anualTax: 0 });
              }}
              value={state.taxType}
            />
            &nbsp;
            {/* ---Input field--- */}
            <input
              className="input"
              type="number"
              size="lg"
              placeholder="Enter Income"
              onChange={(event) => {
                const value = parseInt(event.target.value.replace(/\D/g, ""));
                if (state.taxType.value === "monthly") {
                  setState({
                    ...state,
                    anualIncome: value * 12,
                    anualTax: 0,
                  });
                } else {
                  setState({
                    ...state,
                    anualIncome: value,
                    anualTax: 0,
                  });
                }
              }}
            />{" "}
            &nbsp;
            {/* ----Button--- */}
            <button
              className="btn btn-success"
              onClick={() => {
                calculatePressed.current = true;
                taxCalculation();
              }}
            >
              Calculate
            </button>
          </div>
          {/* ====end Input=== */}
          {/* ====output=== */}
          <div className="inputStyles  d-flex flex-col align-items-center">
            {/* ----Monthly---- */}
            <div className=" inputStyles d-flex flex-column mr-3">
              <h5>Monthly</h5>
              {/* ------- */}
              <span>Income</span>
              <div className="box">
                {(calculatePressed.current
                  ? Math.floor(state.anualIncome / 12)
                  : 0) || 0}
              </div>
              {/* ------- */}
              <span>Tax</span>
              <div className="box">
                {(calculatePressed.current
                  ? Math.floor(state.anualTax / 12)
                  : 0) || 0}
              </div>
              {/* ------- */}
              <span>Income After Tax </span>
              <div className="box">
                {(calculatePressed.current && state.anualIncome > 0
                  ? Math.floor(state.anualIncome / 12 - state.anualTax / 12)
                  : 0) || 0}
              </div>
              {/* ------- */}
            </div>
            {/* ----Yearly output--- */}
            <div className=" inputStyles d-flex flex-column">
              <h5>Yearly</h5>

              {/* ------- */}
              <span>Income</span>
              <div className="box">
                {(calculatePressed.current
                  ? Math.floor(state.anualIncome)
                  : 0) || 0}
              </div>
              {/* ------- */}
              <span>Tax</span>
              <div className="box">
                {(calculatePressed.current ? Math.floor(state.anualTax) : 0) ||
                  0}
              </div>
              {/* ------- */}
              <span>Income After Tax</span>
              <div className="box">
                {(calculatePressed.current && state.anualIncome > 0
                  ? Math.floor(state.anualIncome - state.anualTax)
                  : 0) || 0}
              </div>
              {/* ------- */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
