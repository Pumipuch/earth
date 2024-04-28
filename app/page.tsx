import { Nav } from "@/components/Nav";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";

export default function Home() {

  return (
    <>
      <Header name="EARTH_ZA" href="card"/>

      <Nav />

      <div className={"container mx-auto py-6"}>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <img className="rounded-lg w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQSCLsUmXfn1BCO68GDKX2k6IvV0YPqG9uA&s"></img>
            <p className="text-center">earth</p>
          </div>
          <div className="col-span-2">
            <p>About</p>
          </div>
          <div>
            <p>statistics</p>
          </div>
        </div>
      </div>
    </>
  );
}
