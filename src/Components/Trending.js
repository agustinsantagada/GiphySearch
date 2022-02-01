import "../Styles/styles-Resultados.css";
import ClipLoader from "react-spinners/ClipLoader";

export default function Trending(props) {
  return (
    <div className={` App ${props.isDarkMode ? "dark" : "light"}`}>
      <div>
        <h2 className="Resultados-text">Resultados</h2>
        <div className="Resultados">
          {props.loading ? (
            <ClipLoader
              className="Loader"
              color="#6809e1"
              size="5em"
              margin="30em"
            />
          ) : (
            props.gifsTrend.map((g) => {
              return (
                <a href={g.url}>
                  <img
                    className="Resultados-imagenes-pic"
                    width="150px"
                    height="150px"
                    src={g.images.fixed_width.url}
                    alt={g.title}
                  />
                </a>
              );
            })
          )}
          )
        </div>
      </div>
    </div>
  );
}
