import React from "react";
import { decode } from "html-entities";

export default function Question({data}) {
    return (
      <div className="question">
          {decode(data)}
      </div>
    )
}