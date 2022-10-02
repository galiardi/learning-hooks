import { useCounter } from "../custom-hooks/useCounter";
import { useFetch } from "../custom-hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, error } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  console.log({ data, isLoading, error });

  const { author, quote } = !!data && data[0];

  return (
    <>
      <div className="title">
        <h1 className="mb-5">Multiple Custom Hooks</h1>
        {isLoading && (
          <div className="alert alert-info text-center">loading...</div>
        )}
      </div>
      <hr />

      {error && (
        <div className="alert alert-danger text-center">{error.message}</div>
      )}

      {data && (
        <blockquote className="blockquote text-right">
          <p className="mb-2">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button
        onClick={() => decrement(1, 1)}
        className="btn btn-primary"
        disabled={isLoading}
      >
        Prev quote
      </button>
      <button
        onClick={() => increment(1)}
        className="btn btn-primary"
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
