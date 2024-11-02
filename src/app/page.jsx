import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link
        className="flex justify-center mx-auto w-1/4 my-48 neo"
        href="/contacts">
        <h1 className="text-3xl font-bold uppercase">Contacts Table</h1>
      </Link>
    </>
  );
}
