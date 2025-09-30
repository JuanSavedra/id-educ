import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, Tooltip, Legend, Bar } from "recharts"

function OcurrencesChart() {
  const ocurrencesChartData = [
    {
      Nome: 'Ja',
      Ocorrência: 3,
    },
    {
      Nome: 'Fe',
      Ocorrência: 1,
    },
    {
      Nome: 'Ma',
      Ocorrência: 1,
    },
    {
      Nome: 'Ab',
      Ocorrência: 4,
    },
    {
      Nome: 'Ma',
      Ocorrência: 2,
    },
    {
      Nome: 'Ju',
      Ocorrência: 1,
    },
    {
      Nome: 'Ju',
      Ocorrência: 6,
    },
    {
      Nome: 'Ag',
      Ocorrência: 1,
    },
    {
      Nome: 'Se',
      Ocorrência: 4,
    },
    {
      Nome: 'Ou',
      Ocorrência: 1,
    },
    {
      Nome: 'No',
      Ocorrência: 2,
    },
    {
      Nome: 'De',
      Ocorrência: 3,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={ocurrencesChartData}
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
        <Bar dataKey="Ocorrência" fill="#dc2626" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default OcurrencesChart