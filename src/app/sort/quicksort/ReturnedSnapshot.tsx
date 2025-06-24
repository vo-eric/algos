import type { Snapshot } from "./quicksort";

export default function ReturnedSnapshot({ snapshot }: { snapshot: Snapshot }) {
  const { result } = snapshot;

  return <div>{result?.join(", ")}</div>;
}
