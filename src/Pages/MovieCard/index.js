import { Link } from "react-router-dom";

export function MovieCards(props) {
  return (
    <div className="card" style={{ width: "17rem" }}>
      <img
        className="card-img-top"
        style={{ width: "100%" }}
        src="https://img1.migalhas.uol.com.br/gf_base/empresas/MIGA/imagens/E815FF796C22D405AAB02BEDF38C23F48B63_cinema.jpg"
        alt="cinema"
      />
      <div className="card-body">
        <h5
          className="card-title"
          style={{ fontSize: "20px", marginLeft: "50px", margin: "10px" }}
        >{`Coleção ${props.owner}`}</h5>

        <Link to={`/movie/${props.id}`} className="btn btn-primary">
          Ver a Coleção Completa!
        </Link>
      </div>
    </div>
  );
}
