import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Education from "./components/Education";
import ExperienceList from "./components/ExperienceList";
import Header from "./components/Header";
import Hobbies from "./components/Hobbies";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import References from "./components/References";
import Skills from "./components/Skills";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

function App() {
  const pdfRef = useRef();

  const generatePDF = () => {
    const element = pdfRef.current;
    html2canvas(element, {
      scale: 2,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pdf.internal.pageSize.height;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdf.internal.pageSize.height;
      }

      pdf.save("Resume.pdf");
    });
  };
  return (
    <>
      <div ref={pdfRef} className="pdf-content">
        <NavBar />
        <Header />
        <AboutMe />
        <Education />
        <ExperienceList />
        <Skills />
        <Hobbies />
        <Portfolio />
        <References />
        <ContactForm />
      </div>
      <button onClick={generatePDF} className="pdf-button">
        Download Resume as PDF
      </button>
    </>
  );
}

export default App;
