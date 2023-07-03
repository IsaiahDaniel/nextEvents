import React, { useRef } from "react";
import Button from "../ui/Button";

import classes from "../../styles/events-search.module.css";

export default function EventsSearch(props) {

  const monthInputRef = useRef();
  const yearlyInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("monthly value", monthInputRef.current.value);
    console.log("yearlt value", yearlyInputRef.current.value);

    const selectedMonth = monthInputRef.current.value;
    const selectedYear = yearlyInputRef.current.value;

    props.onSelectEvent(selectedMonth, selectedYear)

  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select name="" id="year" ref={yearlyInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select name="" id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">Febuary</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>
        Find Events
      </Button>
    </form>
  );
}
