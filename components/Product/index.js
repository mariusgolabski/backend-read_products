import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import { uid } from "uid";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>

      {data.reviews && data.reviews.length > 0 && (
        <div>
          <h3>Reviews:</h3>
          <ul>
            {data.reviews.map((review) => (
              <li key={review._id}>
                <p>Rating: {review.rating}</p>
                <p>Title: {review.title}</p>
                <p>Text: {review.text}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
