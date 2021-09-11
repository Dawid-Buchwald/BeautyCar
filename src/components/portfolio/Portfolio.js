import {Carousel} from 'react-carousel-minimal';

const corvette = require("../../images/corvette.jpg").default;
const porsche = require("../../images/porsche.jpg").default;
const mustang = require("../../images/mustang.jpg").default;
const audi = require("../../images/audi.jpg").default;
const BMW = require("../../images/BMW.jpg").default;
const nissan = require("../../images/nissan.jpg").default;
const dodge = require("../../images/dodge.jpg").default;
const ranger = require("../../images/ranger.jpg").default;


const data = [
    {
      image: corvette,
      caption: "Corvette"
    },
    {
      image: porsche,
      caption: "Porsche"
    },
    {
      image: mustang,
      caption: "Ford Mustang"
    },
    {
      image: audi,
      caption: "Audi"
    },
    {
      image: BMW,
      caption: "BMW"
    },
    {
      image: nissan,
      caption: "Nissan"
    },
    {
      image: dodge,
      caption: "Dodge"
    },
    {
      image: ranger,
      caption: "Ford Ranger"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: "white"
  }

const Portfolio = () => {
    return (
        <>
            <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2 id="portfolio">Nasze prace:</h2>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={4000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            captionPosition="top"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="#bbb"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
        </>
  );
}

export default Portfolio;