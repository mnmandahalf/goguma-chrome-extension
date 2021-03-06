import React from "react";
import classes from "./AnalysisResultArea.module.css";
import { Card, Skeleton } from "@mui/material";
import { Tokens } from "./Tokens";

type PropType = {
  text: string
  result: any
  isRequesting: boolean
}

export const AnalysisResultArea: React.FC<PropType> = ({ text, result, isRequesting }) => {
  return (
    <Card variant="outlined">
      <div className={classes.resultArea}>
        <span>テキスト</span>
        <p>
          <div>{text}</div>
        </p>
        <span>日本語訳</span>
        <p>
          { isRequesting ? <Skeleton /> : <div>{result.translation}</div>}
        </p>
        <span>発音</span>
        <p>
          { isRequesting ? <Skeleton /> : <div>{result.romanized}</div> }
        </p>
        <span>品詞分解</span>
        <p>
          <div>
            <Tokens tokens={result.tokens || []} isRequesting={isRequesting} />
          </div>
        </p>
      </div>
    </Card>
  );
};