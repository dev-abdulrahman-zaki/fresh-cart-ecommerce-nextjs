import Products from "@/components/14Products/Products";

export const metadata = {
  title: "Home",
  description: "Home",
};


export default function Home() {
  return (
    <main className="home container py-5">
     <Products />
    </main>
  );
}
