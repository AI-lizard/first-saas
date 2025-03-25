import FormNewBoard from "../components/FormNewBoard";

export default function Dashboard() {
  return (
    <main className="bg-base-200 min-h-screen">
      {/* Header */}
      <section>
        <div className="text-3xl font-bold text-center bg-base-100 px-4 py-2">
          Private Dashboard
        </div>
      </section>
      {/* Form New Board */}
      <section className="py-12 max-w-5xl mx-auto ">
        <FormNewBoard />
      </section>
    </main>
  );
}
