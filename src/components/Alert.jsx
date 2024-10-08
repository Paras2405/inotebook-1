const Alert = (props) => {
  return (
    props.message && (
      <div>
        <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert">
         {props.message}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    )
  );
};

export default Alert;
