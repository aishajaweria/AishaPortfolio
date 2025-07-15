import { Col } from "react-bootstrap";

export const MobileApp = ({ title, description, imgUrl}) => {
  return (
    <Col size={12} sm={8} md={4}>
      <div className="proj-imgbx1">
        <img src={imgUrl} />
        <div className="proj-tx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={git} target="_blank" rel="noopener noreferrer" className="github-link">
            GitHub
          </a>
        </div>
      </div>
    </Col>
  )
}
