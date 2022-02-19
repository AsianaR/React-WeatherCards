import { useState } from "react";
import "./SelectorDb.css";

const SelectorDb = () => {
    const arOptions = ['Kiev', 'Moscow', 'Misnk', 'Prague'];
   const [value, setValue] = useState('');

   const options = arOptions.map((text, index) => {
      return <option key={index}>{text}</option>;
   });

   return <div>
      <select value={value} onChange={(event) => setValue(event.target.value)}>
         {options}
      </select>
      <p>
         Выбрана опция: {value}
      </p>
   </div>;
}

export default SelectorDb;