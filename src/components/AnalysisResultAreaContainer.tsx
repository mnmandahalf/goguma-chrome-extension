import React, { useState, useEffect } from "react";
import { AnalysisResultArea } from "./AnalysisResultArea";

type PropType = {
  text: string
}

export const AnalysisResultAreaContainer: React.FC<PropType> = ({ text }) => {
  const [result, setResult] = useState({});
  const [isRequesting, setIsRequesting] = useState(true);
  const url = `https://api.goguma.jp/analyze?text=${text}`;
  useEffect(() => {
    setIsRequesting(true);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setResult(data);
        setIsRequesting(false);
      });
  }, [text]);
  return <AnalysisResultArea text={text} result={result} isRequesting={isRequesting}/>;
};
