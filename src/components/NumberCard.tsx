"use client";

import clsx from "clsx";

export default function NumberCard({
  number,
  id,
  // color,
}: {
  number: number;
  id: string;
  // color: string;
}) {
  return (
    <div id={id} className={clsx(`rounded-md border p-4`)}>
      {number}
    </div>
  );
}
