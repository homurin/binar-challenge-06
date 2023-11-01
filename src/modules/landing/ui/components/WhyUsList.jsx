function WhyUsList({ title, children }) {
  return (
    <>
      <div className="text-why-us-regular mb-4 text-center">{title}</div>
      <div className="row g-4">{children}</div>
    </>
  );
}

export default WhyUsList;
