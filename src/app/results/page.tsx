import { ResultsTable } from "@/components/results/ResultsTable";

export default function ResultsPage() {
  return (
    <main>
      <section className="w-full rounded-md max-w-[1000px] mt-[80px] m-auto bg-gray-200 p-[40px]">
        <span className="w-full text-center">
          <h1 className="font-bold text-center margin-auto text-gray-600">
            Resultados
          </h1>
        </span>

        <ResultsTable />
      
      </section>
    </main>
  );
}
