import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color='red' onClick={() => console.log('Clicked')}>
      asdasdasd
    </ChildAsFC>
  );
};
export default Parent