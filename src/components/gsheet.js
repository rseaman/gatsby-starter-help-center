import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";

// see custom component in remark: https://using-remark.gatsbyjs.org/custom-components/#possibilities
// see for google sheets import: https://medium.com/vowel-magic/how-to-fetch-data-from-google-sheets-with-react-and-tabletop-js-ca0e9d2ab34b

export default function Gsheet() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1KCFj9qp69W6UR0SLa6p5oiogUAYKSuEBtDoau0Av8b8",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <>
      <br />
      {data.map((item, i) => (
        <Fragment key={i}>
          Jurisdiction: {item.Jurisdiction}
          County: {item.County}
          Office: {item.Office}
          <br />
        </Fragment>
      ))}
    </>
  );
}
