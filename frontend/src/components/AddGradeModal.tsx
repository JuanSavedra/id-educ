import React, { useState, Fragment } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';

interface AddGradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AddGradeModal({isOpen, onClose}: AddGradeModalProps) {
  const [formData, setFormData] = useState({
    subject: '',
    grade: '',
    publishedDate: '',
    semester: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Nota adicionada com sucesso! (Verifique o console)');
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Adicionar Nova Nota
                </DialogTitle>
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Matéria</label>
                    <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Nota</label>
                    <input type="number" name="grade" id="grade" value={formData.grade} onChange={handleChange} required step="0.1" min="0" max="10" className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label htmlFor="publishedDate" className="block text-sm font-medium text-gray-700">Data de Publicação</label>
                    <input type="date" name="publishedDate" id="publishedDate" value={formData.publishedDate} onChange={handleChange} required className="mt-1 w-full p-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label htmlFor="semester" className="block text-sm font-medium text-gray-700">Semestre</label>
                    <select name="semester" id="semester" value={formData.semester} onChange={handleChange} required className="mt-1 w-full p-2 border border-gray-300 rounded-md">
                      <option value="">Selecione...</option>
                      <option value="2025.1">1º Semestre</option>
                      <option value="2025.2">2º Semestre</option>
                    </select>
                  </div>
                  <div className="mt-6 flex justify-end space-x-2">
                    <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200">
                      Cancelar
                    </button>
                    <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                      Adicionar Nota
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddGradeModal;