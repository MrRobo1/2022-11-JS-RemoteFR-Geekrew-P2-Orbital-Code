import { useEffect } from "react";

const changeBackgroundImage = (imageUrl) => {
  document.body.style.backgroundImage = `url(${imageUrl})`;
};

function BackgroundChanger() {
  useEffect(() => {
    const page = window.location.pathname;

    if (page === "/About") {
      changeBackgroundImage(
        "https://i.ibb.co/7Yy2f8h/Pierre-A-cosmonaute-view-from-space-with-deep-space-behind-and-ea1d0708-7e03-49d6-8f1e-cf023d575f80.png"
      );
    } else if (page === "/FAQ") {
      changeBackgroundImage(
        "https://i.ibb.co/7Yy2f8h/Pierre-A-cosmonaute-view-from-space-with-deep-space-behind-and-ea1d0708-7e03-49d6-8f1e-cf023d575f80.png"
      );
    } else if (page === "/Contact") {
      changeBackgroundImage(
        "https://i.ibb.co/7Yy2f8h/Pierre-A-cosmonaute-view-from-space-with-deep-space-behind-and-ea1d0708-7e03-49d6-8f1e-cf023d575f80.png"
      );
    } else if (page === "/Home") {
      changeBackgroundImage("https://i.ibb.co/yFRWbbv/bg.jpg");
    }
  }, []);

  return null;
}

export default BackgroundChanger;
