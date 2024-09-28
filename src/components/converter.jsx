import React, { useEffect, useState } from "react";
import Field from './field';
import Currency from "./currency";
import currencyValues from "./currencyvalues";

export default function Converter() {
  const [currencies, setCurrencies] = useState([]);
  const [from, setFrom] = useState("");
  const [fromDisplay, setFromDisplay] = useState("");
  const [to, setTo] = useState("");
  const [toDisplay, setToDisplay] = useState("");
  const [amount, setAmount] = useState("");
  const [amountDisplay, setAmountDisplay] = useState();
  const [result, setResult] = useState();
  const [fromTo, setFromTo] = useState();
  const [toFrom, setToFrom] = useState();
  const [isResult, setIsResult] = useState(false);

  useEffect(() => {
    setCurrencies(currencyValues);
    setFrom(currencyValues[0].name);
    setTo(currencyValues[1].name);
  },[])

  function handleChange(e) {
    if(e.target.name === 'from') setFrom(e.target.value)
    if(e.target.name === 'to') setTo(e.target.value)
    if(e.target.name === 'amount') setAmount(e.target.value)
  }

  function handleSubmit(e){
    setAmountDisplay(amount);
    setFromDisplay(from);
    setToDisplay(to);
    e.preventDefault();
    const fromValue = currencies.filter((currency) => (currency.name === from))[0].value;
    const toValue = currencies.filter((currency) => (currency.name === to))[0].value;
    setResult(
      (amount * (toValue/fromValue)).toFixed(2)
    )
    setFromTo(
      (toValue/fromValue).toFixed(3)
    )
    setToFrom(
      (fromValue/toValue).toFixed(3)
    )
    setIsResult(true);
  }

  return (
    <div id="converter">
      <form onSubmit={handleSubmit}>
          <Field name="Amount" id="amount" type="number" change={handleChange} />
          <Currency currencies={currencies} name="from" change={handleChange} currentFrom={from} />
          <Currency currencies={currencies} name="to" change={handleChange} currentTo={to} />
          <input type="submit" value="Exchange" className={isResult ? "active-button" : null}/>
          {isResult ?
           <>
            <h3 className="result">{amountDisplay} {fromDisplay} = {result} {toDisplay}</h3>
            <h3 className="result from-to">1 {fromDisplay} = {fromTo} {toDisplay}</h3>
            <h3 className="result to-from">1 {toDisplay} = {toFrom} {fromDisplay}</h3>
           </>
           
           
           : null}
      </form>
    </div>
  );
}