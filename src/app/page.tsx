import { ResultsGrid } from '@/components/results/ResultsGrid';
import { StartExam } from '../components/ui/StartExam';

export const metadata = {
 title: 'Simulador AZ-900 para mi Yess Emosa',
 description: 'Simulador AZ-900 para mi Yess Emosa',
};

export default function Home() {
  return (
    <main>

      <section className="w-full rounded-md max-w-[1000px] mt-[80px] m-auto bg-gray-200 p-[40px]">
          <span>
            <h2 className="font-bold text-center text-gray-600">Comenzar Simulador</h2>
          </span>
          <span>
            <p className="text-gray-500 text-justify">
              El examen de certificación AZ-900 es una prueba de conocimientos
              básicos sobre los servicios en la nube y su implementación en
              Microsoft Azure. Este simulador te ayudará a prepararte para el
              examen, proporcionándote preguntas de práctica y recursos útiles.
            </p>
          </span>
          <span>
            <p className="text-gray-500 text-justify">
              Una vez enviada cada respuesta, no podrás volver a cambiarla.
            </p>
          </span>
          <span>
            <p className="text-gray-500 text-justify">
              Las preguntas son aleatorias, el resultado se mostrará al
              finalizar el examen y podrás ver las respuestas correctas e
              incorrectas.
            </p>
          </span>

          <StartExam/>
        
      </section>


      <section className="w-full rounded-md max-w-[1000px] mt-[80px] m-auto bg-gray-200 p-[40px] flex flex-col flex-wrap">
        <span>
          <h2 className="font-bold text-start text-gray-600">
            Ultimos Resultados
          </h2>
        </span>
        <ResultsGrid />
      </section>
    </main>
  );
}
