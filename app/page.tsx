import Maintenance from "@/components/layout/Maintenance";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      { Boolean(process.env.DEVELOPMENT_MODE) &&
          <Maintenance />
      }
    </main>
  );
}
