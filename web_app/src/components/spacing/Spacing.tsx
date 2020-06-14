import React, { FunctionComponent } from "react";

type TRBL = { left?: number; right?: number; top?: number; bottom?: number };

interface Props {
  children: React.ReactElement;
  margin?: number | TRBL;
  padding?: number | TRBL;
}

function normalizeValues(value?: number | TRBL): string {
  if (!value) {
    return "";
  }

  if (typeof value === "number") {
    return `${value}px`;
  }

  const { bottom, left, right, top } = value;

  return `${top || 0}px ${right || 0}px ${bottom || 0}px ${left || 0}px`;
}

const Spacing: FunctionComponent<Props> = ({ children, margin, padding }) => {
  const normalizedMargin = normalizeValues(margin);
  const normalizedPadding = normalizeValues(padding);

  return (
    <div style={{ margin: normalizedMargin, padding: normalizedPadding }}>
      {children}
    </div>
  );
};

export default Spacing;
