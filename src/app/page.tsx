import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex">
      <header className="w-screen shadow-lg">
        <div className="">
          <div className="w-1/4 flex justify-between bg-background rounded-lg m-3 ml-auto p-4 shadow">
            <Button variant="link" size="default">About this project!</Button>
            <Button variant="outline" size="icon"></Button>
            <Button variant="outline" size="icon"></Button>
          </div>
        </div>
      </header>
    </div>
  );
}
