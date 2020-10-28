// import React, { useLayoutEffect } from 'react';

// const Status = ({ obj }) => {
//   // console.log(obj);
//   // console.log(Object.entries(obj));

//   for (const key in obj) { creatElem(key, obj[key]) }
//   // let str = ''
//   // console.log(str);
//   return (
//     <>
//       {
//       const creatElem = (label, quantity) => (
//       <li>
//         <span className="label">{label}</span>
//         <span className="quantity">{quantity}</span>
//       </li>)}
//     </>
//   )





//   export default Status;

//========================================================================
// import React, { useLayoutEffect } from 'react';

// const Status = (obj) => {
//   // <span className="label">Views</span>
//   // <span className="quantity">2000</span>
//   console.log(obj);
//   for (let key in obj) {
//     creatElem(key, obj[key])
//   }


//   // console.log(Object.entries(obj));
//   return function creatElem(key, value) {
//     const label = React.createElement('span', { class: "label" }, key);
//     const quantity = React.createElement('span', { class: "quantity" }, value);
//     const product = React.createElement('li', null, label, quantity,);

//     return (product)
//   }

//   // let str = ''
//   // console.log(str);




//   export default Status;

//====================================================================================================
import React from 'react';

const Status = ({ obj }) => {
  // console.log(obj);
  // console.log(Object.entries(obj));

  let str = ''
  for (const key in obj) {
    str += `
      <li>
        <span className="label">${key}</span>
        <span className="quantity">${obj[key]}</span>
      </li>` }
  // console.log(str);
  return (str)

  export default Status;