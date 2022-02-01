import "../Styles/styles-Resultados.css";
import NotFound from "../Components/NotFound";
import ClipLoader from "react-spinners/ClipLoader";

export default function Resultados(props) {
  return (
    <div className={`App ${props.isDarkMode ? "dark" : "light"}`}>
      <h2 className="Resultados-text">Resultados</h2>
      <div className="Resultados">
        {props.loading ? (
          <ClipLoader
            className="Loader"
            color="#6809e1"
            size="5em"
            margin="30em"
          />
        ) : props.gifs.length === 0 && props.button === false ? (
          props.gifsTrend.map((g) => {
            return (
              <a href={g.url}>
                <img
                  className="Resultados-imagenes-pic"
                  width="150px"
                  height="150px"
                  key={g.id}
                  src={g.images.fixed_width.url}
                  alt={g.title}
                />
              </a>
            );
          })
        ) : props.gifs.length > 0 && props.text.length > 0 ? (
          props.gifs.map((g) => {
            return (
              <a href={g.url}>
                <img
                  className="Resultados-imagenes-pic"
                  width="150px"
                  height="150px"
                  key={g.id}
                  src={g.images.fixed_width.url}
                  alt={g.title}
                />
              </a>
            );
          })
        ) : props.gifs.length === 0 && props.button === true ? (
          <></>
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}
