import { useEffect, useState } from "react";
import { type Moment } from "../data/moments";

// Importar as imagens da pasta assets
import academia from "../assets/academia.jpg";
import aniverAlicia from "../assets/aniver-alicia.jpg";
import anoNovo from "../assets/ano-novo.jpg";
import anoNovo2 from "../assets/ano-novo2.jpg";
import carnaval from "../assets/carnaval.jpg";
import carnaval2 from "../assets/carnaval2.jpg";
import carnaval3 from "../assets/carnaval3.jpg";
import carnaval4 from "../assets/carnaval4.jpg";
import casamento from "../assets/casamento.jpg";
import chevette from "../assets/chevette.jpg";
import datePallets from "../assets/date-pallets.jpg";
import deitadinhos from "../assets/deitadinhos.jpg";
import fly from "../assets/fly.jpg";
import fofos from "../assets/fofos.jpg";
import fofos2 from "../assets/fofos2.jpg";
import fotoCasaDede from "../assets/foto-casa-dede.jpg";
import imgWhatsapp from "../assets/IMG-20241003-WA0097.jpg";
import lavras from "../assets/lavras.jpg";
import ligacaoComVc from "../assets/ligação-com-vc.jpg";
import meioMedico from "../assets/meio-medico.jpg";
import meioMedico2 from "../assets/meio-medico2.jpg";
import mercadoNovo from "../assets/mercado-novo.jpg";
import mercadoNovo2 from "../assets/mercado-novo2.jpg";
import primeiraVez from "../assets/primeira-vez.jpg";
import primeiroBeijo from "../assets/primeiro-beijo.jpg";
import primeiroDate from "../assets/primeiro-date.jpg";
import sitio from "../assets/sitio.jpg";
import suaCasa from "../assets/sua-casa.jpg";
import uber from "../assets/uber.jpg";
import viagemLavras from "../assets/viagem-lavras.jpg";

const textoInicial  = 'meu amorzinho, a um ano, a gente começou a namorar, mas são tantos e tantos momentos lindos que a gente vive juntos todos os dias'
const ourMoments: Moment[] = [
  {
    date: "15/07/2023 - 15/07/2024",
    message: textoInicial,
    image: "", // Sem imagem para o primeiro slide
  },
  {
    date: "01/07/2024",
    message: "com você a vida é mais bonita",
    image: meioMedico2,
  },
  {
    date: "25/08/2023",
    message: "e com você tudo é mais divertido",
    image: fofos2,
  },
  {
    date: "01/08/2023",
    message: "a gente da beijinho",
    image: primeiroBeijo,
  },
  {
    date: "15/07/2023",
    message: "vc me chama pra passear no mercado novo ",
    image: primeiroDate,
  },
  {
    date: "20/07/2023", 
    message: "a gente vai pra casa um do outro",
    image: suaCasa,
  },
    {
    date: "20/08/2023",
    message: "e tira fotos lindas juntos",
    image: fofos,
  },
  {
    date: "25/07/2023",
    message: "a gente faz coisas divertidas",
    image: primeiraVez,
  },
  
  {
    date: "15/08/2023",
    message: "e vive momentos importantes juntos",
    image: meioMedico,
  },
  
  {
    date: "01/09/2023",
    message: "passear com você é tão legal",
    image: mercadoNovo,
  },
  {
    date: "10/09/2023",
    message: "ficar deitadinhos juntos sem fazer nada é uma das coisas favoritas do mundo",
    image: deitadinhos,
  },
  {
    date: "15/09/2023", 
    message: "tudo isso porque é tudo com você",
    image: aniverAlicia,
  },
  {
    date: "20/09/2023",
    message: "só passar um momento com você já torna o meu dia muito e muito mais especial",
    image: ligacaoComVc ,
  },
  {
    date: "01/10/2023",
    message: "tudo que eu quero é viver isso pra sempre",
    image: chevette,
  },
  {
    date: "01/04/2024",
    message: "viajar juntos",
    image: viagemLavras,
  },
  {
    date: "05/04/2024",
    message: "tirar fotos lindas",
    image: lavras,
  },
  {
    date: "01/01/2024",
    message: "começar o ano juntos",
    image: anoNovo2,
  },
  {
    date: "10/02/2024",
    message: "e viver o carnaval",
    image: carnaval,
  },
  {
    date: "12/02/2024",
    message: "e da mais beijos no carnaval",
    image: carnaval2,
  },
  {
    date: "13/02/2024",
    message: "e se divertir juntos",
    image: carnaval3,
  },
  {
    date: "14/02/2024",
    message: "se fantasiar juntos",
    image: carnaval4,
  },
  {
    date: "15/03/2024",
    message: "treinar juntinhos ",
    image: academia,
  },
  
  {
    date: "01/06/2024",
    message: "brincar com a fly",
    image: fly,
  },
  {
    date: "15/04/2024",
    message: "você me leva nos lugares mais legais",
    image: sitio,
  },
  {
    date: "15/06/2024",
    message: "me apresenta as pessoas importantes da sua vida",
    image: casamento,
  },
  {
    date: "15/05/2024",
    message: "e até ficar no uber nas maiores distâncias é divertido com você",
    image: uber,
  },
  {
    date: "10/07/2024",
    message: "que a gente continue vivendo dias e dias de felicidade",
    image: mercadoNovo2,
  },
  {
    date: "15/07/2024",
    message: "muito obrigada por esse ano lindo de amor!",
    image: imgWhatsapp,
  },
];


export default function TimelineCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % ourMoments.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + ourMoments.length) % ourMoments.length);
  };

  // Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const { message, image }: Moment = ourMoments[currentIndex];
  const isFirstSlide = currentIndex === 0;

  return (
    <div 
      style={styles.carousel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      
      <div style={styles.container}>
        {isFirstSlide ? (
          
          <div style={styles.firstSlide}>
            <h1 style={styles.firstSlideMessage}>{message}</h1>
          </div>
        ) : (
          <div style={styles.card}>
            <img 
              style={styles.image} 
              src={image} 
              alt={message}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2FhYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuKdpO+4jzwvdGV4dD48L3N2Zz4=';
              }}
            />
            <h2 style={styles.message}>{message}</h2>
          </div>
        )}
        
        <div style={styles.navigation}>
          <button 
            style={{
              ...styles.button,
              backgroundColor: currentIndex === 0 ? "#ccc" : "#ff6b6b"
            }} 
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            ← 
          </button>
          <span style={styles.counter}>
            ❤️
          </span>
          <button 
            style={{
              ...styles.button,
              backgroundColor: currentIndex === ourMoments.length - 1 ? "#ccc" : "#ff6b6b"
            }} 
            onClick={nextSlide}
            disabled={currentIndex === ourMoments.length - 1}
          >
             →
          </button>
        </div>
        
      </div>
    </div>
  );
}


const styles = {
  carousel: {
    backgroundColor: "#ffb3a7",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
    position: "fixed" as const,
    top: 0,
    left: 0,
  },
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "2rem",
    padding: "1rem",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  card: {
    background: "#fff8eb",
    padding: "2rem",
    borderRadius: "20px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as const,
    width: "90%",
    maxWidth: "400px",
    transition: "all 0.3s ease",
  },
  image: {
    width: "100%",
    maxWidth: "450px",
    height: "400px",
    objectFit: "cover" as const,
    borderRadius: "12px",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  date: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "0.5rem",
    fontWeight: "500" as const,
  },
  message: {
    fontSize: "18px",
    color: "#333",
    margin: "0",
    lineHeight: "1.4",
    fontWeight: "600" as const,
  },
  navigation: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    maxWidth: "400px",
    gap: "1rem",
  },
  button: {
    backgroundColor: "#ff6b6b",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "25px",
    fontSize: "16px",
    fontWeight: "600" as const,
    cursor: "pointer",
    transition: "all 0.3s ease",
    minWidth: "100px",
    boxShadow: "0 2px 10px rgba(255, 107, 107, 0.3)",
  },
  counter: {
    fontSize: "14px",
    color: "#333",
    fontWeight: "500" as const,
    padding: "8px 16px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "15px",
  },
  firstSlide: {
    textAlign: "center" as const,
    width: "90%",
    maxWidth: "600px",
    padding: "2rem",
  },
  firstSlideMessage: {
    fontSize: "24px",
    color: "white",
    margin: "0",
    lineHeight: "1.5",
    fontWeight: "400" as const,
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    fontFamily: "Georgia, serif",
  },
  swipeHint: {
    fontSize: "12px",
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center" as const,
    marginTop: "1rem",
    fontStyle: "italic" as const,
  },
};