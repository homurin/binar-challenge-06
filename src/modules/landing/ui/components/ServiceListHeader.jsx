function ServiceListHeader({ title, text }) {
  return (
    <>
      <div className="text-service-bold mb-4">
        <strong>{title}</strong>
      </div>
      <div className="text-service-regular">
        <p>{text}</p>
      </div>
    </>
  );
}

export default ServiceListHeader;
