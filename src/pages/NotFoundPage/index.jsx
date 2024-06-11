import "./style.scss";

function NotFoundPage() {
  return (
    <div className="error">
      <b className="error__heading">Произошла ошибка 😕</b>
      <p className="error__description">
        К сожалению, не удалось найти интересующий вас товар, повторите попытку
        позже.
      </p>
    </div>
  );
}

export { NotFoundPage };
