function PolicyItem({ icon, title, subtitle }) {
  return (
    <div className="policy-item">
      <div className="policy-icon">
        <img src={icon} alt={title} />
      </div>
      <div className="policy-text">
        <p className="policy-title">{title}</p>
        <p className="policy-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

export default PolicyItem;