import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaRegBookmark,
  FaShareAlt,
  FaRegStar,
  FaStar,
  FaEye,
} from "react-icons/fa";
import moment from "moment";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  // console.log(news);
  const { _id, title, details, image_url, author, rating, total_view } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center justify-content-between">
        <div className="d-flex gap-2">
          <Image style={{ height: "45px" }} src={author?.img} roundedCircle />
          <div>
            <h6 className="mb-0">{author?.name}</h6>
            <p>
              <small>
                {moment(author?.published_date).format("YYYY-MM-DD")}
              </small>
            </p>
          </div>
        </div>
        <div>
          <FaRegBookmark /> <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img className="py-3" variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)} <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center justify-content-between">
        <div>
          <Rating
            placeholderRating={rating?.number}
            readonly
            emptySymbol={<FaRegStar />}
            placeholderSymbol={<FaStar className="text-warning" />}
            fullSymbol={<FaStar />}
          />
          <span className="ms-2">{rating?.number}</span>
        </div>
        <div>
          <FaEye /> <small>{total_view}</small>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
