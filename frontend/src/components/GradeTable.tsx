interface Grade {
  id: string,
  subject: string,
  grade: number,
  semester: string,
  publishedAt: string
}

interface GradeTableProps {
  grades: Grade[]
}

function GradeTable({ grades }: GradeTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone: 'UTC'
    });
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">Histórico de Notas Detalhado</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Matéria</th>
              <th scope="col" className="px-6 py-3 text-center">Nota</th>
              <th scope="col" className="px-6 py-3 text-center">Semestre</th>
              <th scope="col" className="px-6 py-3 text-center">Publicado em</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(grades) && grades.map((grade) => {
              const gradeColorClass = grade.grade > 5
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800';

              return (
                <tr key={grade.id} className="bg-white border-b hover:bg-gray-50">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {grade.subject}
                  </th>
                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 font-bold rounded-md ${gradeColorClass}`}>
                      {grade.grade.toFixed(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">{grade.semester}</td>
                  <td className="px-6 py-4 text-center">{formatDate(grade.publishedAt)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GradeTable;
