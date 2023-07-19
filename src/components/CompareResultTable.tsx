import React, { useState, useEffect } from 'react';
import './compareResultTable.css';

function CompareResultTable(props: any) {
    const data: any = props.data;
    let rowNumber = 0;
    let rowBackground;

    return (
        <div className="table">
  <table cellPadding="10">
    <thead>
    <tr>
      <th>Ячейка</th>
      <th>Значения в ячейке в первом и втором документе</th>
    </tr>
      </thead>
    <tbody>
   {Object.keys(data).map(key => {
        if (rowNumber % 2 === 0) {
            rowBackground = "row-dark";
        } else {
            rowBackground = "row-light";
        }

        rowNumber++;
        
        return (
        <>
            <tr>
                <td className={rowBackground} rowSpan={2} align="center">{key}</td>
                <td className={rowBackground} align="center">{data[key]["doc1value"]}</td>
            </tr>
            <tr className={rowBackground}>
                <td align="center">{data[key]["doc2value"]}</td>
            </tr>
        </>
        );
    })}
      </tbody>
  </table>
   </div>
    )
}

export default CompareResultTable;