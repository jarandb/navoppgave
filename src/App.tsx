import React from "react";
import axios from "axios";

// css
import "./App.less";

// Components
import Jobs from "./components/Jobs/Jobs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";

// Types/Interfaces
import IJob from "./Interfaces/IJob";
interface IJobAxios {
  content: IJob[];
}
const defaultJobs: IJob[] = [];

function App() {
  const [jobs, setJobs]: [IJob[], (jobs: IJob[]) => void] =
    React.useState(defaultJobs);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] =
    React.useState("");

  React.useEffect(() => {
    axios
      .get<IJobAxios>(
        "https://arbeidsplassen.nav.no/public-feed/api/v1/ads?size=100",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWJsaWMudG9rZW4udjFAbmF2Lm5vIiwiYXVkIjoiZmVlZC1hcGktdjEiLCJpc3MiOiJuYXYubm8iLCJpYXQiOjE1NTc0NzM0MjJ9.jNGlLUF9HxoHo5JrQNMkweLj_91bgk97ZebLdfx3_UQ",
          },
        }
      )
      .then((response) => {
        setJobs(response.data.content);
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex && ex.response && ex.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }, []);

  let showJobsComponent;
  if (loading) {
    showJobsComponent = <Loading />;
  } else if (error) {
    showJobsComponent = <Jobs jobs={jobs} />;
  } else {
    showJobsComponent = <Jobs jobs={jobs} />;
  }

  return (
    <div className="App">
      <Header />
      {showJobsComponent}
      <Footer />
    </div>
  );
}

export default App;
