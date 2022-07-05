function App() {
  return (
    <div>
      <h1>{process.env.NODE_ENV}</h1>
      <p>{process.env.REACT_APP_API_URL}</p>
      {process.env.NODE_ENV === 'production' && (
        <>
          <h2>production</h2>
        </>
      )}
      
    </div>
  );
}

export default App;
