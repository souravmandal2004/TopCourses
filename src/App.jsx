import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { apiUrl, filterData } from "./data";
import Spinner from "./Components/Spinner";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState (filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();

      // Save data into a variable
      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong!");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-[#4A4E69] min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>

      <div className="bg-[#4A4E69]">
        <div>
          
          <Filter filterData={filterData} category={category} setCategory={setCategory} />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap">
          {loading ? <Spinner /> : <Cards courses={courses} category={category}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
