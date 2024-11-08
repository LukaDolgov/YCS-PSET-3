import './App.css';
import CustomButton from './CustomButton';
import CustomCard from './CustomCard';
import Box from './Box'

function App() {
  return (
    <>
      <h1>Custom Components Practice</h1>
      <CustomButton text="Click Me" bgcolor="cornflowerblue" alertMessage="you clicked me!" />
      <CustomCard title="My Card" description="this is my addition" extra_description="ooh, fancy" />
      <Box initialColor="lightcoral" hoverColor="red" width="150px" height="150px" />
      {/* Add your custom components here */}
    </>
  );
}

export default App;
