import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="text-3xl font-bold p-4">Welcome to Home Page</div>
          <div> Client Page: Interactive client-side rendering in action</div>
          <div> Server Page: Optimized static content for SEO</div>
        </div>
      </div>
    </div>
  );
}
