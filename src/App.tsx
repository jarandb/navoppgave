import React from "react";
import axios from "axios";

// css
import "./App.less";

// Components
import Jobs from "./components/Jobs/Jobs";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading/Loading";
import ErrorCard from "./components/Error/Error";

// Types/Interfaces
import IJob from "./Interfaces/IJob";
interface IJobAxios {
  content: IJob[];
}

const config = require("./config.json");

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
      .get<IJobAxios>(`${config.apiBasePath}/public-feed/api/v1/ads?size=100`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${config.apiPublicKey}`,
        },
      })
      .then((response) => {
        throw Error();
        setJobs(response.data.content);
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex && ex.response && ex.response.status === 404
            ? "Vi fant ikke det du lette etter. Vennligst ta kontakt med kundeservice"
            : "en uventent feil har skjedd, dessverre. Prøv igjen senere";
        setError(error);
        setLoading(false);
      });
  }, []);

  let showJobsComponent;
  if (loading) {
    showJobsComponent = <Loading />;
  } else if (error) {
    showJobsComponent = <ErrorCard err={error} />;
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
