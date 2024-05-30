import Maintenance from "@/components/layout/Maintenance";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      { process.env.APP_STATUS=='development' &&
          <Maintenance />
      }
    </main>
  );
}
