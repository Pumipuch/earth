"use client"

import { Nav } from "@/components/Nav";
import { Header } from "@/components/Header";

export default function Home() {

  return (
    <>
      <Header name="Passakon Puttasuwan"/>

      <Nav />

      <div className={"container mx-auto py-6"}>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <img className="rounded-lg w-full" src="https://placehold.co/400"></img>
            <p className="text-center">earth</p>
          </div>
          <div className="col-span-2">
            <p>eeee</p>
          </div>
          <div>
            <p>eeee</p>
          </div>
        </div>
      </div>
    </>
  );
}
