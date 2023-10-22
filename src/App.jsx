import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const onMyTipChange = (value) => {
    setMyTip(Number(value));
  };
  const onFriendTipChange = (value) => {
    setFriendTip(Number(value));
  };
  const reset = () => {
    setBill(0);
    setMyTip(0);
    setFriendTip(0);
  };

  return (
    <div>
      <BillInput onChange={setBill} bill={bill} />
      <DiscountInput value={myTip} onChange={onMyTipChange} data={satisfaction}>
        How did you like your service?
      </DiscountInput>
      <DiscountInput
        value={friendTip}
        onChange={onFriendTipChange}
        data={satisfaction}
      >
        How did your friend like the service?
      </DiscountInput>
      <Result bill={bill} tip={myTip + friendTip} />
      <Reset reset={reset} />
    </div>
  );
}

const Result = ({ bill, tip }) => {
  const tipTotal = (tip * bill) / 200;
  const total = bill + tipTotal;
  return (
    <h2>
      You pay {total}$ ({bill}$ + {tipTotal}$)
    </h2>
  );
};

const BillInput = ({ bill, onChange }) => {
  return (
    <div>
      how much was the bill?{" "}
      <input
        type="text"
        value={bill}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};

const DiscountInput = ({ children, data, onChange, value }) => {
  return (
    <div>
      {children}{" "}
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {data.map((i) => {
          return (
            <option key={i.id} value={i.value}>
              {i.comment}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const Reset = ({ reset }) => {
  return (
    <div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

const satisfaction = [
  {
    id: 1,
    comment: "Dissatisfied (0%)",
    value: 0,
  },
  {
    id: 2,
    comment: "it was ok (5%)",
    value: 5,
  },
  {
    id: 3,
    comment: "it was good (10%)",
    value: 10,
  },
  {
    id: 4,
    comment: "Absolutly amazing (20%)",
    value: 20,
  },
];
