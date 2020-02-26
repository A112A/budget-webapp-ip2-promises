import React from "../../node_modules/@types/react";
import InputBudget from "./InputBudget";
import InputExpenses from "./InputExpenses";
import DisplayBudget from "../display/DisplayBudget";
import Navbar from "../navbar";
import "../App.css";
const Budget = () => {
  return (
    <div>
      <div className="App">
        <Navbar />
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-4">
              <InputBudget />
              <InputExpenses />
            </div>
            <div className="col-lg-8">
              <DisplayBudget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
