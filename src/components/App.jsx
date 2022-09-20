import Phonebook from './Phonebook/Phonebook';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Phonebook />
    </div>
  );
};
