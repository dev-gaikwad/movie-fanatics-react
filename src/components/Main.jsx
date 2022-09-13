import { useContext } from 'react';
import ContentContext from '../context/ContentContext';
import ContentTile from './ContentTile';

function Main() {
  const { contentList } = useContext(ContentContext);

  return (
    <main className='main'>
      {contentList.map((content) => (
        <ContentTile key={content.id} content={content} />
      ))}
    </main>
  );
}

export default Main;
