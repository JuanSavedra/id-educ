import MbtiSelector from "../components/MbtiSelector";
import { useUser } from "../context/UserContext";

const profilePicture = 'https://i.pravatar.cc'

function MbtiPage() {
  const { profile } = useUser();

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6 flex items-center space-x-6">
          <img
            src={profilePicture}
            alt="Foto do Aluno"
            className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
            <p className="text-md text-gray-600">{profile.course}</p>
            <p className="text-md text-gray-600">Matrícula: {profile.registration}</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Seu MBTI</h3>
            <MbtiSelector />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MbtiPage
