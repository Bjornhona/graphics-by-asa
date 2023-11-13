import { ProjectsProvider } from './pages/portfolio/projectGallery/ProjectsContext';
import {
  Routes,
  Route
} from "react-router-dom";
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import Resume from './pages/resume/Resume';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';
import PortfolioPage from './pages/portfolio/portfolioPage/PortfolioPage';
import PageNotFound from './pages/not_found/PageNotFound';
import './App.scss';

function App() {

  return (
    <div className="App">
      <ProjectsProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioPage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </ProjectsProvider>
    </div>
  );
}

export default App;
