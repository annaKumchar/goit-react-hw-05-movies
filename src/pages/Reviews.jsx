import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/MovieAPI/FetchMovie';
import {
  ReviewsAuthor,
  ReviewsContent,
  ReviewsList,
  ReviewsItem,
} from 'components/Reviews/Reviews.styled';

export default function Reviews() {
  const [reviewInfo, setReviewInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviewInfo() {
      const review = await getMovieReviews(movieId);
      setReviewInfo(review);
    }
    getReviewInfo();
  }, [movieId]);
  return (
    <section>
      <div>
        {reviewInfo.length !== 0 ? (
          <ReviewsList>
            {reviewInfo.map(({ id, author, content }) => (
              <ReviewsItem key={id}>
                <ReviewsAuthor>
                  <b>{author}</b>
                </ReviewsAuthor>
                <ReviewsContent>{content}</ReviewsContent>
                <br />
              </ReviewsItem>
            ))}
          </ReviewsList>
        ) : (
          <p>Not yet reviews</p>
        )}
      </div>
    </section>
  );
}
