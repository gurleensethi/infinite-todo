import React, { FunctionComponent } from "react";

type TRBL = { left?: number; right?: number; top?: number; bottom?: number };

type Props = {
  children: React.ReactElement;
  margin?: number | TRBL;
  padding?: number | TRBL;
} & React.HTMLAttributes<HTMLElement>;

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

const Spacing: FunctionComponent<Props> = ({
  children,
  margin,
  padding,
  ...restProps
}) => {
  const normalizedMargin = normalizeValues(margin);
  const normalizedPadding = normalizeValues(padding);

  return (
    <div
      style={{ margin: normalizedMargin, padding: normalizedPadding }}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Spacing;
