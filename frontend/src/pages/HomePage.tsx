import GradeChart from "../components/GradeChart"
import MbtiSelector from "../components/MbtiSelector"
import OcurrencesChart from "../components/OcurrencesChart"
import { useUser } from "../context/UserContext";

function HomePage() {
  const { profile } = useUser();

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">Olá, {profile.name}!</h1>
        <h3 className="mt-2">Seja bem-vindo ao seu painel de autogestão.</h3>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 mt-6">
          Veja seus dashboards
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Notas
          </h2>
          <GradeChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Ocorrências
          </h2>
          <OcurrencesChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            MBTI
          </h2>
          <MbtiSelector />
        </div>
      </div>
    </div>
  )
}

export default HomePage