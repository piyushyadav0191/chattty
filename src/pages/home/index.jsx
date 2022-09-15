import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom'; // Add this

const Home = ( {username, setUsername, room, setRoom, socket}) => {
  const navigate = useNavigate(); // Add this

   // Add this
   const joinRoom = () => {
    if (room !== '' && username !== '') {
      socket.emit('join_room', { username, room });
    }
    navigate('/chat', { replace: true }); // Add this
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`<>DevRooms</>`}</h1>
        <input
          className={styles.input}
          placeholder='Username...'
          onChange={(e) => setUsername(e.target.value)} // Add this
        />

<select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)} // Add this
        >
          <option>-- Select Room --</option>
          <option value='javascript'>JavaScript</option>
          <option value='node'>Node</option>
          <option value='express'>Express</option>
          <option value='react'>React</option>
        </select>

        <button
          className='btn btn-secondary'
          style={{ width: '100%' }}
          onClick={joinRoom} // Add this
        >
          Join room 
          </button>

      </div>
    </div>
  );
};

export default Home;