import Header from '../components/Header';
import Card from '../components/shared/Cards';

function AboutPage() {
  return (
    <>
      <Header />
      <Card reverse={true}>
        <div className='container-center'>
          <h2>About this Project</h2>
        </div>
      </Card>
    </>
  );
}

export default AboutPage;
