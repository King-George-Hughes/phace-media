import { NavBar, Footer, Headings } from "@/components";

export default function Home() {
  return (
    <main className="w-full">
      <NavBar />

      <section className="px-5">
        <h1 className="text-md text-center my-3">Trending</h1>
        <img src="images/be Heard thumbnail 1.png" alt="" className="w-full" />
        <Headings title={"Up Coming Events"} subtitle={"Projects"} />
      </section>

      <section className="bg-gray-400">
        <div className="container"></div>
      </section>

      <Footer />
    </main>
  );
}
