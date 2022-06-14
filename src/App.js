import { Suspense, lazy } from 'react';
import Loading from 'components/Loading';
import Header from 'components/Header/Header';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import { DoughnutChart } from 'components/Doughnut/Doughtnut';
import DiagramTable from 'components/DiagramTable';

const DashboardPage = lazy(() =>
  import('pages/DashboardPage' /* webpackChunkName: "dashboard-page" */),
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      {/* <DoughnutChart />
      <DiagramTable />

      <RegistrationPage /> */}
      <DashboardPage />
    </Suspense>
  );
}

export default App;
