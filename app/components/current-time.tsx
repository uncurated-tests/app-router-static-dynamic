import { headers } from "next/headers";

export async function CurrentTime(): Promise<JSX.Element> {
  const res = await fetch("https://httpbin.org/anything");
  const data = await res.json();

  console.log(res.ok, headers());

  return <div>Current time: {new Date().toLocaleTimeString()}</div>;
}

export function CurrentTimeSkeleton(): JSX.Element {
  return <div>Current time: Loading...</div>;
}
