import TimeSlider from "./TimeSlider.jsx";

const Home = () => {
  const snapshots = [
    {
      date: "1999-11-28",
      url: "https://web.archive.org/web/19991128130925/http://univ-annaba.net",
      description:
        "The earliest available snapshot of the Badji Mokhtar University website following its official launch, capturing the original design and layout",
    },
    {
      date: "2000-06-16",
      url: "https://web.archive.org/web/20000616230634/http://univ-annaba.net:80/",
      description:
        "The first snapshot of the Badji Mokhtar University website in the 21st century, showcasing minor updates to content and layout",
    },
    {
      date: "2001-07-08",
      url: "https://web.archive.org/web/20010708152523/http://www.univ-annaba.net:80/",
      description:
        "A significant design change, though some might argue it took a step back in terms of user experience and aesthetics",
    },
    {
      date: "2003-10-01",
      url: "https://web.archive.org/web/20031001094041/http://www.univ-annaba.org/",
      description:
        "Introduction of Flash elements, bringing interactive features and animations, making the website more engaging",
    },
    {
      date: "2007-10-02",
      url: "https://web.archive.org/web/20071002041909/http://www.univ-annaba.org/",
      description:
        "A modernized website design focused on improved usability and a cleaner visual style",
    },
    {
      date: "2010-06-12",
      url: "https://web.archive.org/web/20100612222605/http://univ-annaba.org/",
      description:
        "Transition of the website's domain from univ-annaba.org to univ-annaba.dz, reflecting a stronger local and national identity",
    },
    {
      date: "2014-07-10",
      url: "https://web.archive.org/web/20140710053144/http://www1.univ-annaba.dz/",
      description:
        "Widely regarded as the university website’s best design, featuring a balanced blend of functionality and aesthetic appeal",
    },
    {
      date: "2017-01-15",
      url: "https://web.archive.org/web/20170115082156/http://www.univ-annaba.dz/",
      description:
        "Captures the design used from 2015 to 2022, characterized by a stable, user-friendly interface with minimal change",
    },
    {
      date: "2022-01-31",
      url: "https://web.archive.org/web/20220131082320/http://www.univ-annaba.dz/",
      description:
        "An initial look at the current design of the Badji Mokhtar University website, highlighting a modern aesthetic and updated functionality",
    },
  ];

  return (
    <div>
      <TimeSlider snapshots={snapshots} />
    </div>
  );
};

export default Home;
