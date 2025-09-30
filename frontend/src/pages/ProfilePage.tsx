import React from 'react';
import { useUser } from '../context/UserContext';

function ProfilePage() {
  const { profile, setProfile } = useUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Meu Perfil</h1>
      <div className="bg-white rounded-xl shadow-md p-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="registration" className="block text-sm font-medium text-gray-700">
              Matrícula
            </label>
            <input
              type="text"
              id="registration"
              name="registration"
              value={profile.registration}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">
              Curso
            </label>
            <input
              type="text"
              id="course"
              name="course"
              value={profile.course}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={profile.cpf}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="pt-4">
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;