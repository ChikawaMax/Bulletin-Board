import BBSCardlist from "./components/BBSCardlist";
import { InputForm } from "./components/InputForm";
import { BBSData } from "./types/types";

async function getBBSAllData() {
  const response = await fetch("https://bulletin-board-ten.vercel.app/api/post", {
    cache: "no-store",
  });

  const bbsAllData: BBSData[] = await response.json();
  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();

  return (
    <main>
      <BBSCardlist bbsAllData={bbsAllData} />
      <InputForm />
    </main>
  );
}
