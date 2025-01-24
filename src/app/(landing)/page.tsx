import {
  Header,
  Hero,
  TopBar,
  Features,
  Testimonials,
} from "@/app/(landing)/_components";

export default function Home() {
  return (
    <main>
      <TopBar />
      <Header />
      <Hero />
      {/* <section className="flex h-20 w-full items-center bg-text">
        <div className="mx-auto flex h-full w-full max-w-[1650px] items-center justify-between overflow-x-hidden px-4">
          <div className="animate-move-text flex space-x-96 whitespace-nowrap font-bricolage text-4xl font-medium text-bw">
            <span>dool</span>
            <span>microsoft</span>
            <span>google</span>
            <span>amazon</span>
            <span>vercel</span>
            <span>netflix</span>
            <span>gumroad</span>
            <span>openai</span>
            <span>anthropic</span>
          </div>
        </div>
      </section> */}
      <div className="w-full border-b" />
      <Features />
      <div className="w-full border-b" />
    </main>
  );
}
