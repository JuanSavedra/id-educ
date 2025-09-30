import GradeChart from '../components/GradeChart';
import GradeTable from '../components/GradeTable';
import { useUser } from '../context/UserContext';
import AddGradeModal from '../components/AddGradeModal';
import { useState, useEffect } from 'react';

const profilePicture = 'https://i.pravatar.cc'

interface Grade {
  id: string;
  subject: string;
  grade: number;
  semester: string;
  publishedAt: string;
}

function GradePage() {
  const { profile } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [grades, setGrades] = useState<Grade[]>([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    fetch('http://localhost:7070/api/grades')
      .then(response => response.json())
      .then(data => setGrades(data))
      .catch(error => console.error('Erro ao buscar notas:', error)); 
  }, []);

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
            <h3 className="text-xl font-semibold text-gray-800">Quadro de Notas</h3>
            <p className="text-sm text-gray-500 mt-1 mb-4">Notas do período selecionado.</p>
            <GradeChart />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden mt-6">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Tabela de notas</h3>
            <GradeTable grades={grades} />
          </div>
        </div>
        <div className="text-center mt-6">
          <button
            onClick={openModal}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Adicionar Nova Nota
          </button>
        </div>
        <AddGradeModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default GradePage;
