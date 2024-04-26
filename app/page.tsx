import Image from "next/image";
import Day2 from "./day2/page";
import Day3 from "./day3/page";
import Day1 from "./day1/page";
import Day4 from "./day4/page";
import Day5 from "./day5/page";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 z-10">
      <Day1 />
      <Day2 />
      <Day3 />
      <Day4 />
      <Day5 />
    </main>
  );
}
