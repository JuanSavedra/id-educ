import { useState, Fragment } from "react"
import { Combobox, Transition } from '@headlessui/react'
import { mbtiList } from '../data/mbtiData'
import type { Mbti } from '../data/mbtiData' 

function MbtiSelector() {
  const [selectedMbti, setSelectedMbti] = useState<Mbti | null>(mbtiList[0]);
  const [query, setQuery] = useState('');

  const filteredMbtis =
    query === ''
      ? mbtiList
      : mbtiList.filter((mbti) =>
          (mbti.type.toLowerCase() + ' ' + mbti.name.toLowerCase())
            .includes(query.toLowerCase())
        );

  const handleSelectionChange = (mbti: Mbti | null) => {
    setSelectedMbti(mbti);
    setQuery('');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Seletor de MBTI</h1>

        <Combobox value={selectedMbti} onChange={handleSelectionChange} nullable>
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-500">
              
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                displayValue={(mbti: Mbti | null) => mbti ? `${mbti.type} - ${mbti.name}` : ''}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Pesquise por tipo ou nome..."
              />

              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>
              </Combobox.Button>
            </div>
            
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {filteredMbtis.length === 0 && query !== '' ? (
                  <div className="cursor-default select-none py-2 px-4 text-gray-700">
                    Nenhum resultado encontrado.
                  </div>
                ) : (
                  filteredMbtis.map((mbti) => (
                    <Combobox.Option
                      key={mbti.id}
                      className={({ active }) => `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'bg-blue-600 text-white' : 'text-gray-900'}`}
                      value={mbti}
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                            {mbti.type} - {mbti.name}
                          </span>
                          {selected ? (
                            <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-blue-600'}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>

        <div className="mt-6 border-t pt-4 min-h-[80px]">
          {selectedMbti ? (
            <div>
              <h2 className="text-xl font-semibold text-blue-600">{selectedMbti.type} - {selectedMbti.name}</h2>
              <p className="mt-2 text-gray-700">{selectedMbti.description}</p>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p>Nenhum tipo de personalidade selecionado.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MbtiSelector;