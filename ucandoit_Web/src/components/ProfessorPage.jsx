import ProfessorHeader from './ProfessorHeader';
import ProfessorProfile from './ProfessorProfile';
import EmploymentHistory from './EmploymentHistory';

const ProfessorPage = () => (
  <div className="professor-container">
    <ProfessorHeader />
    <ProfessorProfile />
    <EmploymentHistory />
  </div>
);

export default ProfessorPage;
