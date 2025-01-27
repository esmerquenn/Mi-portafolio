function App() {

  return (
    <>
      <div>
        <Cursor />
        <Intro />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
