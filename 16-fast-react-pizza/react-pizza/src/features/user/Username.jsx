import { useSelector } from 'react-redux';

function Username() {
  const userName = useSelector((state) => state.user.username);
  console.log(userName);

  if (!userName) return null;
  return <div className="text-sm font-semibold md:block">{userName}</div>;
}

export default Username;
