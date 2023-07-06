import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Card1 from "../assets/card-1.jpg";
import Card2 from "../assets/card-2.jpg";
import Card3 from "../assets/card-3.jpg";
import Card4 from "../assets/card-4.jpg";
import "../App.css";
const CardCarousel: React.FC = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [cards, setCards] = React.useState([
    {
      image: Card1,
      description: "Olga",
      Age: 50,
    },
    {
      image: Card2,
      description: "Devid",
      Age: 25,
    },
    {
      image: Card3,
      description: "Stive",
      Age: 40,
    },
    {
      image: Card4,
      description: "Kristina",
      Age: 35,
    },
  ]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="CardCarousel">
      <img src={cards[activeStep].image} alt="Card" />
      <h4>{cards[activeStep].description}</h4>
      <b>AGE {cards[activeStep].Age}</b>
      <MobileStepper
        variant="progress"
        steps={cards.length}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === cards.length - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
};

export default CardCarousel;
