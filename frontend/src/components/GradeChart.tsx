import React, { useState } from 'react'
import {
  Bar,
  BarChart,
  Legend,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const gradeChartDataFirst = [
  {
    Nome: 'M',
    Nota: 8,
  },
  {
    Nome: 'P',
    Nota: 3,
  },
  {
    Nome: 'H',
    Nota: 4,
  },
  {
    Nome: 'G',
    Nota: 8,
  },
  {
    Nome: 'C',
    Nota: 9,
  },
  {
    Nome: 'I',
    Nota: 7,
  },
  {
    Nome: 'EF',
    Nota: 10,
  },
];

const gradeChartDataSecond = [
  {
    Nome: 'M',
    Nota: 6,
  },
  {
    Nome: 'P',
    Nota: 8,
  },
  {
    Nome: 'H',
    Nota: 5,
  },
  {
    Nome: 'G',
    Nota: 7,
  },
  {
    Nome: 'C',
    Nota: 6,
  },
  {
    Nome: 'I',
    Nota: 7,
  },
  {
    Nome: 'EF',
    Nota: 9,
  },
];

function GradeChart() {
  type Semester = 's1' | 's2'

  const [selectedSemester, setSelectedSemester] = useState<Semester>('s1')
  const currentData = selectedSemester === 's1' ? gradeChartDataFirst : gradeChartDataSecond
  const handleSemesterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSemester(event.target.value as Semester)
  }

  return (
    <>
      <div className="mb-4 flex justify-start">
        <select
          value={selectedSemester}
          onChange={handleSemesterChange}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="s1">1º Semestre</option>
          <option value="s2">2º Semestre</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={currentData}
          margin={{
            top: 35,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Nome" />
          <Tooltip wrapperStyle={{ backgroundColor: '#333', color: '#fff' }} />
          <Legend />
          <Bar dataKey="Nota" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default GradeChart